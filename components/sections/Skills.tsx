"use client";
import {motion} from "framer-motion";

const groups=[
 ["Front-end",["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS"]],
 ["Back-end",["Node.js","C#",".NET","Python","REST APIs","Auth"]],
 ["Dados",["PostgreSQL","MySQL","SQLite","Redis"]],
 ["Software",["C++","Electron","CMake"]],
 ["Dev / Infra",["Git","Linux","Docker","Vite","Ninja"]]
];

export default function Skills(){
 return <section id="skills" className="section-shell skills-section">
  <div className="shell">
   <div className="skills-heading">
    <div>
     <p className="eyebrow">02 / Skills</p>
     <h2 className="section-title mt-6">Stack<span className="text-[#D08A5B]">.</span></h2>
    </div>
    <p className="skills-lead">Tecnologias que uso para construir do front ao software.</p>
   </div>

   <div className="skills-content">
    <motion.figure initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} className="stack-portrait">
     <div className="stack-photo-frame"><img src="/images/foto.png" alt="Caio Silveira"/></div>
     <figcaption><span>CAIO SILVEIRA</span><span>DEV · SÃO PAULO</span></figcaption>
    </motion.figure>

    <div className="skill-list">
     {groups.map(([title,items],i)=><motion.div key={title as string} initial={{opacity:0,x:14}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.4}} transition={{delay:i*.04}} className="skill-row">
      <span className="skill-index">0{i+1}</span>
      <h3>{title as string}</h3>
      <div className="skill-items">{(items as string[]).map(x=><span key={x}>{x}</span>)}</div>
     </motion.div>)}
    </div>
   </div>
  </div>
 </section>
}