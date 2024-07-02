import { Inter } from "next/font/google";
import Nav from "../components/common/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReEnAct Prototype",
  description: "ReEnAct Prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={inter.className}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
