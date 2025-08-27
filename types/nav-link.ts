export type NavLink = {
  title: string;
  items: NavLinkItem[];
};
export type NavLinkItem = {
  to: string;
  highlight?: boolean;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
