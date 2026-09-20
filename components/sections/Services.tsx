"use client";

import { motion } from "framer-motion";
import { Code, Globe, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const iconMap: Record<string, any> = { Code, Globe, Sparkles, Zap };

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
          <p className="text-primary font-medium mb-3">SOLUÇÕES</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">Onde posso <span className="gradient-text">ajudar seu negócio</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tecnologia não precisa complicar. A ideia é resolver o problema certo com a solução certa.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service,index)=>{ const Icon=iconMap[service.icon]; return (
            <motion.div key={service.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}>
              <Card className="h-full border hover:border-primary/50 transition-all glass">
                <CardHeader><div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3"><Icon className="h-6 w-6"/></div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle><CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent><div className="flex flex-wrap gap-2">{service.features.map(f=><span key={f} className="text-sm px-3 py-1 rounded-full bg-muted">{f}</span>)}</div></CardContent>
              </Card>
            </motion.div>);})}
        </div>
      </div>
    </section>
  );
}
