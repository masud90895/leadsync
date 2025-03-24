import React from "react";

const SidebarSkeleton = () => {
  return (
    <nav className="flex flex-1 flex-col ">
      <ul role="list" className="flex flex-1 flex-col">
        <li>
          <div className="text-xs font-medium tracking-[1.44px] leading-6 text-gray-400 p-4">
            NAVIGATION
          </div>
          <ul role="list" className="space-y-1 ">
            {/* Skeleton loaders for each navigation item */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <li key={item} className="p-2">
                <div className="flex items-center gap-3 rounded-md px-3 py-[10px] bg-primary/10 animate-pulse">
                  <div className="w-6 h-6 bg-primary/10 rounded-full"></div>
                  <div className="h-4 bg-primary/10 rounded w-full"></div>
                </div>
              </li>
            ))}
          </ul>
        </li>

        {/* Optional second section, commented out */}
        <li className="mt-3">
          <div className="text-xs font-medium tracking-[1.44px] leading-6 text-gray-400 p-4">
            APPLICATION & PAYMENT
          </div>
          <ul role="list" className="space-y-1">
            {[1, 2, 3].map((item) => (
              <li key={item} className="p-2">
                <div className="flex items-center gap-3 rounded-md px-3 py-[10px] bg-primary/10 animate-pulse">
                  <div className="w-6 h-6 bg-primary/10 rounded-full"></div>
                  <div className="h-4 bg-primary/10 rounded w-full"></div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarSkeleton;
