import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full h-screen !z-50 overflow-y-auto bg-white border-r border-gray-200 flex flex-col shadow-lg">
      {/* Header with logo */}
      <div className="sticky top-0 bg-white z-10">
        <div className="p-4 flex items-center gap-2">
          <div className="bg-indigo-500 w-8 h-8 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"></path>
            </svg>
          </div>
          <span className="font-medium text-gray-800 text-lg">Cloudairy</span>
        </div>

        {/* Workspace selector */}
        <div className="mx-4 mb-4">
          <div className="border rounded-md bg-[#FAFAFA]">
            <div className="p-3 border-b">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-sm">Alexandra's Workspace</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="text-xs bg-gray-100 inline-block px-2 py-0.5 rounded text-gray-500">
                Business
              </div>
            </div>
            <div className="p-2">
              <button className="w-full flex items-center gap-2 py-1 px-2 text-xs sm:text-sm hover:bg-gray-100 rounded">
               <img src="/icn_Invite new members.png"/>
                Invite Members
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="px-4 flex-1">
        <ul className="space-y-1">
          <li className="bg-indigo-100 text-indigo-600 rounded-md">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px]">
              <img width={20} src="/icn_shared_wtih_me.png" alt="Home" />
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md">
              <img width={20} src="/Frame.png" alt="Recent" />
              <span>Recent</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md">
              <img width={20} src="/icn_favorite.png" alt="Favorites" />
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md">
              <img width={15} src="/Vector (5).png" alt="My Documents" />
              <span>My Documents</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md">
              <img width={20} src="/icn_shared_wtih_me.png" alt="Shared with me" />
              <span>Shared with me</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Pinned Spaces Section */}
      <div className="mt-4">
        <h3 className="text-xs sm:text-sm px-5 font-medium text-gray-500 mb-2">Pinned Spaces</h3>
        <hr/>
        <ul className="space-y-1 px-4 mt-4">
          <li>
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md flex-1">
                <img width={20} src="/icn_pin.png" alt="Pin" />
                <span>Alexandra's Project</span>
              </a>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md flex-1">
                <img width={20} src="/icn_pin.png" alt="Pin" />
                <span>My Project 1</span>
              </a>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Spaces Section */}
      <div className="mt-4">
        <div className="flex px-4 items-center justify-between mb-2">
          <h3 className="text-xs sm:text-sm font-medium text-gray-500">Spaces</h3>
          <button className="p-1 rounded-md text-gray-500 hover:bg-gray-200">
            <img src="/add-square.png" alt="Add Space" />
          </button>
        </div>
        <hr/>
        <ul className="space-y-1 px-4 mt-4 max-h-40 overflow-y-auto">
          {Array(5).fill().map((_, index) => (
            <li key={index}>
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md flex-1">
                  <img width={20} src='/folder-02.png' alt="Folder" />
                  <span>{index === 0 ? "Alexandra's Project" : `My Project ${index}`}</span>
                </a>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Trash */}
      <div className="mt-auto px-4 py-4 sticky bg-white bottom-0 border-t">
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-[13px] sm:text-[14px] text-gray-700 hover:bg-gray-100 rounded-md">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Trash</span>
          <svg className="w-4 h-4 ml-auto text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;