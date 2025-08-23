import GlossaryTab from "@/components/help/glossary-tab";
import KnowledgeTab from "@/components/help/knowledge-tab";
import OurServicesTab from "@/components/help/our-services-tab";
import SupportTab from "@/components/help/support-tab";
import VideoTutorialsTab from "@/components/help/video-tutorial-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, BookOpen, Briefcase, MessageCircle, Video } from "lucide-react";
const tabs = [
  {
    id: "knowledge",
    label: "Knowledge Base",
    icon: BookOpen,
    TabContent: KnowledgeTab,
  },
  {
    id: "support",
    label: "Support",
    icon: MessageCircle,
    TabContent: SupportTab,
  },
  {
    id: "videos",
    label: "Video Tutorials",
    icon: Video,
    TabContent: VideoTutorialsTab,
  },
  { id: "glossary", label: "Glossary", icon: Book, TabContent: GlossaryTab },
  {
    id: "services",
    label: "Our Services",
    icon: Briefcase,
    TabContent: OurServicesTab,
  },
];

function HelpPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-gray-600">
          Need assistance? You're in the right place.
        </p>
      </div>
      <Tabs defaultValue={tabs[0].id} className="w-full space-y-5">
        <TabsList className="w-full max-w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              <tab.icon className="mr-2" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent value={tab.id} key={tab.id}>
            <tab.TabContent />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default HelpPage;
