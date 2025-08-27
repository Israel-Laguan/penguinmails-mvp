import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { sequenceSteps } from "@/lib/data/campaigns";
import { Clock, Mail } from "lucide-react";

function SequenceTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Email Sequence</h3>
      </div>

      <div className="space-y-4">
        {sequenceSteps.map((step, index) => (
          <Card key={step.id}>
            <CardHeader className="flex items-start justify-between gap-4">
              {step.type === "email" ? (
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
              )}
              <div className="flex-1">
                {step.type === "email" ? (
                  <>
                    <h4 className="font-medium text-gray-900">
                      Email {Math.floor((index + 1) / 2) + 1}
                    </h4>
                    <p className="text-gray-600 mt-1">{step.subject}</p>
                  </>
                ) : (
                  <div>
                    <h4 className="font-medium text-gray-900">Wait Step</h4>
                    <p className="text-gray-600 mt-1">Wait {step.duration}</p>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {step.type === "email" ? (
                <div className="grid grid-cols-4 gap-4 mt-3">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">
                      {step.sent}
                    </p>
                    <p className="text-xs text-gray-500">Sent</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">
                      {step.openRate}
                    </p>
                    <p className="text-xs text-gray-500">Open Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-600">
                      {step.clickRate}
                    </p>
                    <p className="text-xs text-gray-500">Click Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">
                      {step.replyRate}
                    </p>
                    <p className="text-xs text-gray-500">Reply Rate</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-2">
                  {step.completed} leads completed this step
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default SequenceTab;
