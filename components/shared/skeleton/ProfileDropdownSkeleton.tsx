import React from "react";

const ProfileDropdownSkeleton = () => {
  return (
    <button className="flex items-center bg-primary/10 py-2 px-4 rounded-lg">
      <span className="sr-only">Loading user menu</span>
      <div className="w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
      <span className="hidden lg:flex lg:items-center ml-3">
        <div className="h-4 bg-primary/10 rounded w-24 animate-pulse"></div>
        <div className="ml-3 h-4 w-5 bg-primary/10 rounded animate-pulse"></div>
      </span>
    </button>
  );
};

export default ProfileDropdownSkeleton;
