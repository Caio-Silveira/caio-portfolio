
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#070712]" />\n      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(139,92,246,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.22)_1px,transparent_1px)] [background-size:72px_72px]" />\n      <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_20%,rgba(139,92,246,.28),transparent_38%),radial-gradient(circle_at_70%_55%,rgba(59,130,246,.12),transparent_32%)]" />\n      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_25%,rgba(7,7,18,.82)_85%)]" />
      <motion.div className="absolute top-24 left-[8%] w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ y: [0,-25,0], x:[0,15,0] }} transition={{ duration:7, repeat:Infinity }} />
      <motion.div className="absolute bottom-20 right-[8%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y:[0,25,0], x:[0,-15,0] }} transition={{ duration:9, repeat:Infinity }} />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7}}
            className="inline-flex px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-muted-foreground mb-7">
            São Paulo · Tecnologia para negócios
          </motion.div>
          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.8}}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-7">
            Caio <span className="gradient-text">Silveira</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3,duration:.8}}
            className="text-2xl md:text-4xl font-semibold max-w-4xl mx-auto mb-6">
            Soluções digitais para problemas reais de negócios.
          </motion.p>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.45,duration:.8}}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Sistemas, automações e aplicações web pensados para simplificar processos e transformar necessidades em soluções funcionais.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.6,duration:.8}}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={()=>go("#contact")} className="text-base px-7">
              <MessageCircle className="h-5 w-5 mr-2"/> Falar comigo
            </Button>
            <Button size="lg" variant="outline" onClick={()=>go("#services")} className="text-base px-7">
              Ver soluções
            </Button>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}
            className="flex justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/Caio-Silveira" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-6 w-6"/></a>
            <a href="mailto:silverdevprofissional07@gmail.com" aria-label="E-mail"><Mail className="h-6 w-6"/></a>
          </motion.div>
        </div>
      </div>
      <motion.div className="absolute bottom-7 left-1/2 -translate-x-1/2" animate={{y:[0,8,0]}} transition={{duration:1.5,repeat:Infinity}}>
        <ArrowDown className="h-5 w-5 text-muted-foreground"/>
      </motion.div>
    </section>
  );
}

