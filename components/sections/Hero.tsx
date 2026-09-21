"use client";
import {motion} from "framer-motion";
import {ArrowDown} from "lucide-react";
import ProjectComposer from "@/components/ui/ProjectComposer";

export default function Hero(){
 return <section id="hero" className="hero text-[#F0E9DC]">
  <div className="hero-orbit"/><div className="hero-marker"/>
  <div className="shell hero-shell relative z-10">
   <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="eyebrow hero-eyebrow">Desenvolvimento · São Paulo</motion.p>
   <div className="hero-center mt-6 md:mt-7">
    <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="hero-copy-center">
     <h1 className="display hero-title-centered">O que você quer<br/><span className="text-[#D08A5B]">construir?</span></h1>
     <p className="hero-subcopy-centered">Descreva sua ideia. Eu cuido do caminho técnico.</p>
    </motion.div>
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.14,duration:.6}} className="hero-brief-centered">
     <ProjectComposer/>
    </motion.div>
   </div>
   <div className="hero-bottom grid grid-cols-[1fr_auto] gap-5 items-end border-t border-white/10 pt-4">
    <button onClick={()=>document.querySelector("#skills")?.scrollIntoView({behavior:"smooth"})} className="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-[#77736D] hover:text-[#D08A5B]"><ArrowDown className="w-4"/>Explorar</button>
    <p className="text-[10px] uppercase tracking-[.16em] text-[#67645F]">Silverdev</p>
   </div>
  </div>
 </section>
}