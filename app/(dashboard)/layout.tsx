"use client";

import { Header } from "@/components/campaign/header";
import { Sidebar } from "@/components/shared/sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Mobile sidebar overlay */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transition-opacity duration-200 md:hidden ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar for mobile and desktop */}
        <div
          className={`fixed md:relative md:flex z-30 h-full transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
