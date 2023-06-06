"use client";
import { SessionProvider, getSession } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}

export default Providers;
