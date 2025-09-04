"use client"; 

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import GhibliLoader from "@/components/ghibliLoader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

   
    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      data-lt-installed="true"
    >
      <body className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/fundo.jpg')] relative">
        {loading && <GhibliLoader />}
        {children}
      </body>
    </html>
  );
}
