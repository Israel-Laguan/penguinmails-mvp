const recentReplies = [
  {
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    company: "TechCorp",
    message:
        "Thanks for reaching out! I'd love to schedule a call to discuss this further.",
    time: "2 hours ago",
    type: "positive",
  },
  {
    name: "Mike Chen",
    email: "mike@startup.io",
    company: "Startup.io",
    message:
        "Not interested at this time, but please keep us in mind for the future.",
    time: "4 hours ago",
    type: "neutral",
  },
  {
    name: "Lisa Rodriguez",
    email: "lisa@enterprise.com",
    company: "Enterprise Inc",
    message:
        "This looks interesting. Can you send me more information about pricing?",
    time: "6 hours ago",
    type: "positive",
  },
];
// Accept campaigns as props
const RecentRepliesList = async () => {
  if (!recentReplies || recentReplies.length === 0) {
    return <div className="p-6 text-gray-500">No recent replies found.</div>;
  }

  return (
      <>
        {recentReplies.map((reply, index) => (
            <div key={reply.email} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">
                {reply.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
              </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">{reply.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{reply.company}</span>
                    <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                            reply.type === "positive"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                    >
                  {reply.type === "positive" ? "Interested" : "Not Interested"}
                </span>
                  </div>
                  <p className="text-gray-600 mt-1">{reply.message}</p>
                  <p className="text-sm text-gray-500 mt-2">{reply.time}</p>
                </div>
              </div>
            </div>
        ))}
      </>
  );
};

export default RecentRepliesList;
