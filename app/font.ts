import {Dancing_Script, Newsreader, Poppins} from "next/font/google";

export const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-poppins',
});

export const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const newsReader = Newsreader({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});