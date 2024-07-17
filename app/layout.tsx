import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { flowbiteTheme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoxCutter",
  description: "A simple and powerful box generator for lasercutters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge(
          "flex h-screen flex-col justify-between bg-gray-100 dark:bg-gray-900",
          inter.className,
        )}
      >
        <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
