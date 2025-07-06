'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, Download } from 'lucide-react';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import ConversionSettingsComponent from './ConversionSettings';
import mockConvert from '@/utils/mock-convert';
import { ConversionSettings } from '../types';

interface UploadedFile {
  file: File;
  id: string;
  preview?: string;
  outputFormat?: string;
  isConverting?: boolean;
  isConverted?: boolean;
  isError?: boolean;
  downloadUrl?: string;
  outputFileName?: string;
  settings?: ConversionSettings;
}

// Format options for different file types
const formatOptions = {
  image: ['jpg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'svg'],
  video: ['mp4', 'avi', 'mov', 'webm', 'mkv', 'flv', 'wmv', '3gp'],
  audio: ['mp3', 'wav', 'flac', 'aac', 'ogg', 'wma', 'm4a'],
  document: ['pdf', 'docx', 'txt', 'rtf']
};

export default function SimpleDropzone() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substring(2, 11),
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
      isConverting: false,
      isConverted: false,
      isError: false,
      settings: {}
    }));

    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'],
      'audio/*': ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
      'application/pdf': ['.pdf'],
      'text/*': ['.txt', '.csv', '.json'],
    }
  });

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const updateFileFormat = (id: string, format: string) => {
    setFiles(prev => prev.map(file =>
      file.id === id ? { ...file, outputFormat: format } : file
    ));
  };

  const updateFileSettings = (id: string, settings: ConversionSettings) => {
    setFiles(prev => prev.map(file =>
      file.id === id ? { ...file, settings } : file
    ));
  };

  const convertFile = async (fileToConvert: UploadedFile) => {
    if (!fileToConvert.outputFormat) {
      alert("Please select an output format first.");
      return;
    }

    // Update file status to converting
    setFiles(prev => prev.map(file =>
      file.id === fileToConvert.id
        ? { ...file, isConverting: true, isError: false }
        : file
    ));

    try {
      const action = {
        file: fileToConvert.file,
        file_name: fileToConvert.file.name,
        file_size: fileToConvert.file.size,
        from: fileToConvert.file.name.split('.').pop() || '',
        to: fileToConvert.outputFormat,
        file_type: fileToConvert.file.type,
        settings: fileToConvert.settings
      };

      const result = await mockConvert(action);

      // Update file status to converted
      setFiles(prev => prev.map(file =>
        file.id === fileToConvert.id
          ? {
              ...file,
              isConverting: false,
              isConverted: true,
              downloadUrl: result.url,
              outputFileName: result.output
            }
          : file
      ));
    } catch (error) {
      // Update file status to error
      setFiles(prev => prev.map(file =>
        file.id === fileToConvert.id
          ? { ...file, isConverting: false, isError: true }
          : file
      ));
      alert("Conversion failed. Please try again.");
    }
  };

  const convertAllFiles = async () => {
    const filesToConvert = files.filter(f => f.outputFormat && !f.isConverted && !f.isConverting);

    if (filesToConvert.length === 0) {
      alert("Please select output formats for your files.");
      return;
    }

    setIsConverting(true);

    for (const file of filesToConvert) {
      await convertFile(file);
    }

    setIsConverting(false);
  };

  const downloadFile = (file: UploadedFile) => {
    if (file.downloadUrl && file.outputFileName && typeof window !== 'undefined') {
      const a = document.createElement('a');
      a.href = file.downloadUrl;
      a.download = file.outputFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const getFileType = (file: File): keyof typeof formatOptions => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type.startsWith('audio/')) return 'audio';
    if (file.type === 'application/pdf' || file.type.startsWith('text/')) return 'document';
    return 'document';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Dropzone */}
      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 transition-colors duration-200 rounded-lg bg-white dark:bg-slate-800 shadow-sm">
        <div
          {...getRootProps()}
          className={`p-12 text-center cursor-pointer transition-all duration-200 ${
            isDragActive 
              ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-400' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className={`mx-auto h-12 w-12 mb-4 ${
            isDragActive ? 'text-purple-500' : 'text-gray-400'
          }`} />
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
            {isDragActive ? 'Drop files here' : 'Upload your files'}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Drag and drop files here, or click to browse
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Supports images, videos, audio, PDFs, and text files
          </p>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="p-6 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-gray-200 dark:border-slate-600">
          <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Uploaded Files ({files.length})
          </h4>
          <div className="space-y-6">
            {files.map((uploadedFile) => (
              <div
                key={uploadedFile.id}
                className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg space-y-4 border border-slate-200 dark:border-slate-600"
              >
                {/* File Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {uploadedFile.preview ? (
                      <Image
                        src={uploadedFile.preview}
                        alt={uploadedFile.file.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ) : (
                      <File className="w-10 h-10 text-gray-400" />
                    )}
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {uploadedFile.file.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {formatFileSize(uploadedFile.file.size)}
                      </p>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center gap-3">
                    {uploadedFile.isError ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-red-700 dark:text-red-300">Failed</span>
                      </div>
                    ) : uploadedFile.isConverted ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-700 dark:text-green-300 hidden sm:inline">Converted</span>
                      </div>
                    ) : uploadedFile.isConverting ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Converting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full">
                        <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Ready</span>
                      </div>
                    )}

                    {uploadedFile.isConverted ? (
                      <Button
                        size="sm"
                        onClick={() => downloadFile(uploadedFile)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                      </Button>
                    ) : (
                      <button
                        onClick={() => removeFile(uploadedFile.id)}
                        className="p-2.5 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Format Selection and Settings */}
                {!uploadedFile.isConverted && !uploadedFile.isConverting && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 min-w-[80px]">
                        Convert to:
                      </span>
                      <Select
                        value={uploadedFile.outputFormat || ""}
                        onValueChange={(value) => updateFileFormat(uploadedFile.id, value)}
                      >
                        <SelectTrigger className="w-40 h-10 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 rounded-lg shadow-sm transition-all duration-200">
                          <SelectValue placeholder="Choose format..." className="text-slate-600 dark:text-slate-300" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow-lg">
                          {formatOptions[getFileType(uploadedFile.file)].map((format) => (
                            <SelectItem
                              key={format}
                              value={format}
                              className="hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer"
                            >
                              <span className="font-medium">{format.toUpperCase()}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {uploadedFile.outputFormat && (
                        <Button
                          size="sm"
                          onClick={() => convertFile(uploadedFile)}
                          disabled={uploadedFile.isConverting}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                        >
                          {uploadedFile.isConverting ? (
                            <>
                              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                              <span>Converting...</span>
                            </>
                          ) : (
                            <span>Convert</span>
                          )}
                        </Button>
                      )}
                    </div>

                    {/* Conversion Settings */}
                    {uploadedFile.outputFormat && (
                      <ConversionSettingsComponent
                        fileType={uploadedFile.file.type}
                        settings={uploadedFile.settings || {}}
                        onSettingsChange={(settings) => updateFileSettings(uploadedFile.id, settings)}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bulk Actions */}
          <div className="mt-6 flex justify-center gap-4">
            <Button
              onClick={convertAllFiles}
              disabled={isConverting || files.every(f => f.isConverted || f.isConverting || !f.outputFormat)}
              className="px-8 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
            >
              {isConverting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  <span className="text-white">Converting All...</span>
                </>
              ) : (
                <span className="text-white">Convert All Files</span>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
