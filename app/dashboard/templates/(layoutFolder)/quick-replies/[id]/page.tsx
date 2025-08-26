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
import { initialQuickReplies } from "@/lib/data/template.mock";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const quickReply = initialQuickReplies.find(
    (reply) => reply.id === parseInt(id)
  );

  if (quickReply === undefined) notFound();

  return (
    <div className="p-4 h-full">
      <Card className="h-full">
        <CardHeader className="flex justify-between items-center">
          <div className="flex gap-5 ">
            <Link href={"/dashboard/templates/quick-replies"}>
              <Button variant="ghost" size="icon">
                <ArrowLeft />
              </Button>
            </Link>
            <div className="flex flex-col gap-1">
              <CardTitle>{quickReply.name}</CardTitle>
              <CardDescription>Quick Replies</CardDescription>
            </div>
          </div>
          <div>
            <TemplateActions />
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="flex flex-col gap-2">
            <h6>Quick Reply Text</h6>
            <p className="text-sm p-3 bg-gray-100 rounded-md">
              {"content" in quickReply
                ? quickReply.content
                : "No content available"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
