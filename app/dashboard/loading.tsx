function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      <p className="ml-4 text-gray-600">Loading...</p>
    </div>
  );
}
export default loading;
