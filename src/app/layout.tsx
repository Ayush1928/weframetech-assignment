import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className='h-screen bg-[#F8FAFB] flex flex-row'>
          <Sidebar />
          <div className='w-5/6 overflow-y-auto scrollbar2'>
            <Topbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
