import { Source_Sans_3 } from "next/font/google";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import "./globals.css";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "ReEnAct Prototype",
  description: "ReEnAct Prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${sourceSans.className} text-slate-800`}
      >
        <div className="flex flex-col h-full min-h-screen">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
