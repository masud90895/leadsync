"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

import AnalyticsIcon from "@/assets/icons/AnalyticsIcon";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import ActivityIcon from "@/assets/icons/ActivityIcon";
import StatsIcon from "@/assets/icons/StatsIcon";
import CampaignIcon from "@/assets/icons/CampaignIcon";
import CRMIcon from "@/assets/icons/CRMIcon";
import RepliesIcon from "@/assets/icons/RepliesIcon";
import AccountsIcon from "@/assets/icons/AccountsIcon";
import ExtractIcon from "@/assets/icons/ExtractIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";

import LogoAndCloseButtonForMobile from "./sidebar/LogoAndCloseButtonForMobile";
import ProjectSelector from "./sidebar/ProjectSelector";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

// Define navigation item types
export type IChildren = {
  name: string;
  href?: string;
  current: boolean;
};

export type INavigation = {
  name: string;
  href?: string;
  icon: React.ReactNode;
  current: boolean;
  children?: IChildren[];
};

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(["Settings"]);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Project name");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setProjectDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleExpand = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };

  // Navigation items array
  const navigationItems: INavigation[] = [
    {
      name: "Analytics",
      href: "/analytics",
      icon: <AnalyticsIcon />,
      current: pathname === "/analytics",
      children: [],
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />,
      current: pathname === "/dashboard",
      children: [],
    },
    {
      name: "Activity",
      href: "/activity",
      icon: <ActivityIcon />,
      current: pathname === "/activity",
    },
    {
      name: "Team Stats",
      href: "/team-stats",
      icon: <StatsIcon />,
      current: pathname === "/team-stats",
    },
    {
      name: "Campaign",
      href: "/dashboard/campaign",
      icon: <CampaignIcon />,
      current: pathname === "/dashboard/campaign",
      children: [],
    },
    {
      name: "CRM",
      href: "/crm",
      icon: <CRMIcon />,
      current: pathname === "/crm",
      children: [],
    },
    {
      name: "Replies",
      href: "/replies",
      icon: <RepliesIcon />,
      current: pathname === "/replies",
      children: [],
    },
    {
      name: "Accounts",
      href: "/accounts",
      icon: <AccountsIcon />,
      current: pathname === "/accounts",
      children: [],
    },
    {
      name: "Extract Leads",
      href: "/extract-leads",
      icon: <ExtractIcon />,
      current: pathname === "/extract-leads",
      children: [],
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <SettingsIcon />,
      current: pathname === "/settings" || pathname.startsWith("/settings/"),
      children: [
        {
          name: "Integration",
          href: "/settings/integration",
          current: pathname === "/settings/integration",
        },
        {
          name: "Team Stats",
          href: "/settings/team-stats",
          current: pathname === "/settings/team-stats",
        },
      ],
    },
  ];

  const handleItemClick = () => {
    // On mobile, close the sidebar when an item is clicked
    if (onClose && window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <div
      className="w-[261px] bg-white border-r border-gray-100 flex flex-col h-full"
      ref={sidebarRef}
    >
      {/* Logo and close button for mobile */}
      <LogoAndCloseButtonForMobile onClose={onClose || (() => {})} />

      {/* Project Selector */}
      <ProjectSelector
        setProjectDropdownOpen={setProjectDropdownOpen}
        projectDropdownOpen={projectDropdownOpen}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      {/* Navigation */}
      <Navigation
        navigationItems={navigationItems}
        expandedItems={expandedItems}
        handleItemClick={handleItemClick}
        toggleExpand={toggleExpand}
      />

      {/* User Profile */}

      <UserProfile
        setProfileDropdownOpen={setProfileDropdownOpen}
        profileDropdownOpen={profileDropdownOpen}
      />
    </div>
  );
}
