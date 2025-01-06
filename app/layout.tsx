import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navBar";
import { CursorProvider } from "./_components/cursorContext";
import CustomCursor from "./_components/customCursor";
import Footer from "./_components/footer";
import Background from "./_components/background";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
});

export const metadata: Metadata = {
  title: "Unedited",
  description: "Unedited official website",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.className}`}>
        <CursorProvider>
          <CustomCursor />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
