import Sidebar from "../components/Sidebar";
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
  return (
    <Sidebar.View>
      {activePanelItems.map((panel, index) => {
        const item = panelItems[panel];
        return (
          <Sidebar.Item
            key={index}
            icon={<item.icon className="w-6 h-6" />}
            label={item.label}
            selected={selectedPanel === item.label}
            onSelect={changeSelectedPanel}
          />
        );
      })}
    </Sidebar.View>
  );
}
