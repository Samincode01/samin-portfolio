import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { siteData } from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
