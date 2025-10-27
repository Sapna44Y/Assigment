import React, { useState, useRef } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=250&fit=crop',
      alt: 'Mountain Landscape'
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      alt: 'Portrait Photo'
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop',
      alt: 'City Skyline'
    }
  ]);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const fileInputRef = useRef(null);

  // Always show 3 images
  const imagesToShow = 3;

  const handleAddImageClick = () => {
    // Trigger the hidden file input
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, GIF, etc.)');
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Please select an image smaller than 5MB');
        return;
      }

      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      const newImage = {
        id: Date.now(),
        src: imageUrl,
        alt: `Uploaded Image ${file.name}`,
        file: file
      };

      setImages(prevImages => [...prevImages, newImage]);

      // Reset the file input
      event.target.value = '';
    }
  };

  const addSampleImage = () => {
    const sampleImages = [
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=250&fit=crop'
    ];
    
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    const newImage = {
      id: Date.now(),
      src: `${randomImage}&t=${Date.now()}`,
      alt: `Sample Image ${images.length + 1}`
    };

    setImages(prevImages => [...prevImages, newImage]);
  };

  const nextSet = () => {
    if (currentStartIndex + imagesToShow < images.length) {
      setCurrentStartIndex(currentStartIndex + 1);
    }
  };

  const prevSet = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - 1);
    }
  };

  // Get current 3 images to display
  const getCurrentImages = () => {
    return images.slice(currentStartIndex, currentStartIndex + imagesToShow);
  };

  const currentImages = getCurrentImages();

  // Calculate if we can navigate
  const canGoNext = currentStartIndex + imagesToShow < images.length;
  const canGoPrev = currentStartIndex > 0;

  return (
    <div className="bg-gray-800 rounded-xl shadow-custom-lg border border-gray-700 overflow-hidden">
      {/* Hidden file input for image upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />
      
      {/* Gallery Header */}
      <div className="border-b border-gray-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Gallery</h3>
          
          <div className="flex items-center gap-3">
            {/* Add Image Button with dropdown */}
            <div className="relative group">
              <button
                onClick={handleAddImageClick}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm flex items-center gap-1"
              >
                <span className="text-lg">+</span>
                ADD IMAGE
              </button>
              
              {/* Dropdown menu for additional options */}
              <div className="absolute right-0 top-full mt-1 w-48 bg-gray-700 border border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <button
                  onClick={handleAddImageClick}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 rounded-t-lg border-b border-gray-600 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Upload from Device
                </button>
                <button
                  onClick={addSampleImage}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600 rounded-b-lg flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Sample Image
                </button>
              </div>
            </div>

            {/* Navigation Arrows - Show if there are more than 3 images */}
            {images.length > imagesToShow && (
              <div className="flex items-center gap-1">
                <button
                  onClick={prevSet}
                  disabled={!canGoPrev}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-200 ${
                    !canGoPrev
                      ? 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed' 
                      : 'bg-gray-700 text-white border-gray-500 hover:bg-gray-600 hover:border-gray-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSet}
                  disabled={!canGoNext}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-200 ${
                    !canGoNext
                      ? 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed' 
                      : 'bg-gray-700 text-white border-gray-500 hover:bg-gray-600 hover:border-gray-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="p-6">
        <div className="relative">
          {/* Images Grid - Always show exactly 3 images */}
          <div className="grid grid-cols-3 gap-4">
            {currentImages.map((image) => (
              <div 
                key={image.id}
                className="relative group"
              >
                {/* Image Container with Hover Effects */}
                <div className="aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden relative transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-rotate-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=250&fit=crop';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                  
                  {/* Delete button on hover */}
                  <button
                    onClick={() => {
                      setImages(prev => {
                        const newImages = prev.filter(img => img.id !== image.id);
                        // Adjust current start index if we're at the end
                        if (currentStartIndex >= newImages.length) {
                          setCurrentStartIndex(Math.max(0, newImages.length - imagesToShow));
                        }
                        return newImages;
                      });
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    title="Delete image"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Image Counter - Bottom Right */}
          {images.length > 0 && (
            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentStartIndex + 1} - {Math.min(currentStartIndex + imagesToShow, images.length)} / {images.length}
            </div>
          )}
        </div>

        {/* Dots Indicator - Show if there are more than 3 images */}
        {images.length > imagesToShow && (
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(images.length / imagesToShow) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStartIndex(index * imagesToShow)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === Math.floor(currentStartIndex / imagesToShow)
                    ? 'bg-blue-500 w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* Upload instructions - Only show when there are exactly 3 images (initial state) */}
        {images.length === 3 && (
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Click "ADD IMAGE" to upload your own photos or add more sample images
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryWidget;