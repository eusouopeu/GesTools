'use client'
import React from "react";
import SideBar from "@/components/SideBar";
import SCanvas from "@/components/SCanvas";
import Identity from "@/components/Identity";
import Environment from "@/components/Environment";
import { useEtapas } from "@/contexts/EtapasContext";
import clsx from "clsx";


export default function Home() {
  const { Etapa } = useEtapas();

  return (
    <main className='flex w-full h-full'>
      <SideBar />

      <section className="m-[56px]">
        <SCanvas/>
        <Identity/>
        <Environment/>
      </section>
    </main>
  );
}
