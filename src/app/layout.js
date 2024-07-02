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
        <div className="flex flex-col h-full min-h-screen">
          <Nav />
          {children}
          <footer>
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
