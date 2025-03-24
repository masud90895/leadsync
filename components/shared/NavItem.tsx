import React from "react";
import { INavigation } from "./sidebar";
import Link from "next/link";

interface NavItemProps {
  item: INavigation;
  isExpanded: boolean;
  onClick: () => void;
  onToggle: () => void;
}

const NavItem = ({ item, isExpanded, onClick, onToggle }: NavItemProps) => {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <div>
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
          item.current
            ? "bg-indigo-50 text-indigo-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {hasChildren ? (
          <div
            onClick={onToggle}
            className="flex items-center gap-3 flex-1 cursor-pointer"
          >
            {" "}
            <button
              className="flex items-center gap-3 flex-1 cursor-pointer"
              onClick={onClick}
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="text-base font-semibold">{item.name}</span>
            </button>
            <button
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          <Link
            href={item.href || "#"}
            className="flex items-center gap-3 flex-1"
            onClick={onClick}
          >
            <span className="text-gray-500">{item.icon}</span>
            <span className="text-base font-semibold">{item.name}</span>
          </Link>
        )}
      </div>
      {isExpanded && hasChildren && (
        <div className="ml-8 mt-1 space-y-1">
          {item.children?.map((child, index) => (
            <Link
              key={index}
              href={child.href || "#"}
              className={`block px-3 py-2 rounded-md cursor-pointer ${
                child.current
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={onClick}
            >
              <span className="text-base font-semibold">{child.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
