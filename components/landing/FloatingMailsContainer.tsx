"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FloatingMail } from "./FloatingMail";

interface MailData {
  id: string;
  topPercent: number;
  leftPercent: number;
  delay: number;
}

export const FloatingMailsContainer: React.FC = () => {
  const [mails, setMails] = useState<MailData[]>([]);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const createRandomMail = useCallback(
    (): MailData => ({
      id: generateId(),
      topPercent: Math.random() * 90,
      leftPercent: Math.random() * 90,
      delay: 0,
    }),
    []
  );

  const handleFinish = useCallback(
    (id: string) => {
      setMails((prev) => {
        const filtered = prev.filter((m) => m.id !== id);
        return [...filtered, createRandomMail()];
      });
    },
    [createRandomMail]
  );

  useEffect(() => {
    const initialCount = Math.floor(Math.random() * 3) + 1; // 1–3
    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < initialCount; i++) {
      const t = setTimeout(() => {
        setMails((prev) => [...prev, createRandomMail()]);
      }, i * 500 + Math.random() * 500);
      timers.push(t);
    }

    return () => timers.forEach((t) => clearTimeout(t));
  }, [createRandomMail]);

  return (
    <>
      {mails.map((mail) => (
        <FloatingMail
          key={`home-mails-${mail.id}`}
          id={mail.id}
          topPercent={mail.topPercent}
          leftPercent={mail.leftPercent}
          delay={mail.delay}
          onFinish={handleFinish}
        />
      ))}
    </>
  );
};
