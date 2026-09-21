"use client";
import {useEffect,useState} from "react";
import {motion} from "framer-motion";
import {ArrowUpRight,Github,X} from "lucide-react";
import {projects} from "@/data/projects";
export default function Projects(){const[active,setActive]=useState<(typeof projects)[number]|null>(null);useEffect(()=>{document.body.style.overflow=active?"hidden":"";return()=>{document.body.style.overflow=""}},[active]);return <section id="projects" className="section-shell"><div className="shell">
 <div className="flex items-end justify-between gap-6 mb-12 md:mb-16"><div><p className="eyebrow">03 / Seleção</p><h2 className="section-title mt-6">Projetos<span className="text-[#D08A5B]">.</span></h2></div><p className="hidden md:block text-[10px] uppercase tracking-[.18em] text-[#66625D] pb-2">Produto / Software / Experimento</p></div>
 <div className="project-grid">{projects.map((p,i)=><motion.button key={p.id} onClick={()=>setActive(p)} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{delay:i*.05}} className={"project-tile tile-"+i}>
  <span className="project-no">0{i+1}</span><ArrowUpRight className="project-arrow"/><div className="absolute left-6 right-6 bottom-6"><div className="project-meta mb-3">{p.tags.slice(0,3).join(" · ")}</div><h3 className="project-title">{p.title}</h3></div>
 </motion.button>)}</div>
 </div>
 {active&&<div className="fixed inset-0 z-[100] bg-[#080A09]/85 backdrop-blur-sm grid place-items-center p-5" onClick={()=>setActive(null)}><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="modal" onClick={e=>e.stopPropagation()}>
  <button onClick={()=>setActive(null)} className="absolute right-5 top-5 text-[#8E8980] hover:text-white" aria-label="Fechar"><X/></button><Github className="w-5 text-[#D08A5B]"/><p className="eyebrow mt-8">Projeto</p><h3 className="mt-5">{active.title}</h3><p className="mt-5 leading-7 text-[#AAA49A]">{active.description}</p><p className="project-meta mt-6">{active.tags.join(" · ")}</p><a href={active.githubUrl} target="_blank" rel="noreferrer" className="cta mt-8"><span>Abrir no GitHub</span><ArrowUpRight/></a>
 </motion.div></div>}</section>}