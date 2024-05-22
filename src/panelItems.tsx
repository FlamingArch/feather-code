import {
  LuBug,
  LuContainer,
  LuFolderGit,
  LuGitBranch,
  LuSearch,
  LuTestTube2,
} from "react-icons/lu";
import { ImWarning } from "react-icons/im";
import PanelProject from "./views/PanelProject";

export type DefaultPanelItem =
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
    label: "Project" as DefaultPanelItem,
    component: <PanelProject></PanelProject>,
  },
  versionControl: {
    icon: LuGitBranch,
    label: "Version Control" as DefaultPanelItem,
    component: <>Version</>,
  },
  search: {
    icon: LuSearch,
    label: "Search" as DefaultPanelItem,
    component: <>Search</>,
  },
  tests: {
    icon: LuTestTube2,
    label: "Tests" as DefaultPanelItem,
    component: <>Tests</>,
  },
  debug: {
    icon: LuBug,
    label: "Debug" as DefaultPanelItem,
    component: <>Debug</>,
  },
  warnings: {
    icon: ImWarning,
    label: "Warnings" as DefaultPanelItem,
    component: <>Warnings</>,
  },
  containers: {
    icon: LuContainer,
    label: "Containers" as DefaultPanelItem,
    component: <>Containers</>,
  },
};
