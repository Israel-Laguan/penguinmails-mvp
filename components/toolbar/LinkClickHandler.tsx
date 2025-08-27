import React, { useEffect, useRef, ReactNode } from "react";

interface LinkClickHandlerProps {
  children: ReactNode;
}

export default function LinkClickHandler({ children }: LinkClickHandlerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor instanceof HTMLAnchorElement) {
        e.preventDefault();
        window.open(anchor.href, "_blank");
      }
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={wrapperRef} className="flex-1">
      {children}
    </div>
  );
}
