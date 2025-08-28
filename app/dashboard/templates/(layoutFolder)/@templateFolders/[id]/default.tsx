"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTemplates } from "@/lib/data/template.mock";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

function Default() {
  const { id } = useParams();
  const router = useRouter();
  if (!id) {
    router.push("/dashboard/templates");
  }
  const quickReplies = initialTemplates;
  return (
    <div className="bg-gray-50 p-2 px-4 border-r border-gray-200 w-72 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Templates</h3>
        <Link href={`/dashboard/templates`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
      </div>
      <div className="space-y-3">
        {quickReplies.map((template) => (
          <QuickReplaySmallItem
            key={template.id}
            template={template as Template}
            active={String(id) === String(template.id)}
          />
        ))}
      </div>
    </div>
  );
}
function QuickReplaySmallItem({
  template,
  active,
}: {
  template: Template;
  active: boolean;
}) {
  return (
    <Card
      className={cn({
        [`border-l-3 bg-blue-100 rounded-l-md border-l-blue-500`]: active,
      })}
    >
      <Link href={`/dashboard/templates/${template.id}`}>
        <CardHeader>
          <CardTitle
            className={cn({
              "text-blue-500": active,
            })}
          >
            {template.name}
          </CardTitle>
          <CardDescription className="text-nowrap text-ellipsis overflow-hidden">
            {template.content}
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default Default;
