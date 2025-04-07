import React from 'react';

const MindmapTemplateGallery = () => {
  // Sample template data
  const templates = [
    { id: 1, title: "Mindmap", imagePath: "/Privately access.png" },
    { id: 2, title: "Mindmap", imagePath: "/Privately access.png" },
    { id: 3, title: "Mindmap", imagePath: "/Privately access.png" },
    { id: 4, title: "Mindmap", imagePath: "/Privately access.png" },
    { id: 5, title: "Mindmap", imagePath: "/Privately access.png" },
    { id: 6, title: "Mindmap", imagePath: "/Privately access.png" }
  ];

  return (
    <div className="w-full p-3 sm:p-5">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-base sm:text-[18px] font-[600] text-gray-800">Explore Our Versatile Templates</h2>
        <a href="/templates" className="text-[#6762FE] text-xs sm:text-sm flex items-center">
          VIEW ALL
          <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>

      {/* Action buttons and templates grid */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Action buttons */}
        <div className="flex flex-col gap-3 sm:gap-5 mb-4 sm:mb-6">
          <button className="flex whitespace-nowrap items-center justify-center px-3 sm:px-4 py-2 sm:py-3 border border-[#6762FE] rounded-md text-[#6762FE] bg-white text-sm">
            <svg className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New Cloudchart
          </button>
          <button className="flex whitespace-nowrap items-center justify-center px-3 sm:px-4 py-2 sm:py-3 border border-[#6762FE] bg-[#F0EFFF] rounded-md text-[#6762FE] text-sm">
            <svg className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New Cloudcollab
          </button>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 flex-1">
          {templates.map(template => (
            <div key={template.id} className="rounded-lg cursor-pointer hover:shadow-md transition-shadow">
              <div className="bg-white w-full rounded mb-2">
                <img 
                  src="/Privately access.png" 
                  alt={`${template.title} template`} 
                  className="w-full" 
                />
              </div>
              <p className="text-start text-gray-800 text-sm">{template.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MindmapTemplateGallery;