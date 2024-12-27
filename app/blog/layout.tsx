import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
});
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unedited - Blog",
  description: "Unedited - Blog",
  keywords: ["Unedited", "Web developer", "App developer", "Blog"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${oswald.className}`}>{children}</div>;
}
