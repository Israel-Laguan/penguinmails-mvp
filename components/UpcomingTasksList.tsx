import React from 'react';
import { Calendar, Mail, FileText, Globe } from 'lucide-react';

// Define the expected data structure for props
interface Task {
  id: number;
  title: string;
  type: 'campaign' | 'email' | 'template' | 'domain';
  dueDate: string;
}

interface UpcomingTasksListProps {
  tasks: Task[];
}

// Helper function to get the appropriate icon for each task type (remains the same)
const getTaskIcon = (type: string) => {
  switch (type) {
    case 'campaign':
      return <Calendar size={16} className="text-blue-500" />;
    case 'email':
      return <Mail size={16} className="text-green-500" />;
    case 'template':
      return <FileText size={16} className="text-purple-500" />;
    case 'domain':
      return <Globe size={16} className="text-orange-500" />;
    default:
      return <Calendar size={16} className="text-gray-500" />;
  }
};

// Accept tasks as props
const UpcomingTasksList: React.FC<UpcomingTasksListProps> = ({ tasks }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 h-64 flex flex-col">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Tasks</h3>
      <div className="flex-grow overflow-y-auto">
        {/* Use the tasks prop */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                {getTaskIcon(task.type)}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">{task.title}</p>
                <p className="text-xs text-gray-500">
                  {task.type.charAt(0).toUpperCase() + task.type.slice(1)} · {task.dueDate}
                </p>
              </div>
            </li>
          ))}
          {/* Add a message if no tasks */} 
          {tasks.length === 0 && (
            <li className="py-3 text-sm text-gray-500 text-center">No upcoming tasks found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingTasksList;

