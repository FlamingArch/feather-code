import { create } from "zustand";
import { DefaultPanelItem } from "./panelItems";

type AppStoreType = {
  selectedPanel: DefaultPanelItem;
  activePanelItems: DefaultPanelItem[];
  changeSelectedPanel: (newValue: DefaultPanelItem) => void;
};

const useAppStore = create<AppStoreType>((set) => ({
  selectedPanel: "project",
  activePanelItems: [
    "project",
    "versionControl",
    "search",
    "tests",
    "debug",
    "warnings",
    "containers",
  ],
  changeSelectedPanel: (newValue: DefaultPanelItem) =>
    set({ selectedPanel: newValue }),
}));

export default useAppStore;
