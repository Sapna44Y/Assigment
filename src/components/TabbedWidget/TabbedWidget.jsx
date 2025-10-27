
import React, { useState } from 'react';
import TabContent from './TabContent';

const TabbedWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  return (
    <div className="bg-gray-800 rounded-xl shadow-custom-lg border border-gray-700 overflow-hidden h-full flex flex-col">
      {/* Tabs Header - Fixed at top */}
      <div className="border-b border-gray-700 flex-shrink-0">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-white border-b-2 border-blue-500 bg-gray-700'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Scrollable area with custom scrollbar */}
      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TabbedWidget;


