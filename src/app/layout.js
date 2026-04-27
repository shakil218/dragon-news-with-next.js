import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Home | Dragon News",
  description: "Stay updated with the latest breaking news, in-depth articles, and exclusive stories from The Dragon News. Covering global events, politics, sports, entertainment, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.className}min-h-full`}>{children}</body>
    </html>
  );
}
