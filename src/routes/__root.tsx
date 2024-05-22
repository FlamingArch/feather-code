import { createRootRoute } from "@tanstack/react-router";
import Sidebar from "../views/Sidebar";
import panelItems from "../panelItems";
import useAppStore from "../store";
import DevToolsTanStackRouter from "../devtools/tanStackRouter";
import TopBar from "../components/TopBar";
import WindowControls from "../views/WindowControls";

export const Route = createRootRoute({
  component: PageRoot,
});

function PageRoot() {
  const { selectedPanel } = useAppStore((state) => ({
    selectedPanel: state.selectedPanel,
  }));
  return (
    <main className="flex flex-col w-screen h-screen overflow-hidden">
      <TopBar>
        <WindowControls />
      </TopBar>
      <div className="flex flex-grow">
        <Sidebar />
        {selectedPanel && (
          <div className="flex w-[240px]">
            {panelItems[selectedPanel].component}
          </div>
        )}
        <div className="flex flex-col overflow-scroll flex-grow p-2">
          <textarea className="outline-none bg-white rounded-xl min-h-[200vh] p-6 font-mono"></textarea>
        </div>
      </div>
      <DevToolsTanStackRouter />
    </main>
  );
}
