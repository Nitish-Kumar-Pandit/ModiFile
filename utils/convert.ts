// imports
import { Action } from '../types';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

function getFileExtension(file_name: string) {
  const regex = /(?:\.([^.]+))?$/; // Matches the last dot and everything after it
  const match = regex.exec(file_name);
  if (match && match[1]) {
    return match[1];
  }
  return ''; // No file extension found
}

function removeFileExtension(file_name: string) {
  const lastDotIndex = file_name.lastIndexOf('.');
  if (lastDotIndex !== -1) {
    return file_name.slice(0, lastDotIndex);
  }
  return file_name; // No file extension found
}

function buildFFmpegCommand(
  input: string,
  output: string,
  to: string,
  file_type: string,
  settings?: any
): string[] {
  const cmd = ['-i', input];

  // Apply settings based on file type
  if (file_type.includes('video')) {
    return buildVideoCommand(cmd, output, to, settings);
  } else if (file_type.includes('audio')) {
    return buildAudioCommand(cmd, output, to, settings);
  } else if (file_type.includes('image')) {
    return buildImageCommand(cmd, output, to, settings);
  } else {
    // Default command
    return [...cmd, output];
  }
}

function buildVideoCommand(cmd: string[], output: string, to: string, settings?: any): string[] {
  // Quality settings
  if (settings?.quality) {
    switch (settings.quality) {
      case 'low':
        cmd.push('-crf', '28', '-preset', 'fast');
        break;
      case 'medium':
        cmd.push('-crf', '23', '-preset', 'medium');
        break;
      case 'high':
        cmd.push('-crf', '18', '-preset', 'slow');
        break;
      case 'lossless':
        cmd.push('-crf', '0', '-preset', 'veryslow');
        break;
    }
  }

  // Resolution
  if (settings?.resolution) {
    cmd.push('-s', settings.resolution);
  }

  // Framerate
  if (settings?.framerate) {
    cmd.push('-r', settings.framerate.toString());
  }

  // Bitrate
  if (settings?.bitrate) {
    cmd.push('-b:v', settings.bitrate);
  }

  // Special handling for 3gp
  if (to === '3gp') {
    return [
      ...cmd,
      '-r', '20',
      '-s', '352x288',
      '-vb', '400k',
      '-acodec', 'aac',
      '-strict', 'experimental',
      '-ac', '1',
      '-ar', '8000',
      '-ab', '24k',
      output,
    ];
  }

  cmd.push(output);
  return cmd;
}

function buildAudioCommand(cmd: string[], output: string, to: string, settings?: any): string[] {
  // Quality settings for audio
  if (settings?.quality) {
    switch (settings.quality) {
      case 'low':
        cmd.push('-b:a', '128k');
        break;
      case 'medium':
        cmd.push('-b:a', '192k');
        break;
      case 'high':
        cmd.push('-b:a', '320k');
        break;
      case 'lossless':
        if (to === 'flac' || to === 'wav') {
          cmd.push('-c:a', 'flac');
        } else {
          cmd.push('-b:a', '320k');
        }
        break;
    }
  }

  // Sample rate
  if (settings?.sampleRate) {
    cmd.push('-ar', settings.sampleRate.toString());
  }

  cmd.push(output);
  return cmd;
}

function buildImageCommand(cmd: string[], output: string, to: string, settings?: any): string[] {
  // Quality for images
  if (settings?.quality && (to === 'jpg' || to === 'jpeg')) {
    switch (settings.quality) {
      case 'low':
        cmd.push('-q:v', '10');
        break;
      case 'medium':
        cmd.push('-q:v', '5');
        break;
      case 'high':
        cmd.push('-q:v', '2');
        break;
      case 'lossless':
        cmd.push('-q:v', '1');
        break;
    }
  }

  // Resolution for images
  if (settings?.resolution) {
    cmd.push('-s', settings.resolution);
  }

  cmd.push(output);
  return cmd;
}

export default async function convert(
  ffmpeg: FFmpeg,
  action: Action,
): Promise<any> {
  const { file, to, file_name, file_type, settings } = action;
  const input = getFileExtension(file_name);
  const output = removeFileExtension(file_name) + '.' + to;

  await ffmpeg.writeFile(input, await fetchFile(file));

  // Build FFmpeg command with settings
  const ffmpeg_cmd = buildFFmpegCommand(input, output, to as string, file_type, settings);

  // Execute command
  await ffmpeg.exec(ffmpeg_cmd);

  const data = (await ffmpeg.readFile(output)) as any;
  const blob = new Blob([data], { type: file_type.split('/')[0] });
  const url = URL.createObjectURL(blob);
  return { url, output };
}
