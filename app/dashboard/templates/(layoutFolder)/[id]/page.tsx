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
import { ArrowLeft, Star } from "lucide-react";
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
  const { name, category, content, isStarred, subject } = currentTemplate;

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
              {isStarred && (
                <div>
                  <Button variant={"link"} size={"icon"} asChild>
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </Button>
                </div>
              )}
            </div>
            <div>
              <TemplateActions
                numberOfShowen={5}
                templateId={id}
                type="template"
              />
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
