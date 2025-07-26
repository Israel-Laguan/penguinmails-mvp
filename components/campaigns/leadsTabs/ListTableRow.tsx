import { leadListsData } from "@/lib/data/leads";
import {
  Clock,
  Download,
  Edit,
  Eye,
  Mail,
  Trash2,
  Users,
  XCircle,
} from "lucide-react";
const getStatusColor = (status: string) => {
  switch (status) {
    case "replied":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "bounced":
      return "bg-red-100 text-red-800 border-red-200";
    case "sent":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "active":
      return "bg-green-100 text-green-800 border-green-200";
    case "completed":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "bounced":
      return <XCircle className="w-3 h-3" />;
    case "replied":
      return <Mail className="w-3 h-3" />;
    case "sent":
      return <Clock className="w-3 h-3" />;
    default:
      return <Clock className="w-3 h-3" />;
  }
};

function ListTableRow({ list }: { list: (typeof leadListsData)[0] }) {
  return (
    <tr key={list.id} className="hover:bg-gray-50 transition-colors group">
      <td className="px-6 py-4">
        <div>
          <h3 className="font-semibold text-gray-900">{list.name}</h3>
          <div className="flex items-center space-x-4 mt-1">
            <span className="text-sm text-red-600">{list.bounced} bounced</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {list.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-900">
            {list.contacts.toLocaleString()}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            list.status
          )}`}
        >
          {getStatusIcon(list.status)}
          <span className="capitalize">{list.status}</span>
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm font-medium text-gray-900">{list.campaign}</div>
      </td>
      <td className="px-6 py-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-600">
              {list.performance.openRate}%
            </span>
            <span className="text-xs text-gray-500">open</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-green-600">
              {list.performance.replyRate}%
            </span>
            <span className="text-xs text-gray-500">reply</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        {new Date(list.uploadDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="View Contacts"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            title="Edit List"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            title="Download CSV"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            title="Delete List"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
export default ListTableRow;
