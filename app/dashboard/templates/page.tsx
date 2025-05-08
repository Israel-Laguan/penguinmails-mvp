import {
  userTemplates,
  builtInTemplates,
  categories,
} from "@/components/templates/mocks";
import { TemplatesContent } from "./content";

// TODO: Replace with real API calls
// async function getTemplates() {
//   const response = await fetch('/api/templates');
//   return response.json();
// }

export default function TemplatesPage() {
  return (
    <TemplatesContent
      userTemplates={userTemplates}
      builtInTemplates={builtInTemplates}
      categories={categories}
    />
  );
}
