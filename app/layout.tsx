import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Three Doorways | A Family Puzzle Adventure",
  description: "Help Atticus, Clara and Jen complete a 15-door family puzzle relay.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

