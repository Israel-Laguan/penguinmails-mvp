import TemplateActions from "@/components/templates/template-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { initialTemplates } from "@/lib/data/template.mock";
import { cn } from "@/lib/utils";
import { ArrowLeft, Eye, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const currentTemplate = initialTemplates.find(
    (template) => template.id === parseInt(id)
  );
  if (!currentTemplate) {
    notFound();
  }
  const {
    name,
    category,
    replyRate,
    openRate,
    content,
    lastUsed,
    folderId,
    isStarred,
    subject,
    type,
    usage,
  } = currentTemplate;

  return (
    <div className="p-3">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex  gap-2 items-start">
              <Link href={"/dashboard/templates"}>
                <Button
                  variant={"link"}
                  size={"icon"}
                  asChild
                  className="text-gray-400"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
              </Link>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{category}</CardDescription>
              </div>
            </div>
            <div>
              <TemplateActions />
            </div>
          </div>
          <div className="flex gap-5 text-sm">
            {[
              {
                id: 1,
                icon: Mail,
                label: `${usage} uses`,
                color: "text-gray-500",
              },
              {
                id: 2,
                icon: Eye,
                label: `${openRate}% open rate`,
                color: "text-primary",
              },
              {
                id: 3,
                icon: TrendingUp,
                label: `${replyRate}% reply rate`,
                color: "text-green-500",
              },
            ].map((item) => (
              <div
                key={item.id}
                className={cn(item.color, "flex items-center gap-1")}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-extralight">{item.label}</span>
              </div>
            ))}
            <div>
              <span className="font-extralight text-sm text-gray-400">
                Last used {lastUsed}
              </span>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Subject Line
            </h3>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-900">{subject}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Email Content
            </h3>
            <div className="bg-gray-50 rounded-xl p-4">
              <pre className="text-gray-900 whitespace-pre-wrap font-sans">
                {content}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
