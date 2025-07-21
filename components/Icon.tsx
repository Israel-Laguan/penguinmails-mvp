function Icon({
  icon,
  ...props
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & React.SVGProps<SVGSVGElement>) {
  if (!icon) return null;
  const IconComponent = icon;
  return <IconComponent {...props} />;
}
export default Icon;
