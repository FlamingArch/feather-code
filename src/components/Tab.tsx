import React from "react";

function TabItem(props: {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onSelect: () => void;
  hideLabel?: boolean;
}) {
  const baseStyles = "rounded-xl transition-all flex items-center gap-3";
  const additionalStyles = props.selected
    ? " p-2.5 bg-white shadow-lg hover:shadow-xl "
    : " m-2.5";
  return (
    <button className={baseStyles + additionalStyles} onClick={props.onSelect}>
      {props.icon}
      {!props.hideLabel && <p>{props.label}</p>}
    </button>
  );
}

const Tab = {
  Item: TabItem,
};

export default Tab;
