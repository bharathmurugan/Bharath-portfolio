import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";

import "./globals.css";

// 👇 Import your components
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";
import ThemeToggle from "@/components/ThemeToggle";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bharath M | Software Developer",
  description:
    "Aspiring Software Developer with strong proficiency in Java, data structures, and algorithms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} ${geistMono.className} antialiased`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {/* Particle Background */}
          <ParticlesBackground />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Theme Toggle Button */}
          <div className="fixed top-6 right-6 z-[999]">
            <ThemeToggle />
          </div>

          {/* Page Content */}
          <div className="relative z-10">
            {children}
          </div>

        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
