import React from "react";

const ToolPanel = ({ toggleSidebar }) => {
  return (
    <div className="w-16 sm:w-20 border-r h-screen bg-[#E1E1E1] bg-opacity-10 flex flex-col relative !z-50">
      {/* Sidebar toggle button */}
      <div className="absolute top-2 w-full flex justify-center ">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      
      {/* Top section with Create New button */}
      <div className="pt-16 sm:pt-20 p-2">
        <div className="flex flex-col items-center w-full">
          <button className="text-[10px] whitespace-nowrap font-[400] flex flex-col items-center">
            <div className="bg-[#6762FE] p-2 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[12px] mb-1">
              <img width={16} src="/Vector.png" alt="Create" />
            </div>
            <span className="text-[8px] sm:text-[10px]">Create New</span>
          </button>
        </div>
      </div>
      
      <div className="mt-5">
        <hr />
      </div>
      
      {/* Project icons section */}
      <div className="flex justify-center flex-col items-center mt-5 overflow-y-auto flex-grow">
        <div className="flex justify-center w-full mt-5">
          <div className="w-8 sm:w-10 rounded-md border border-[#6762FE] bg-[#6762FE1A] p-1 flex justify-center">
            <img
              className="rounded-md w-full h-auto"
              src="https://s3-alpha-sig.figma.com/img/9d7a/c476/b66be6bfc7a82af69dfe142ccced4228?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qDvW2Vh9wBO~G47kq10xlW4IJKn-S~02INtFfqtkUfGjwHj6ni1E2g8SB4y2ZWmgRCH6EBphyeJK30o2rVSWSmBg3~LUH-Qk0A-6oaX87CQoRZgqiBXXErobiLu-EDKUr29ZNRQ0LtpWqdqJAkauNsBO2C8y7tK2ej7pzrvLeWWZNLiIEmf9x4ILWIIgfGpa6qaNQ~VxOLggesoDO0obUx-ipYjujMyYhIRrjAXBAZNktL4EJkZLkRzQarAyPCRVaXJg1CkjKUbiuPHhcG5RTs6nNyo4Hm1KnuL47suJfVhPGMJoUleALN3zhtrD-a5AVxLx~NHQikyPQNZ3VEAg7w__"
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex justify-center w-full mt-5">
          <div className="text-sm text-[#0087A7] rounded-md border border-[#0087A74D] bg-[#E5FAFF] p-2 flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10">
            MT
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <button key={index} className="flex justify-center w-full mt-5">
            <img 
              className="w-8 sm:w-auto"
              src="/Rectangle 34624804.png" 
              alt={`Project ${index + 1}`} 
            />
          </button>
        ))}
      </div>
      
      {/* Second divider */}
      <div className="mt-5">
        <hr />
      </div>
      
      {/* Bottom navigation section */}
      <div className="flex flex-col mt-2 gap-4 items-center w-full mb-5">
        <button className="text-[8px] sm:text-[10px] whitespace-nowrap font-[400] flex flex-col items-center">
          <div className="p-2 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[12px] mb-1">
            <img width={16} src="/Vector (1).png" alt="Templates" />
          </div>
          Templates
        </button>
        <button className="text-[8px] sm:text-[10px] whitespace-nowrap font-[400] flex flex-col items-center">
          <div className="p-2 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[12px] mb-1">
            <img width={16} src="/Vector (2).png" alt="Settings" />
          </div>
          Setting
        </button>
      </div>
    </div>
  );
};

export default ToolPanel;