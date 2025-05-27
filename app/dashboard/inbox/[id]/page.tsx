"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, CornerUpLeft, OctagonAlert, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fetchEmailByIdAction, markEmailAsReadAction, markEmailAsStarredAction, softDeleteEmailAction } from "../actions";
import { showCustomToast } from "@/components/ui/custom-toast";
import { useEffect, useState } from "react";
import { InboxColumnAction } from "../components/inbox-column-action";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default function EmailDetailPage({ params }: Props) {
  const { id } = use(params);
  const [emailData, setEmailData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEmail = async () => {
    try {
        setIsLoading(true);
      const data = await fetchEmailByIdAction(id);
      setEmailData(data);
    } catch (error) {
      console.error("Error fetching email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const markEmailAsReadMutation = async (id: number | string) => {
    try {
      await markEmailAsReadAction(id);
      fetchEmail();
    } catch (error) {
      console.error("Error marking email as read:", error);
    }
  }

  useEffect(() => {
    fetchEmail();
    markEmailAsReadMutation(id);
  }
  , [id]);

  const markAsStarredMutation = async (id: number, starred: boolean) => {
    try {
      await markEmailAsStarredAction(id, starred);
      showCustomToast({ title: "Email marked as " + (starred ? "starred" : "unstarred"), description: `Email ${id} has been marked as ${starred ? "starred" : "unstarred"}`, icon: starred ? (<span className="text-yellow-500">⭐</span>) : (<span className="text-gray-400">☆</span>) });
      fetchEmail();
    } catch (error) {
      showCustomToast({ title: "Error", description: `Failed to mark email ${id} as ${starred ? "starred" : "unstarred"}`, icon: starred ? (<span className="text-yellow-500">⭐</span>) : (<span className="text-gray-400">☆</span>) });
      console.error("Error marking email as starred:", error);
    }
  };

  const deleteEmailMutation = async (id: number) => {
    try {
        await softDeleteEmailAction(id);
      showCustomToast({ title: "Email deleted", description: `Email ${id} has been deleted`, icon: <Trash2 className="text-black" /> });
      redirect("/dashboard/inbox");
    } catch (error) {
      showCustomToast({ title: "Error", description: `Failed to delete email ${id}`, icon: <Trash2 className="text-red-500" /> });
      console.error("Error deleting email:", error);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading email...</div>;
  }

  if (!emailData) {
    return <div className="p-6">Email not found</div>;
  }

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow-md border">
        <div className="flex items-center justify-between p-2 bg-gray-100 rounded-xl">
        <Link
            href="/dashboard/inbox"
            className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-accent transition-colors"
        >
            <ArrowLeft className="text-foreground" />
        </Link>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => markAsStarredMutation(emailData.id, !emailData.starred)}>
            <Star className={`w-5 h-5 ${emailData.starred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => deleteEmailMutation(emailData.id)}>
            <Trash2 className="w-5 h-5 text-red-500" />
            </Button>
            <InboxColumnAction id={id} refetch={fetchEmail} />
        </div>
        </div>


        <div className="flex items-center gap-3 border-b pb-4">
        <Image
            src="/logo.svg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
        />
        <div>
            <p className="text-sm font-medium text-gray-800">
            {emailData.client?.firstName} {emailData.client?.lastName}
            </p>
            <p className="text-xs text-muted-foreground">&lt;{emailData.client?.email}&gt;</p>
        </div>
        <span className="ml-auto text-xs text-muted-foreground">{new Date(emailData.createdAt).toLocaleString()}</span>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">{emailData.subject}</h1>
        <div className="border-t pt-4 prose prose-sm max-w-none">
            <div dangerouslySetInnerHTML={{ __html: emailData.htmlContent }} />
        </div>
    </div>
  );
}
