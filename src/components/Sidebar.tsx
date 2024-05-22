import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { create } from "zustand";
import { DefaultPanelItem } from "../panelItems";

type SidebarProps = {
  children?: React.ReactNode;
};

type SidebarItemProps = {
  icon: React.ReactNode;
  name: DefaultPanelItem;
  label: string;
  selected: boolean;
  onSelect: (name: DefaultPanelItem) => void;
};

const useSidebarController = create<{
  expanded: boolean;
  setExpanded: (newValue: boolean) => void;
}>((set) => ({
  expanded: false,
  setExpanded: (newValue: boolean) =>
    set({
      expanded: newValue,
    }),
}));

function SidebarView({ children }: SidebarProps) {
  const [setExpanded] = useSidebarController((state) => [state.setExpanded]);
  return (
    <AnimatePresence>
      <motion.nav
        className="p-2 w-fit flex flex-col"
        onMouseEnter={() => {
          setExpanded(true);
        }}
        onMouseLeave={() => setExpanded(false)}
      >
        {children}
      </motion.nav>
    </AnimatePresence>
  );
}

function SidebarItem({
  icon,
  label,
  selected,
  onSelect,
  name,
}: SidebarItemProps) {
  const [expanded] = useSidebarController((state) => [state.expanded]);
  const showLabels = false;
  const additionalStyles = selected
    ? " p-3 bg-white shadow-lg hover:shadow-xl "
    : " m-3";
  return (
    <button
      className={
        "hover:scale-105 rounded-lg transition-all flex gap-3" +
        additionalStyles
      }
      onClick={() => onSelect(name)}
    >
      {icon}
      {expanded && showLabels && (
        <motion.p
          transition={{ stiffness: 20 }}
          animate={{ opacity: [0, 1], x: [-20, 0] }}
          exit={{ opacity: 0, x: -200 }}
          className="font-medium"
        >
          {label}
        </motion.p>
      )}
    </button>
  );
}

const Sidebar = {
  View: SidebarView,
  Item: SidebarItem,
};

export default Sidebar;
