import React from "react";
import ProfileDropdownSkeleton from "./ProfileDropdownSkeleton";

const HeaderSkeleton = () => {
  return (
    <div className="sticky top-0 z-40 flex h-[88px] shrink-0 items-center lg:px-[48px] border-b border-gray-200 bg-primary/10 pe-4 shadow-sm gap-3 lg:py-[20px]">
      {/* Sidebar Button */}
      <button
        type="button"
        className="text-base-gray lg:hidden w-[56px] flex justify-center border-e border-neutral-100 h-full items-center"
        disabled
      >
        <span className="sr-only">Loading sidebar</span>
        <div className="w-5 h-4 bg-gray-600 rounded animate-pulse"></div>
      </button>

      {/* Separator */}
      <div
        style={{
          boxShadow:
            "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        }}
        className="w-px bg-white lg:hidden"
        aria-hidden="true"
      />

      <div className="flex flex-1 gap-x-4 gap-[24px] items-center justify-between">
        <div className="flex items-center justify-between gap-x-10">
          <div className="hidden lg:block flex-shrink-0 w-[268px] bg-primary/10 h-10 rounded-lg animate-pulse"></div>

          {/* Search Field */}
          <div className="gap-x-4 items-center hidden md:flex w-[480px] bg-primary/10">
            <div className="relative w-full">
              <div className="pl-10 pr-4 py-2 border rounded border-gray-600 bg-primary/10 text-gray-400 h-8 animate-pulse"></div>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Notifications and Profile Dropdown */}
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>

          <ProfileDropdownSkeleton />
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
