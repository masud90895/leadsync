import React from "react";
import { INavigation } from "./sidebar";
import NavItem from "./NavItem";

type Props = {
  navigationItems: INavigation[];
  expandedItems: string[];
  handleItemClick: (item: INavigation) => void;
  toggleExpand: (item: string) => void;
};

const Navigation = ({
  navigationItems,
  expandedItems,
  handleItemClick,
  toggleExpand,
}: Props) => {
  return (
    <div className="flex-1 overflow-y-auto py-2">
      <nav className="px-2 space-y-1">
        {navigationItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            isExpanded={expandedItems.includes(item.name)}
            onClick={() => handleItemClick(item)}
            onToggle={() => toggleExpand(item.name)}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
