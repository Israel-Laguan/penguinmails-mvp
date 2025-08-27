"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  LogIn,
  LogOut,
  Settings,
  LayoutDashboard,
  UserPlus,
  Menu,
  LogOutIcon,
} from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { authClient } from "@/lib/firebase/firebase-client";

export default function Navbar() {
  const isMobile = useIsMobile();
  const { user, loading } = useAuth();

  const Logo = () => (
    <Link
      href="/"
      className="flex items-center space-x-2"
      aria-label="Penguin Mails Home"
    >
      {loading ? (
        <>
          <div className="h-6 w-6 bg-muted animate-pulse rounded-md" />
          <div className="h-6 w-32 bg-muted animate-pulse rounded-md" />
        </>
      ) : (
        <>
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
          <span className="font-bold inline-block">Penguin Mails</span>
        </>
      )}
    </Link>
  );

  const NavLinks = ({ isMobileMenu = false }: { isMobileMenu?: boolean }) => {
    const LinkWrapper = isMobileMenu ? SheetClose : React.Fragment;
    const linkClass = isMobileMenu ? "w-full justify-start" : "";

    if (user) {
      return (
        <>
          <LinkWrapper>
            <Button variant="ghost" size="sm" asChild className={linkClass}>
              <Link href="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          </LinkWrapper>
          <LinkWrapper>
            <Button variant="ghost" size="sm" asChild className={linkClass}>
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={linkClass}
              onClick={async () => {
                try {
                  await signOut(authClient);
                } catch (error) {
                  console.error("Error signing out:", error);
                }
              }}
            >
              <LogOutIcon />
              Logout
            </Button>
          </LinkWrapper>
        </>
      );
    }

    return (
      <>
        <LinkWrapper>
          <Button variant="ghost" size="sm" asChild className={linkClass}>
            <Link href="/pricing">Pricing</Link>
          </Button>
        </LinkWrapper>
        <LinkWrapper>
          <Button variant="ghost" size="sm" asChild className={linkClass}>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
        </LinkWrapper>
        <LinkWrapper>
          <Button size="sm" asChild className={linkClass}>
            <Link href="/signup">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </Button>
        </LinkWrapper>
      </>
    );
  };

  if (loading) {
    return (
      <header className="sticky top-0 z-50 flex flex-col w-full items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-7xl items-center justify-between">
          <Logo />
          <div className="h-8 w-24 bg-muted animate-pulse rounded-md"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <Logo />
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-4 pt-6">
                <NavLinks isMobileMenu />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-4">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
