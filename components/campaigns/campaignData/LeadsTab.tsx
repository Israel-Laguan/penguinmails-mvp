import { Card, CardContent } from "@/components/ui/card";
import { campaignLeads } from "@/lib/data/campaigns";
import LeadsFilter from "./LeadsFilter";
const getStatusColor = (status: string) => {
  switch (status) {
    case "replied":
      return "bg-green-100 text-green-800";
    case "opened":
      return "bg-blue-100 text-blue-800";
    case "sent":
      return "bg-gray-100 text-gray-800";
    case "bounced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

function LeadsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Campaign Leads</h3>
      </div>
      <div>
        <LeadsFilter />
      </div>
      <Card className="p-0">
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Step
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {campaignLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{lead.name}</h4>
                      <p className="text-sm text-gray-500">{lead.email}</p>
                      <p className="text-sm text-gray-500">{lead.company}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Step {lead.currentStep}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {lead.lastActivity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
export default LeadsTab;
