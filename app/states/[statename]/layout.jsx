import react from "react";
import States from "@/components/ui/States";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <h2>This is layout page</h2>
        {children}
        <States/>
        </body>
    </html>
  );
}