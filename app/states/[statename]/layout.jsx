import Home from "@/components/Home";
import react from "react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <h2>This is layout page</h2>
        {children}
        <Home/>
        </body>
    </html>
  );
}