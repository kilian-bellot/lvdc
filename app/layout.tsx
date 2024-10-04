import {SpeedInsights} from "@vercel/speed-insights/next"
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import {poppins} from "@app/font";
import "./globals.css";

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.className}>
    <head>
      <link rel="icon" href="/favicon.ico"/>
      <title>Les voyages de Charlène</title>
      <meta httpEquiv="content-language" content="fr"/>
      <meta name="keywords" content="voyage, tourisme, itinéraire, canada, vacances, expertise, agence, travel, planner"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta
        name="description"
        content="Révélez la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !"
      />
      {/* ROBOTS */}
      <meta name="google" content="nositelinkssearchbox"/>
      {/* OPEN GRAPH META TAGS */}
      <meta property="og:url" content="https://charlene-voyages.com"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Les voyages de Charlène"/>
      <meta property="og:description"
            content="Révélez la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !"/>
      <meta property="og:image"
            content="https://raw.githubusercontent.com/kilian-bellot/lvdc/refs/heads/main/public/assets/home/landscape.webp"/>
      {/* TWITTER META TAGS */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="charlene-voyages.com"/>
      <meta property="twitter:url" content="https://charlene-voyages.com"/>
      <meta name="twitter:title" content="Les voyages de Charlène"/>
      <meta name="twitter:description"
            content="Révélez la magie de votre voyage avec un itinéraire sur mesure qui rendra chaque instant inoubliable !"/>
      <meta name="twitter:image"
            content="https://raw.githubusercontent.com/kilian-bellot/lvdc/refs/heads/main/public/assets/home/landscape.webp"/>
      {/* PRELOAD LCP */}
      <link
        rel="preload"
        href={"/assets/home/landscape.webp"}
        as="image"
      />
    </head>
    <body>
    <Header/>
    {children}
    <Footer/>
    <SpeedInsights/>
    </body>
    </html>
  );
}
