import React from 'react';
import WidgetContainer from './components/WidgetContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 py-4 lg:py-8">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-4rem)]">
          {/* Left Half - Empty but responsive, hidden on mobile */}
          <div className="lg:w-1/2 hidden lg:block"></div>
          
          {/* Right Half - Widgets */}
          <div className="lg:w-1/2 w-full h-full">
            <WidgetContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;