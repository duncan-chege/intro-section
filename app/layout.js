import { Inter } from "next/font/google";
import "./assets/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intro Section",
  description: "Frontend Mentor Challenge in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
