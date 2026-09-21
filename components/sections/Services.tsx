"use client";
import { motion } from "framer-motion";
import { Code, Globe, Sparkles, Zap } from "lucide-react";
import { services } from "@/data/services";
const iconMap:Record<string,any>={Code,Globe,Sparkles,Zap};
export default function Services(){return <section id="services" className="relative pt-16 md:pt-20 pb-14 md:pb-16 text-[#171918] overflow-hidden"><div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_10%,rgba(184,145,88,.10),transparent_28%)]"/><div className="relative container mx-auto px-5 max-w-6xl">
 <div className="mb-8 flex items-end justify-between gap-6"><div><p className="caio-kicker">Soluções</p><h2 className="text-2xl md:text-3xl font-heading font-semibold tracking-[-.03em]">O que eu desenvolvo.</h2></div></div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-y border-[#cec3b2]">{services.map((s,i)=>{const Icon=iconMap[s.icon];return <motion.div key={s.id} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="py-8 lg:px-6 first:pl-0 border-b sm:border-b-0 lg:border-l first:border-l-0 border-[#d4cabb]"><Icon className="w-5 h-5 text-[#b0874d] mb-8"/><h3 className="text-xl font-semibold">{s.title}</h3><p className="text-[#666963] mt-2 min-h-12">{s.description}</p><div className="flex flex-wrap gap-x-3 gap-y-1 mt-5">{s.features.map(f=><span key={f} className="text-xs text-[#777168]">{f}</span>)}</div></motion.div>})}</div>
 </div></section>}
