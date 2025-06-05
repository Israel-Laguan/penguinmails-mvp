"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export interface FloatingMailProps {
  id: string;
  topPercent: number;
  leftPercent: number;
  delay: number;
  onFinish: (id: string) => void;
}

export const FloatingMail: React.FC<FloatingMailProps> = ({
  id,
  topPercent,
  leftPercent,
  delay,
  onFinish,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleAnimationEnd = () => {
      onFinish(id);
    };
    node.addEventListener("animationend", handleAnimationEnd);
    return () => {
      node.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [id, onFinish]);

  const duration = 10;

  const driftX = "15vw";
  const driftY = "-15vh";

  return (
    <div
      ref={ref}
      className="floatingMail"
      style={
        {
          top: `${topPercent}%`,
          left: `${leftPercent}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          "--driftX": driftX,
          "--driftY": driftY,
        } as React.CSSProperties
      }
    >
      <Image
        src="/img/mail.png"
        alt="Floating Mail"
        width={32}
        height={32}
        className="w-8 h-8 opacity-80"
        priority
      />
    </div>
  );
};
