import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress size={60} className="text-blue-500" />
      <span className="ml-4 text-lg text-gray-700">Loading...</span>
    </div>
  );
}

export default Loading;

