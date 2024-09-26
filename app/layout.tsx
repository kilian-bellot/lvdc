import Head from "next/head";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import landscapeImage from "@/public/assets/home/landscape.png";
import {poppins} from "@app/font";
import "./globals.css";

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
    <Head>
      <link
        rel="preload"
        href={landscapeImage}
        as="image"
      />
    </Head>
    <head>
      <title>Les voyages de Charlène</title>
      <link rel="icon" href="/assets/logo.svg"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
