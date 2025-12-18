'use client';

import { useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  previewUrl?: string;
  onRemove: () => void;
  isLoading?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  previewUrl,
  onRemove,
  isLoading,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div className="relative">
      {previewUrl ? (
        <div className="relative rounded-lg overflow-hidden">
          <img src={previewUrl} alt="Preview" className="w-full h-48 object-cover" />
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          disabled={isLoading}
          className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-gray-400 transition-colors"
        >
          <Upload className="w-6 h-6 text-gray-400" />
          <span className="text-sm text-gray-500">
            {isLoading ? 'Uploading...' : 'Upload featured image'}
          </span>
        </button>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};
