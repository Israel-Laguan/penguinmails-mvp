import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { initialTemplates } from "@/lib/data/template.mock";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const currentTemplate = initialTemplates.find(
    (template) => template.id === parseInt(id)
  );
  if (!currentTemplate) {
    notFound();
  }
  const { name, category, content, subject } = currentTemplate;

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
            <div className="flex gap-2">
              <Button variant={"outline"}>Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Template Name
            </h3>
            <Input className="text-gray-900" defaultValue={name} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Subject Line
            </h3>
            <Input className="text-gray-900" defaultValue={subject} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Email Content
            </h3>
            <Textarea className="text-gray-900 h-64" defaultValue={content} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
