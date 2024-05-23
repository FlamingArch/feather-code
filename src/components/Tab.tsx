import React from "react";
import { motion } from "framer-motion";

function TabItem(props: {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onSelect: () => void;
  hideLabel?: boolean;
  className?: string;
}) {
  const baseStyles = "rounded-xl transition-all flex items-center gap-3";
  const additionalStyles = props.selected
    ? " p-2.5 bg-white shadow-lg hover:shadow-xl "
    : " m-2.5";
  return (
    <motion.button
      className={`${baseStyles} ${additionalStyles} ${props.className}`}
      onClick={props.onSelect}
    >
      {props.icon}
      {!props.hideLabel && <p>{props.label}</p>}
    </motion.button>
  );
}

const Tab = {
  Item: TabItem,
};

export default Tab;
