"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import Avator from "@/assets/avator.jpeg";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="bg-white border-b border-gray-100 h-[84px] flex items-center justify-between px-4 md:px-6"
      ref={headerRef}
    >
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          className="text-gray-500 hover:text-gray-700 md:hidden"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="text-xl font-semibold flex items-center gap-2">
          Campaigns
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <button
          className="text-gray-500 hover:text-gray-700"
          aria-label="Notifications"
        >
          <MdOutlineSupportAgent size={32} />
        </button>
        <div className="relative">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="h-[32px] w-[32px] rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Open user menu"
          >
            <Image
              src={Avator}
              alt="User"
              className="h-full w-full object-cover"
              width={32}
              height={32}
            />
          </button>

          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100">
              <div className="py-1">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium">Dev</p>
                  <p className="text-xs text-gray-500 truncate">
                    dev@leadsync.ai
                  </p>
                </div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Notifications
                </a>
                <div className="border-t border-gray-100"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
