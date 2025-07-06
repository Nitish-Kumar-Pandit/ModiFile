// Mock conversion utility for testing UI without FFmpeg
import { Action } from '../types';

// Simulate file conversion with a delay
export default async function mockConvert(action: Action): Promise<any> {
  const { file, to, file_name, file_type, settings } = action;
  
  // Simulate conversion time based on file size and quality
  const baseTime = 1000; // 1 second base
  const sizeMultiplier = Math.min(file.size / (1024 * 1024), 10); // Max 10 seconds for size
  const qualityMultiplier = settings?.quality === 'lossless' ? 2 : 
                           settings?.quality === 'high' ? 1.5 : 
                           settings?.quality === 'low' ? 0.5 : 1;
  
  const conversionTime = baseTime + (sizeMultiplier * 500 * qualityMultiplier);
  
  // Simulate conversion progress
  await new Promise(resolve => setTimeout(resolve, conversionTime));
  
  // Create a mock converted file (just rename the original for demo)
  const originalExtension = file_name.split('.').pop();
  const nameWithoutExtension = file_name.replace(`.${originalExtension}`, '');
  const output = `${nameWithoutExtension}.${to}`;
  
  // Create a blob URL for download (using original file for demo)
  const blob = new Blob([file], { type: getMimeType(to as string) });
  const url = URL.createObjectURL(blob);
  
  return { url, output };
}

// Helper function to get MIME type based on extension
function getMimeType(extension: string): string {
  const mimeTypes: { [key: string]: string } = {
    // Images
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'bmp': 'image/bmp',
    'tiff': 'image/tiff',
    'svg': 'image/svg+xml',
    
    // Videos
    'mp4': 'video/mp4',
    'avi': 'video/avi',
    'mov': 'video/quicktime',
    'wmv': 'video/x-ms-wmv',
    'flv': 'video/x-flv',
    'webm': 'video/webm',
    'mkv': 'video/x-matroska',
    '3gp': 'video/3gpp',
    
    // Audio
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'flac': 'audio/flac',
    'aac': 'audio/aac',
    'ogg': 'audio/ogg',
    'wma': 'audio/x-ms-wma',
    'm4a': 'audio/mp4',
    
    // Documents
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'txt': 'text/plain',
    'rtf': 'application/rtf',
  };
  
  return mimeTypes[extension.toLowerCase()] || 'application/octet-stream';
}

// Simulate conversion progress updates
export function createProgressSimulator(onProgress: (progress: number) => void) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15; // Random progress increments
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    onProgress(Math.min(progress, 100));
  }, 200);
  
  return () => clearInterval(interval);
}
