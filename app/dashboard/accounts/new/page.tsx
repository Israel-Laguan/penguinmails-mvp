import { Metadata } from "next"
import { emailAccountCopy as t } from "@/components/accounts/copy";
import NewAccountContent from "./content";

export const metadata: Metadata = {
  title: t.form.ui.title,
  description: t.form.ui.description,
}

export default function NewAccountPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t.form.ui.title}</h1>
        <p className="text-muted-foreground">{t.form.ui.description}</p>
      </div>
      <NewAccountContent />
    </div>
  )
}
