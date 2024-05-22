type TopBarProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function TopBar({ children }: TopBarProps) {
  return <header className="p-2">{children}</header>;
}
