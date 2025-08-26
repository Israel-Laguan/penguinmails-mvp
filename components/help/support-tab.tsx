import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import ContactForm from "./contact-form";

function SupportTab() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Contact Info */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-primary mb-2">
            Direct Support
          </h3>
          <p className="text-primary/80 mb-3">
            Need immediate assistance? Email us directly:
          </p>
          <a
            href="mailto:support@penguinmails.com"
            className="text-primary hover:text-primary/80 font-medium text-lg transition-colors"
          >
            support@penguinmails.com
          </a>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
export default SupportTab;
