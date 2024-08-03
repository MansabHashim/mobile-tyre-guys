import Home from "@/components/Home";
import react from "react";


export default function RootLayout({ children }) {
  return (
    // <html lang="en">
      <div >
        {/* <h2>This is layout page</h2> */}
        {children}
        <Home/>
        </div>
    // </html>
  );
}