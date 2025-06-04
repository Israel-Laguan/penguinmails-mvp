import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { FloatingMailsContainer } from "../landing/FloatingMailsContainer";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <FloatingMailsContainer />

      <div className="relative z-20 w-full px-4 md:px-8 flex flex-col items-center h-full">
        <div className="h-16" />

        <div className="w-full max-w-3xl text-center py-12 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Cold Email That Lands in Inboxes,&nbsp;
            <span className="text-blue-400">Not Spam</span>
          </h1>
          <p className="text-gray-300 sm:text-lg">
            A powerful cold email tool made for startups and agencies. Better
            deliverability, smarter automation, and no contact limits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup" className="text-white">
                Get Started
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link
                href="#how-it-works"
                className="flex items-center text-white bg-transparent border border-blue-500 hover:bg-blue-500/10"
              >
                <ArrowRightCircle className="w-5 h-5 mr-2 text-white" />
                See How It Works
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full flex justify-center py-12 px-4">
          <div className="w-full max-w-xl bg-[#1e293b] rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] border-b border-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <p className="ml-4 text-sm text-gray-400 truncate">
                https://app.penguinmails.com/dashboard
              </p>
            </div>

            <Image
              src="/img/dashboard.jpeg"
              alt="Mockup Dashboard"
              width={600}
              height={360}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
