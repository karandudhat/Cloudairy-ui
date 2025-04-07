import React, { useState, useEffect } from 'react';
import ToolPanel from './components/toolpanel';
import Sidebar from './components/sidebar';
import SearchWithCategories from './components/hero';
import HeaderNotificationBar from './components/HeaderNotificationBar';
import MindmapTemplateGallery from './components/MindmapTemplateGallery';
import BoardsView from './components/BoardsView';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on mount and resize
  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto close sidebar on mobile
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Check initially
    checkForMobile();
    
    // Add event listener
    window.addEventListener('resize', checkForMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex'>
      <ToolPanel toggleSidebar={toggleSidebar} />
      
      {/* Sidebar with animation */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 -ml-5'
        } ${isMobile ? 'fixed top-0 left-0 h-full z-50' : ''}`}
      >
        {isSidebarOpen && <Sidebar />}
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <div className={`flex-1 h-screen overflow-y-auto transition-all duration-300 ${
        isMobile ? '' : (isSidebarOpen ? '' : 'ml-0')
      }`}>
        <HeaderNotificationBar />
        <SearchWithCategories />
        <MindmapTemplateGallery />
        <BoardsView />
      </div>
    </div>
  );
};

export default App;