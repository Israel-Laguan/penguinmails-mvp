import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

function SuccessStep() {
  const form = useFormContext();
  const router = useRouter();
  const mailboxData = form.getValues();
  function handleComplete() {
    router.push("/dashboard/domains/mailboxes");
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ✅ Mailbox Created Successfully!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            <strong>
              {mailboxData.name}@{mailboxData.domain}
            </strong>{" "}
            is now ready for sending emails.
          </p>
          <p className="text-gray-600">
            {mailboxData.enableWarmup
              ? "Your mailbox will start the warmup process automatically to build sender reputation."
              : "Your mailbox is ready to start sending emails immediately."}
          </p>
        </div>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h4 className="font-medium text-green-900 mb-3">🎉 What's Next?</h4>
            <ul className="text-sm text-green-700 space-y-2 text-left">
              <li>
                •{" "}
                {mailboxData.enableWarmup
                  ? "Monitor warmup progress in the Warmup Hub"
                  : "Start creating email campaigns"}
              </li>
              <li>• Configure SMTP settings if needed</li>
              <li>• Begin sending cold email campaigns</li>
              <li>• Track performance and engagement metrics</li>
            </ul>
          </CardContent>
        </Card>

        <Button
          onClick={handleComplete}
          className={cn(
            "bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 mx-auto h-auto"
          )}
        >
          <Mail className="w-5 h-5" />
          <span>Go to Mailboxes</span>
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default SuccessStep;
