export type ConversionSettings = {
  quality?: 'low' | 'medium' | 'high' | 'lossless';
  compression?: number; // 0-100
  resolution?: string; // e.g., '1920x1080', '1280x720'
  bitrate?: string; // e.g., '1000k', '2M'
  framerate?: number; // for videos
  sampleRate?: number; // for audio
  customParams?: string[]; // custom FFmpeg parameters
};

export type Action = {
  file: any;
  file_name: string;
  file_size: number;
  from: string;
  to: String | null;
  file_type: string;
  is_converting?: boolean;
  is_converted?: boolean;
  is_error?: boolean;
  error_message?: string;
  url?: any;
  output?: any;
  settings?: ConversionSettings;
};
