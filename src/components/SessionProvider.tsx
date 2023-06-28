"use client";
import React from "react";
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";

interface SessionProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
  session,
}) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
