import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center border-t border-border/40 bg-background">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full max-w-7xl shrink-0 items-center px-4 md:px-6 ">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Penguin Mails. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
           {/* Use Link for internal navigation */}
           <Link href="/terms" className="text-xs hover:underline underline-offset-4">
             Terms of Service
           </Link>
           <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
             Privacy Policy
           </Link>
           <Link href="/contact" className="text-xs hover:underline underline-offset-4">
             Contact Us
           </Link>
        </nav>
      </div>
    </footer>
  );
}
