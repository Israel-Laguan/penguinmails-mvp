'use client'; 
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Adjust the scroll threshold (e.g., 400 pixels) as needed
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-4 right-4 rounded-full h-10 w-10 z-50 transition-opacity duration-300 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' // Hide and disable when not visible
      )}
      aria-label="Go to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}

