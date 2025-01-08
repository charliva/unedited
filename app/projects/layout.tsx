import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
});

export const metadata: Metadata = {
  title: "Projects",
  description: "Unedited - projects",
  keywords: ["Unedited", "Web developer", "App developer"],
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mt-24">{children}</main>;
}
