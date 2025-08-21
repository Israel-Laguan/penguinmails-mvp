import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data/knowledge.mock";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function OurServicesTab() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Professional Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Take your cold email campaigns to the next level with our expert
          services. From lead generation to done-for-you outreach, we've got you
          covered.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              className="hover:shadow-lg transition-all duration-200 group"
            >
              <CardContent className="space-y-4 h-full justify-between flex flex-col">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center ",
                    "group-hover:scale-110 transition-transform",
                    service.color
                  )}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground  leading-relaxed">
                  {service.description}
                </p>
                <Button variant={"secondary"}>
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 " />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 space-y-6 text-center text-white">
        <h3 className="text-2xl font-bold ">Need Custom Solutions?</h3>
        <p className="text-blue-100  max-w-2xl mx-auto">
          Our team of experts can create custom solutions tailored to your
          specific business needs. Let's discuss how we can help you achieve
          your outreach goals.
        </p>
        <Button variant={"secondary"} size={"lg"}>
          Schedule a Consultation
        </Button>
      </div>
    </div>
  );
}
export default OurServicesTab;
