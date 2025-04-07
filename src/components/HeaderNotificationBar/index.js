import React from "react";

const HeaderNotificationBar = () => {
  return (
    <div style={{zIndex:20}} className=" border-b sticky top-0  border-gray-200 bg-white shadow-sm">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center ml-auto">
            <div className="hidden sm:flex bg-orange-50 text-gray-800 px-4 py-2 rounded-lg items-center mr-2">
              <span className="text-xs md:text-sm">There are <strong>2 boards</strong> left in your free plan</span>
              <button className="ml-3 gap-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-lg flex items-center font-medium text-xs md:text-sm">
                <img src="/Vector (6).png" className="w-3 h-3 mr-1" alt="Upgrade" />
                Upgrade
              </button>
            </div>
            
            {/* Mobile notification badge */}
            <div className="sm:hidden flex items-center mr-2">
              <button className="relative p-1 bg-orange-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2h2a1 1 0 000-2H9z" clipRule="evenodd" />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">2</span>
              </button>
            </div>
            
            <div className="flex-shrink-0">
              <img 
                className="h-8 w-8 rounded-full border-2 border-gray-200"
                src="https://s3-alpha-sig.figma.com/img/d4ad/03ac/fe9bc9c39e79e5ed4b5b59608c5f960f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GlelRxcROO6B0VAmWqfPM4m4txkcyL3-PzhEuzf2C97u3uNxwHpz8QJfgnf3VVc~0C8Ak1bcu9nV64huZm~wzdzgK4idc3I--RDqXg8mMOlwiNypNbZC3LAWvS4Jq8pTT~thUIK0934TxnqAIHZdzC4qyodgOJQOfba7tO1LP1JabgsmbOi5AnqkL5FsK0dHbkYZPDCrkh1EUcR4Vgb5xHjMb~CCd15pT348SRzhpFM2TXtmRNXzPEZ9MNCibWYp0Pp8SYfaIVP5C3jOAJqRpkM1-tm4V134fq~AjXC2usL7iTr9F-FY-Z9opB2vvgmzdmusMY1Lqv-iyxu1OCl99g__"
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNotificationBar;