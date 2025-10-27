import React from 'react';
import TabbedWidget from './TabbedWidget/TabbedWidget';
import GalleryWidget from './GalleryWidget/GalleryWidget';

const WidgetContainer = () => {
  return (
    <div className="space-y-6 h-full">
      {/* Tabbed Widget with fixed height and scroll */}
      <div className="w-full h-[60vh] min-h-[400px] lg:h-[65vh]">
        <TabbedWidget />
      </div>
      
      {/* Gallery Widget */}
      <div className="w-full">
        <GalleryWidget />
      </div>
    </div>
  );
};

export default WidgetContainer;