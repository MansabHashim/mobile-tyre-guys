import Home from "@/components/Home";
import Cities from "@/components/ui/Cities";
import Navbar from "@/components/ui/Navbar";
import react from "react";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {/* <h2>This is layout page</h2> */}
        {children}
        <Cities/>
        <Home/>
        </body>
    </html>
  );
}