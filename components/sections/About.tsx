"use client";
import { motion } from "framer-motion";
const skills=["React","Next.js","TypeScript","Node.js","C++","APIs","Git"];
const traces=[{n:"01",t:"Autonomia",d:"Gosto de entender o mecanismo, tomar decisões e assumir o resultado."},{n:"02",t:"Superação",d:"Competir, para mim, é descobrir até onde consigo levar uma ideia."},{n:"03",t:"Humano primeiro",d:"Tecnologia é ferramenta. Pessoas nunca deveriam virar apenas um meio."}];
export default function About(){return <section id="about" className="py-24 md:py-36 bg-[#ece6da] text-[#171918]">
 <div className="container mx-auto px-5 max-w-6xl">
  <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14">
   <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <p className="caio-kicker">Rastros / quem constrói</p><h2 className="text-4xl md:text-6xl font-heading font-semibold tracking-[-.045em] leading-[1.02]">Não quero que o site te conte quem eu sou.</h2>
    <p className="font-serif italic text-2xl mt-5 text-[#6c5c47]">Prefiro deixar pistas.</p>
   </motion.div>
   <div>
    <p className="text-lg leading-8 text-[#4d504d] max-w-2xl">Sou Caio Silveira. Gosto de sistemas, negócios, história da tecnologia e de ligar ideias abstratas a coisas comuns do dia. Construo melhor quando tenho autonomia — e tento fazer cada projeto superar a expectativa sem perder a humanidade no caminho.</p>
    <div className="mt-10 border-t border-[#cfc5b5]">{traces.map((x,i)=><motion.div key={x.n} initial={{opacity:0,x:10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}} className="grid grid-cols-[42px_1fr] gap-4 py-6 border-b border-[#cfc5b5]"><span className="font-mono text-xs text-[#8b7657]">{x.n}</span><div><h3 className="font-semibold text-xl">{x.t}</h3><p className="text-[#696b67] mt-1">{x.d}</p></div></motion.div>)}</div>
    <div className="flex flex-wrap gap-2 mt-8">{skills.map(s=><span key={s} className="px-3 py-1.5 border border-[#c7bca9] rounded-full text-sm">{s}</span>)}</div>
   </div>
  </div>
 </div></section>}