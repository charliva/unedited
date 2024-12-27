import ScrollAnimation from "@/components/scrollAnimation";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${jetBrainsMono.className}`}>
        <ScrollAnimation />
        {children}
    </div>
  );
}
