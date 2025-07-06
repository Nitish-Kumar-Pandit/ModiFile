'use client';

import React, { useState } from 'react';
import { Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ConversionSettings } from '../types';

interface ConversionSettingsProps {
  fileType: string;
  settings: ConversionSettings;
  onSettingsChange: (settings: ConversionSettings) => void;
}

const qualityOptions = [
  { value: 'low', label: 'Low Quality (Fast)', description: 'Smaller file size, faster conversion' },
  { value: 'medium', label: 'Medium Quality', description: 'Balanced quality and file size' },
  { value: 'high', label: 'High Quality', description: 'Better quality, larger file size' },
  { value: 'lossless', label: 'Lossless (Slow)', description: 'Best quality, largest file size' },
];

const videoResolutions = [
  { value: '640x480', label: '480p (640x480)' },
  { value: '1280x720', label: '720p HD (1280x720)' },
  { value: '1920x1080', label: '1080p Full HD (1920x1080)' },
  { value: '2560x1440', label: '1440p QHD (2560x1440)' },
  { value: '3840x2160', label: '4K UHD (3840x2160)' },
];

const imageResolutions = [
  { value: '800x600', label: 'Small (800x600)' },
  { value: '1024x768', label: 'Medium (1024x768)' },
  { value: '1920x1080', label: 'Large (1920x1080)' },
  { value: '2560x1440', label: 'Extra Large (2560x1440)' },
];

const frameRates = [
  { value: 24, label: '24 fps (Cinema)' },
  { value: 30, label: '30 fps (Standard)' },
  { value: 60, label: '60 fps (Smooth)' },
];

const sampleRates = [
  { value: 22050, label: '22.05 kHz (Low)' },
  { value: 44100, label: '44.1 kHz (CD Quality)' },
  { value: 48000, label: '48 kHz (Professional)' },
  { value: 96000, label: '96 kHz (High-Res)' },
];

export default function ConversionSettingsComponent({
  fileType,
  settings,
  onSettingsChange,
}: ConversionSettingsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateSetting = (key: keyof ConversionSettings, value: any) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  const isVideo = fileType.includes('video');
  const isAudio = fileType.includes('audio');
  const isImage = fileType.includes('image');

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full justify-between p-4 h-auto"
      >
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          <span className="font-medium">Conversion Settings</span>
        </div>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {isExpanded && (
        <div className="p-4 pt-0 space-y-4 border-t border-slate-200 dark:border-slate-700">
          {/* Quality Setting */}
          <div className="space-y-2">
            <label className="text-sm text-left font-medium text-slate-700 dark:text-slate-300">
              Quality
            </label>
            <Select
              value={settings.quality || 'medium'}
              onValueChange={(value) => updateSetting('quality', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select quality" />
              </SelectTrigger>
              <SelectContent>
                {qualityOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex flex-col items-start ">
                      <div className="font-medium text-left ">{option.label}</div>
                      <div className="text-xs text-slate-500 text-left">{option.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Video-specific settings */}
          {isVideo && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Resolution
                </label>
                <Select
                  value={settings.resolution || ''}
                  onValueChange={(value) => updateSetting('resolution', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Keep original resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Keep original</SelectItem>
                    {videoResolutions.map((res) => (
                      <SelectItem key={res.value} value={res.value}>
                        {res.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Frame Rate
                </label>
                <Select
                  value={settings.framerate?.toString() || ''}
                  onValueChange={(value) => updateSetting('framerate', value ? parseInt(value) : undefined)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Keep original frame rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Keep original</SelectItem>
                    {frameRates.map((rate) => (
                      <SelectItem key={rate.value} value={rate.value.toString()}>
                        {rate.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {/* Audio-specific settings */}
          {isAudio && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Sample Rate
              </label>
              <Select
                value={settings.sampleRate?.toString() || ''}
                onValueChange={(value) => updateSetting('sampleRate', value ? parseInt(value) : undefined)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Keep original sample rate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Keep original</SelectItem>
                  {sampleRates.map((rate) => (
                    <SelectItem key={rate.value} value={rate.value.toString()}>
                      {rate.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Image-specific settings */}
          {isImage && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Resolution
              </label>
              <Select
                value={settings.resolution || ''}
                onValueChange={(value) => updateSetting('resolution', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Keep original resolution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Keep original</SelectItem>
                  {imageResolutions.map((res) => (
                    <SelectItem key={res.value} value={res.value}>
                      {res.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Reset to defaults */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSettingsChange({})}
            className="w-full"
          >
            Reset to Defaults
          </Button>
        </div>
      )}
    </div>
  );
}
