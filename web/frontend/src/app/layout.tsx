import type { Metadata } from "next";
import { Montserrat, Lora, Hind_Madurai } from "next/font/google";
import clsx from "clsx";
import "@/styles/globals.css";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { EtapasProvider } from "@/contexts/EtapasContext";


const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-montserrat'
});
const lora = Lora({
  subsets: ["latin"],
  display: 'swap',
  style: ["italic"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-lora'
});
const hind = Hind_Madurai({
  subsets: ["latin"],
  display: 'swap',
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-hind'
});


export const metadata: Metadata = {
  title: "EstrategInfo",
  description: "Strategic Canvas interativo",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${montserrat.variable} ${lora.variable} ${hind.variable}`}>

        <body>
          <Header/>
          
          <EtapasProvider>
            {children}
          </EtapasProvider>
        </body>

    </html>
  );
}
