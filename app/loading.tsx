import HeaderSkeleton from "@/components/shared/skeleton/HeaderSkeleton";
import MainSkeleton from "@/components/shared/skeleton/MainSkeleton";
import SidebarSkeleton from "@/components/shared/skeleton/SidebarSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Skeleton */}
      <HeaderSkeleton />

      <div className="flex flex-1">
        {/* Sidebar Skeleton */}
        <aside className="w-64 bg-gray-100 p-4 space-y-4">
          <SidebarSkeleton />
        </aside>

        {/* Main Content Skeleton */}
        <MainSkeleton />
      </div>
    </div>
  );
};

export default Loading;
