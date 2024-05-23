import { createRootRoute } from "@tanstack/react-router";
import Sidebar from "../views/Sidebar";
import panelItems from "../panelItems";
import useAppStore from "../store";
import DevToolsTanStackRouter from "../devtools/tanStackRouter";
import TopBar from "../components/TopBar";
import WindowControls from "../views/WindowControls";
import Tab from "../components/Tab";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

export const Route = createRootRoute({
  component: PageRoot,
});

function PageRoot() {
  const { selectedPanel } = useAppStore((state) => ({
    selectedPanel: state.selectedPanel,
  }));
  return (
    <main className="flex w-screen h-screen">
      <aside className="flex flex-col">
        <WindowControls />
        <Sidebar />
      </aside>
      <article className="flex flex-col overflow-visible flex-grow p-2 pl-0">
        <nav className="flex overflow-visible p-4 pl-0">
          <Tab.Item
            icon={<RiTailwindCssFill className="w-4 h-4 fill-sky-500" />}
            label="tailwind.config.js"
            selected={true}
            onSelect={() => {}}
            className="px-24"
          />
          <Tab.Item
            icon={<RiJavascriptFill className="w-4 h-4 fill-amber-500" />}
            label="tailwind.config.js"
            selected={false}
            onSelect={() => {}}
            className="px-12"
          />
        </nav>
        <textarea className="outline-none bg-white rounded-xl min-h-[200vh] p-6 font-mono"></textarea>
      </article>
      <DevToolsTanStackRouter />
    </main>
  );
}
