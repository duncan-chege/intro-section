import { Inter } from "next/font/google";
import "./assets/globals.css"

export const metadata = {
  title: "Intro Section",
  description: "Frontend Mentor Challenge in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
