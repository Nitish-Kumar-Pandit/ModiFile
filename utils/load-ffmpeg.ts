// Dynamic imports for FFmpeg to avoid build issues
export default async function loadFfmpeg() {
  if (typeof window === 'undefined') {
    throw new Error('FFmpeg can only be loaded in the browser');
  }

  try {
    const { FFmpeg } = await import('@ffmpeg/ffmpeg');
    const { toBlobURL } = await import('@ffmpeg/util');

    const ffmpeg = new FFmpeg();

    // Use a more reliable CDN and version
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';

    // Add logging for debugging
    ffmpeg.on('log', ({ message }) => {
      console.log('FFmpeg:', message);
    });

    ffmpeg.on('progress', ({ progress }) => {
      console.log('FFmpeg progress:', Math.round(progress * 100) + '%');
    });

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
    });

    console.log('FFmpeg loaded successfully');
    return ffmpeg;
  } catch (error) {
    console.error('Failed to load FFmpeg:', error);
    throw new Error(`Failed to load FFmpeg: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
