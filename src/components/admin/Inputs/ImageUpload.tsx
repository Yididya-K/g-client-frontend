// components/ImageField.tsx
'use client';

import { InputHTMLAttributes, useRef, useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, Image as ImageIcon } from 'lucide-react'; // Use Image icon for placeholder/empty state
import clsx from 'clsx';

type Status = 'default' | 'success' | 'error' | 'disabled';

interface ImageFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
  status?: Status;
  label?: string;
}

export default function ImageField({
  hint = '',
  status = 'default',
  disabled = false,
  label,
  className,
  onChange, // Handle FileList changes here
  ...props // For 'accept', etc.
}: ImageFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Effect to create and clean up the object URL for the preview
  useEffect(() => {
    // If a file is selected, create a preview URL
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);

      // Clean up the previous URL when the file changes or component unmounts
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      // If no file is selected, clear the preview URL
      setPreviewUrl(null);
    }
    // Depend on selectedFile
  }, [selectedFile]);

   // Clean up URL on component unmount
   useEffect(() => {
     return () => {
       if (previewUrl) {
         URL.revokeObjectURL(previewUrl);
       }
     };
   }, [previewUrl]); // Depend on previewUrl to ensure cleanup happens


  // Reuse styling logic
   const borderColor = clsx({
    'border-blue-300': status === 'default',
    'border-green-500': status === 'success',
    'border-red-500': status === 'error',
    'border-gray-400': status === 'disabled',
  });

  const bgColor = clsx({
    'bg-white': ( status === 'default') && !disabled,
    'bg-green-50': status === 'success',
    'bg-red-50': status === 'error',
    'bg-gray-200': status === 'disabled',
  });

  const hintColor = clsx({
    'text-gray-500': status === 'default' || status === 'disabled',
    'text-green-600': status === 'success',
    'text-red-600': status === 'error',
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files && files.length > 0 ? files[0] : null; // Usually handle single image

    setSelectedFile(file); // Update internal state
    if (onChange) {
      onChange(event); // Pass the event up to the parent
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the native input value
       // Consider how to notify parent component that the file is cleared
       // If using react-hook-form or similar, this might need a manual trigger
    }
     // You might need to manually call onChange(null) or similar depending on parent component's state management
  };


  return (
    <div className={clsx('w-full', className)}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}

      <div
        className={clsx(
          'flex items-center px-2 py-2 min-h-[56px] border-b-2 transition cursor-pointer relative', // min-h for preview area, relative for positioning
          bgColor,
          borderColor,
           { 'cursor-not-allowed': status === 'disabled' }
        )}
         onClick={() => !disabled && fileInputRef.current?.click()} // Trigger hidden input click
      >
         {/* Hidden file input - specifically for images */}
         <input
            ref={fileInputRef}
            type="file"
            className="hidden" // Hide the default input
            disabled={status === 'disabled'}
            onChange={handleFileChange}
            accept="image/*" // <<< Key change: only accept image files
            {...props} // Spread other props like potential 'multiple' (though usually 1 image)
          />

          {/* Display area for preview or placeholder */}
          {previewUrl ? (
            // Show image preview if available
            <img src={previewUrl} alt="Image preview" className="w-10 h-10 object-cover rounded mr-3" />
          ) : (
            // Show placeholder icon if no image selected
            <ImageIcon className="w-5 h-5 text-gray-500 mr-3" />
          )}

          {/* Display file name or placeholder text */}
          <span className={clsx(
             'flex-1 text-sm overflow-hidden text-ellipsis whitespace-nowrap',
             { 'text-gray-400': status === 'disabled', 'text-gray-700': status !== 'disabled' }
          )}>
             {selectedFile?.name || props.placeholder || 'Upload Image'}
          </span>


          {/* Clear button */}
          {selectedFile && !disabled && (
             <XCircle
                className="w-4 h-4 text-gray-400 cursor-pointer ml-2 z-10" // z-10 to ensure clickability over image
                onClick={(e) => { e.stopPropagation(); handleClearFile(); }} // Prevent wrapper click when clearing
             />
          )}


          {/* Status Icons */}
          {status === 'success' && <CheckCircle className="w-4 h-4 text-green-600 ml-2" />}
          {status === 'error' && <AlertCircle className="w-4 h-4 text-red-600 ml-2" />}
      </div>

      <p className={`text-xs mt-1 ${hintColor}`}>{hint}</p>

    </div>
  );
}