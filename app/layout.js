import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Cta from "@/components/ui/Cta";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile Tyre Guys",
  description: "Emergency Roadside Help, Towing, and Rescue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>

        {children}
        <Cta/>
        <Footer/>
        
        </body>
    </html>
  );
}
