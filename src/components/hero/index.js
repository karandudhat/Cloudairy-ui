import React, { useState } from "react";
const SearchWithCategories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const categories = [
    {
      id: 1,
      name: "For You",
      icon: "sparkles",
      active: true,
      color: "bg-[#8080FF] p-1 px-2 rounded-md bg-opacity-10 text-[#6762FE70]",
    },
    { id: 2, name: "AWS", icon: "aws", active: false },
    { id: 3, name: "Azure", icon: "azure", active: false },
    { id: 4, name: "GCP", icon: "gcp", active: false },
    { id: 5, name: "Flowchart", icon: "flowchart", active: false },
    { id: 6, name: "UML", icon: "uml", active: false },
    { id: 7, name: "Diagramming", icon: "diagram", active: false },
    { id: 8, name: "More", icon: "grid", active: false },
  ];
  // Function to render appropriate icon for each category
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "sparkles":
        return <img src="/workflow1.png" alt="For You" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "aws":
        return <img src="/AWS.png" alt="AWS" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "azure":
        return <img src="/Processes.png" alt="Azure" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "gcp":
        return <img src="/Agile & Project Management.png" alt="GCP" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "flowchart":
        return <img src="/Strategy & Planning.png" alt="Flowchart" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "uml":
        return <img src="/Meeting & Workshop.png" alt="UML" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "diagram":
        return <img src="/workflow (1).png" alt="Diagramming" className="w-6 h-6 sm:w-10 sm:h-10" />;
      case "grid":
        return <img src="/menu.png" alt="More" className="w-6 h-6 sm:w-10 sm:h-10" />;
      default:
        return null;
    }
  };
  // Determine which categories to show based on screen size and showAllCategories state
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 4);
  return (
    <div className="bg-indigo-50 p-3 sm:p-4 m-2 sm:m-5 rounded-lg sm:rounded-[16px]">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-4 sm:mb-6">
        <div className="bg-white rounded-md shadow-sm flex items-center px-3 sm:px-4 py-2">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for boards and templates"
            className="w-full px-2 sm:px-3 py-1 outline-none text-gray-700 text-sm"
          />
        </div>
      </div>
      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-10 gap-4 sm:gap-10 flex justify-center flex-wrap">
        {visibleCategories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center mx-2 sm:mx-4 shadow-sm mb-2 ${
              category.active ? category.color : ""
            }`}
          >
            <div
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-md flex items-center justify-center"
            >
              {renderIcon(category.icon)}
            </div>
            <span
              className={`text-xs sm:text-sm ${
                category.active ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              {category.name}
            </span>
          </div>
        ))}
        {/* Show more/less toggle button for mobile */}
        {categories.length > 4 && (
          <button
            className="flex flex-col items-center mx-2 mb-2"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-md flex items-center justify-center bg-gray-100">
              {showAllCategories ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className="text-xs sm:text-sm text-gray-700">
              {showAllCategories ? "Less" : "More"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
export default SearchWithCategories;

