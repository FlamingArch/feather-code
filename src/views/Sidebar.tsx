import Tab from "../components/Tab";
import useAppStore from "../store";
import panelItems from "../panelItems";

export default function AppSidebar() {
  const { selectedPanel } = useAppStore((state) => ({
    selectedPanel: state.selectedPanel,
  }));
  const { changeSelectedPanel } = useAppStore((state) => ({
    changeSelectedPanel: state.changeSelectedPanel,
  }));
  const { activePanelItems } = useAppStore((state) => ({
    activePanelItems: state.activePanelItems,
  }));
  return <SidebarNav />;
}

function SidebarNav() {
  const { selectedPanel } = useAppStore((state) => ({
    selectedPanel: state.selectedPanel,
  }));
  const { changeSelectedPanel } = useAppStore((state) => ({
    changeSelectedPanel: state.changeSelectedPanel,
  }));
  const { activePanelItems } = useAppStore((state) => ({
    activePanelItems: state.activePanelItems,
  }));
  return (
    <section className="flex">
      <nav className="flex flex-col p-2">
        {activePanelItems.map((panel, index) => {
          const item = panelItems[panel];
          return (
            <Tab.Item
              hideLabel
              key={index}
              icon={<item.icon className="w-6 h-6 m-2" />}
              label={item.label}
              selected={selectedPanel === panel}
              onSelect={() =>
                changeSelectedPanel(selectedPanel === panel ? undefined : panel)
              }
            />
          );
        })}
      </nav>
      {selectedPanel && (
        <main className="flex w-[240px]">
          {panelItems[selectedPanel].component}
        </main>
      )}
    </section>
  );
}
