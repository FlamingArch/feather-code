import { create } from "zustand";
import { DefaultPanelItems } from "./panelItems";

type AppStoreType = {
  selectedPanel: string;
  activePanelItems: DefaultPanelItems[];
  changeSelectedPanel: (newValue: string) => void;
};

const useAppStore = create<AppStoreType>((set) => ({
  selectedPanel: "Project",
  activePanelItems: [
    "project",
    "versionControl",
    "search",
    "tests",
    "debug",
    "warnings",
    "containers",
  ],
  changeSelectedPanel: (newValue: string) => set({ selectedPanel: newValue }),
}));

export default useAppStore;
