function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-2 px-4 border-r border-gray-200 w-72 space-y-5">
      {children}
    </div>
  );
}
export default layout;
