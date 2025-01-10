import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy @ Unedited",
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
  return <main className="mt-16">{children}</main>;
}
