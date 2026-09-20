"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12">
          <p className="text-primary font-medium mb-3">EXEMPLOS DE SOLUÇÃO</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">Do problema à <span className="gradient-text">experiência digital.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Alguns formatos de solução que podem ser adaptados à realidade de cada negócio. Sem clientes ou resultados fictícios.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project,index)=>(
            <motion.div key={project.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}>
              <Card className="overflow-hidden h-full group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"/>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">{project.title}<ArrowUpRight className="h-4 w-4 text-primary"/></h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tags.map(t=><Badge key={t} variant="secondary">{t}</Badge>)}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
