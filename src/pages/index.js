import Head from "next/head";
// import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import Banner from "@/components/Banner/page";
import DM from "@/components/DM/page";
import BD from "@/components/BD/page";
import Conteudo from "@/components/Conteudo/page";
import Rodape from "@/components/Rodape/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solutec</title>
        <meta name="Solutec" content="Consultoria e assesoria Solutec" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <DM />
        <BD />
        <Conteudo />
        <Rodape />
      </div>
    </>
  );
}
