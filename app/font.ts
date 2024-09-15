import {Dancing_Script, Poppins} from "next/font/google";

export const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-poppins',
});

export const pacifico = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
})