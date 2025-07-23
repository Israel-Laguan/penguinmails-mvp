"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function BackArrow({ url }: { url?: string }) {
  const router = useRouter();
  function handleBack() {
    if (url) {
      router.push(url);
      return;
    }
    router.back();
  }
  return (
    <Button
      variant={"ghost"}
      size="icon"
      className="cursor-pointer "
      onClick={handleBack}
      asChild
    >
      <ArrowLeft className="h-6 w-6 text-gray-500" />
    </Button>
  );
}
export default BackArrow;
