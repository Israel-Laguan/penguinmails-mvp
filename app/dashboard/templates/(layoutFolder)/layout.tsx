import NavLink from "@/components/NavLink";
import CreateNewFolderButton from "@/components/templates/create-new-folder-button";
import ConditionalNewTemplateButton from "@/components/templates/ConditionalNewTemplateButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { tabs } from "@/lib/data/template.mock";
function layout({
  templateFolders,
  children,
}: {
  templateFolders: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5 flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold text-gray-900">
            Template Library
          </h1>
          <p className="text-sm text-muted-foreground">
            Create, organize, and manage your email templates
          </p>
        </div>
        <div className="flex gap-2">
          <CreateNewFolderButton />
          <ConditionalNewTemplateButton />
        </div>
      </div>

      <Card className="gap-0 pb-0 overflow-hidden flex-1">
        <CardHeader className="gap-0 px-1 border-b [.border-b]:pb-0 ">
          <div className="flex  space-x-4 items-center">
            {tabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={`/dashboard/templates${
                  tab.id === "templates" ? "" : `/${tab.id}`
                }`}
                className="[&.active]:text-blue-600 [&.active]:border-b-2 [&.active]:border-blue-600 p-2 text-gray-400"
                title={tab.label}
              >
                {tab.label} ({tab.count})
              </NavLink>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-0 flex-1 flex">
          {templateFolders}
          <div className="flex-1">{children}</div>
        </CardContent>
      </Card>
    </div>
  );
}
export default layout;
