import React from "react";

const MainSkeleton = () => {
  return (
    <main className="flex-1 p-6 space-y-6">
      {/* Top Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="h-24 bg-primary/10 rounded-md animate-pulse"></div>
        <div className="h-24 bg-primary/10 rounded-md animate-pulse"></div>
        <div className="h-24 bg-primary/10 rounded-md animate-pulse"></div>
        <div className="h-24 bg-primary/10 rounded-md animate-pulse"></div>
      </div>

      {/* Main Chart/Graph */}
      <div className="h-64 bg-primary/10 rounded-md animate-pulse"></div>

      {/* Additional Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-48 bg-primary/10 rounded-md animate-pulse"></div>
        <div className="h-48 bg-primary/10 rounded-md animate-pulse"></div>
      </div>
    </main>
  );
};

export default MainSkeleton;
