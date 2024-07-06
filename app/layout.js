import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from "@/components/component/navbar";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ptowzicgyyzrsyocxifw.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let { data, error } = await supabase.from("software_advertise").select("*");
console.log(data);

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tooloro",
  description:
    "A place for creators, cofounders, and more to find the software and tools they need.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/Tooloro_Black.svg" />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Navbar />
          {children}
        </body>
        {/* <SpeedInsights />
        <Analytics /> */}
      </html>
    </>
  );
}
