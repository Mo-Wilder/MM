import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "./containers/global/header";
import { Footer, FooterMargin } from "./containers/global/footer";
import Head from "next/head";

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MineMasters",
  description:
    "MineMasters: A strategic crypto game universe where players acquire lands, deploy NFT miners, and navigate between war and peace to build, battle, and prosper in a dynamic economy.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minemasters.io/",
    siteName: "MineMasters",
    images: [
      {
        url: "/Social.png",
        width: 1200,
        height: 630,
        alt: "MineMasters",
      },
    ],
  },
  twitter: {
    site: "@MineMasters",
    card: "summary_large_image",
    title: "MineMasters",
    description:
      "MineMasters: A strategic crypto game universe where players acquire lands, deploy NFT miners, and navigate between war and peace to build, battle, and prosper in a dynamic economy.",
    images: [
      {
        url: "/Social.png",
        width: 1200,
        height: 630,
        alt: "MineMasters",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubontu.className}`}
        style={{
          maxWidth: "1728px",
          margin: "0 auto",
          position: "relative",
          minWidth: "1320px",
          overflowX: "scroll",
        }}
      >
        <Header />
        {children}
        <Footer />
        <FooterMargin />
      </body>
    </html>
  );
}
