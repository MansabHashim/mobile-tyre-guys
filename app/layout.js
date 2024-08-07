import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Cta from "@/components/ui/Cta";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobile Tyre Guys",
  description: "Emergency Roadside Help, Towing, and Rescue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <a href='tel:888-451-6551' className='bg-secondary hover:text-primary text-2xl z-10 shadow-xl fixed mx-3 rounded-full right-0 bottom-10 p-5'>
       <FaPhoneAlt/>
       </a>
      <Navbar/>

        {children}
        <Cta/>
        <Footer/>
        
        </body>
    </html>
  );
}
