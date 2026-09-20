"use client";

import { motion } from "framer-motion";
import { Code2, Layers3, Workflow } from "lucide-react";

const skills = ["React","Next.js","TypeScript","Node.js","C++","Tailwind CSS","APIs","Git"];
const principles = [
  { icon: Workflow, title: "Problema antes da tecnologia", text: "Primeiro entendo o que precisa melhorar. Depois escolho a ferramenta." },
  { icon: Layers3, title: "Solução enxuta", text: "Menos complexidade desnecessária e mais foco no que realmente gera valor." },
  { icon: Code2, title: "Execução técnica", text: "Da interface à integração, transformo a ideia em algo funcional e utilizável." },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-3xl mb-14">
          <p className="text-primary font-medium mb-3">SOBRE</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Tecnologia com <span className="gradient-text">propósito prático.</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou Caio Silveira, desenvolvedor e profissional de tecnologia em São Paulo. Gosto de transformar processos confusos, tarefas manuais e necessidades de negócio em experiências digitais mais simples e funcionais.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {principles.map((p,i)=><motion.div key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="glass border rounded-2xl p-6">
            <p.icon className="h-6 w-6 text-primary mb-4"/><h3 className="font-semibold text-lg mb-2">{p.title}</h3><p className="text-muted-foreground">{p.text}</p>
          </motion.div>)}
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map(s=><span key={s} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">{s}</span>)}
        </div>
      </div>
    </section>
  );
}
