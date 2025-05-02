'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { useIsMobile } from '@/hooks/use-mobile'; 
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { LogIn, LogOut, Settings, LayoutDashboard, UserPlus, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const { isAuthenticated, logout, loading } = useAuth();
  const isMobile = useIsMobile(); // Get mobile status from the hook

  // Common Logo component
  const Logo = () => (
    <Link href="/" className="flex items-center space-x-2" aria-label="Penguin Mails Home">
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

  // Common Navigation Links component (used in both desktop and mobile)
  const NavLinks = ({ isMobileMenu = false }: { isMobileMenu?: boolean }) => {
     // Wrapper component that conditionally uses SheetClose for mobile
     const LinkWrapper = isMobileMenu ? SheetClose : React.Fragment;

    return (
      <>
        {!isAuthenticated ? (
          <>
            <LinkWrapper>
               <Button variant={isMobileMenu ? "ghost" : "ghost"} size="sm" asChild className={isMobileMenu ? "w-full justify-start" : ""}>
                 <Link href="/dashboard">
                   <LayoutDashboard className="mr-2 h-4 w-4" />
                   Dashboard
                 </Link>
               </Button>
            </LinkWrapper>
            <LinkWrapper>
               <Button variant={isMobileMenu ? "ghost" : "ghost"} size="sm" asChild className={isMobileMenu ? "w-full justify-start" : ""}>
                 <Link href="/dashboard/settings">
                   <Settings className="mr-2 h-4 w-4" />
                   Settings
                 </Link>
               </Button>
            </LinkWrapper>
            {/* Logout is an action */}
            <Button variant={isMobileMenu ? "outline" : "outline"} size="sm" onClick={logout} className={isMobileMenu ? "w-full justify-start" : ""}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </>
        ) : (
          <>
             <LinkWrapper>
                <Button variant={isMobileMenu ? "ghost" : "ghost"} size="sm" asChild className={isMobileMenu ? "w-full justify-start" : ""}>
                  <Link href="/pricing">Pricing</Link>
                </Button>
             </LinkWrapper>
             <LinkWrapper>
                <Button variant={isMobileMenu ? "ghost" : "ghost"} size="sm" asChild className={isMobileMenu ? "w-full justify-start" : ""}>
                  <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
             </LinkWrapper>
             <LinkWrapper>
                <Button size="sm" asChild className={isMobileMenu ? "w-full justify-start" : ""}>
                  <Link href="/signup">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Link>
                </Button>
             </LinkWrapper>
          </>
        )}
      </>
    );
  };


  // Loading state remains the same
  if (loading) {
    return (
      <header className="sticky top-0 z-50 flex flex-col w-full items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-7xl items-center justify-between">
          <Logo />
          <div className="h-8 w-24 bg-muted animate-pulse rounded-md"></div> {/* Placeholder */}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <Logo />

        {isMobile ? (
          // Mobile View: Sheet Menu
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right"> {/* Or 'left' */}
              <SheetTitle className='sr-only'>Menu</SheetTitle>
               <nav className="flex flex-col gap-4 pt-6">
                 {/* Render links inside the sheet, passing isMobileMenu=true */}
                 <NavLinks isMobileMenu={true} />
               </nav>
            </SheetContent>
          </Sheet>
        ) : (
          // Desktop View: Inline Links
          <nav className="hidden md:flex items-center gap-4">
             <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}
