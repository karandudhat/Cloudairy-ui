import React from 'react';
import { ChevronDown, MoreVertical, List } from 'lucide-react';

const BoardsView = () => {
  // Sample data for boards
  const boards = Array(10).fill().map((_, index) => ({
    id: index + 1,
    title: "Customer Journey Map",
    teamName: "Team name",
    project: "Project 1",
    days: 2,
    featured: index === 1, // Second board is featured (has crown)
  }));

  return (
    <div className="p-3 sm:p-5 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3">
        <h1 className="text-base sm:text-[18px] font-[600] text-gray-800">Boards in Alexander's Space</h1>
        
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0">
          {/* Dropdown filters */}
          <div className="flex items-center border rounded-md">
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm whitespace-nowrap">Last opened</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-gray-500" />
          </div>
          
          <div className="flex items-center border rounded-md">
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm">All</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-gray-500" />
          </div>
          
          {/* List icon */}
          <div className="border rounded-md p-1 sm:p-1.5">
            <List className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Board grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {boards.map((board) => (
          <div key={board.id} className="border rounded-lg overflow-hidden shadow-sm relative">
            {/* Board preview */}
            <div className="">
              {/* Flow chart diagram (simplified representation) */}
              <div className="h-28 sm:h-36 w-full py-3 sm:py-5 flex items-center justify-center overflow-hidden bg-white">
                <div className="w-full h-full flex mx-auto justify-center relative">
                  {/* This is a simplified representation of the flow chart */}
                  <img src="/MEam57k0pzgs5JPyNh8CYA== 1.png" alt="Flow chart" className="max-h-full" />
                </div>
              </div>
            </div>
            
            {/* Board details */}
            <div className="p-2 sm:p-3 bg-white">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm sm:text-base text-gray-800 truncate">{board.title}</h3>
                <button className="text-gray-500 flex-shrink-0">
                  <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              
              <div className="mt-1 sm:mt-2 flex items-center text-xs sm:text-sm text-gray-600">
                <span className="font-medium truncate">{board.teamName}</span>
                <span className="mx-1">›</span>
                <span className="text-gray-500 truncate">{board.project}</span>
              </div>
              
              <div className="mt-0.5 text-xs sm:text-sm text-gray-500">
                {board.days} day ago
              </div>
              
              {/* Avatar - right bottom */}
              <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                <img 
                  className='rounded-full w-full h-full object-cover' 
                  src='https://s3-alpha-sig.figma.com/img/8cac/66ed/ac7e9cc006e377a554341d67f0d9b385?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AqtBXvc8-OUgDwuTm0FtP5pTtjYUHNdXAwV-z9zPZ-PgSQDuAP2YW7V1L~tVnfk2QONkRCXEe-ZMDXM8nj0e92rHcBYOjHV7SPyThxWbN6uOflpCUa-JZDO4S~PdoQwo594FuSu0e~FNuqtfCRDa~u~92x2CDZwjbn8kM3xeDD8dEHDb0FV3rm1dJV2Sj00PJmW4laed1LhEBj~LPhHMoOt48NdbuWCzU3Y~QTPAb~D9jFVPBUtBwoOa7dv-4qa7yjGTYzHiJ1dRJ3x2C4QJUEiQfIjWBs58Nl6CZksK3tm4ecTu8UuZyOgfwq3yFEnHKg6BHppSTBsl7fZnZ0LnZQ__'
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardsView;