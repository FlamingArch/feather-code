import {
  LuBug,
  LuContainer,
  LuFolderGit,
  LuGitBranch,
  LuSearch,
  LuTestTube2,
} from "react-icons/lu";
import { ImWarning } from "react-icons/im";
import PanelItem from "./types/PanelItem";

export type DefaultPanelItems =
  | "project"
  | "versionControl"
  | "search"
  | "tests"
  | "debug"
  | "warnings"
  | "containers";

export default {
  project: {
    icon: LuFolderGit,
    label: "Project",
  },
  versionControl: {
    icon: LuGitBranch,
    label: "Version Control",
  },
  search: {
    icon: LuSearch,
    label: "Search",
  },
  tests: {
    icon: LuTestTube2,
    label: "Tests",
  },
  debug: {
    icon: LuBug,
    label: "Debug",
  },
  warnings: {
    icon: ImWarning,
    label: "Warnings",
  },
  containers: {
    icon: LuContainer,
    label: "Containers",
  },
};
