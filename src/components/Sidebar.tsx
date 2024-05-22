import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type SidebarProps = {
  children?: React.ReactNode;
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onSelect: (name: string) => void;
};

const SidebarContext = React.createContext<{
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  expanded: true,
  setExpanded: () => {},
});

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <SidebarContext.Provider
      value={{
        expanded,
        setExpanded,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

function SidebarView({ children }: SidebarProps) {
  const { setExpanded } = React.useContext(SidebarContext);
  return (
    <SidebarProvider>
      <AnimatePresence>
        <motion.nav
          className="p-2 w-fit flex flex-col"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          {children}
        </motion.nav>
      </AnimatePresence>
    </SidebarProvider>
  );
}

function SidebarItem({ icon, label, selected, onSelect }: SidebarItemProps) {
  const { expanded } = React.useContext(SidebarContext);
  const additionalStyles = selected
    ? " bg-white shadow-lg hover:shadow-xl "
    : " hover:bg-slate-500/20";
  return (
    <button
      className={
        "p-3 hover:scale-105 rounded-xl transition-all flex gap-3" +
        additionalStyles
      }
      onClick={() => onSelect(label)}
    >
      {icon}
      {expanded && (
        <motion.p
          transition={{ stiffness: 20 }}
          animate={{ opacity: [0, 1], x: [-20, 0] }}
          exit={{ opacity: 0, x: -200 }}
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
