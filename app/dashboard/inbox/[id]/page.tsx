"client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, EllipsisVertical, CornerUpLeft, OctagonAlert, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fetchEmailById } from "../actions";

type Props = {
  params: {
    id: string;
  };
};

export default async function EmailDetailPage({ params }: Props) {
  const { id } = params;
  const email = await fetchEmailById(id);

  if (!email) {
    return notFound();
  }

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow-md border">
      <div className="flex flex-row bg-primary p-4 rounded-2xl">
        <Link
          href="/dashboard/inbox"
          className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-accent transition-colors"
        >
          <ArrowLeft className="text-foreground" />
        </Link>
        <Button variant="ghost" size="lg">
          <OctagonAlert className="h-52 w-auto" />
            </Button>
            <Button variant="ghost" size="lg">
          <Trash2 className="h-52 w-auto" />
            </Button>
      </div>

      <div className="text-gray-800 text-sm border-b pb-4">
        <div className="flex justify-between items-center">
          <span>
            <strong>{`${email.client?.firstName} ${email.client?.lastName}`}</strong> &lt;{email?.client?.email}&gt;
          </span>
          <div>
            <span>{email.createdAt.toString()}</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Star
                className={`h-4 w-4 ${
                  email.starred
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <CornerUpLeft />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <EllipsisVertical />
            </Button>
          </div>
        </div>
      </div>

      <div className="text-gray-800 text-sm border-b pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>
              {email.client?.firstName} {email.client?.lastName} &lt;{email?.client?.email}&gt;
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-gray-900">{email.subject}</h1>
      <div className="border-t pt-4 prose prose-sm max-w-none">
        <div dangerouslySetInnerHTML={{ __html: email.htmlContent }} />
      </div>
    </div>
  );
}
