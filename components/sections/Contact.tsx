"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="relative overflow-hidden rounded-3xl border bg-background p-8 md:p-14 text-center">
          <div className="absolute inset-0 gradient-bg opacity-[.06]"/>
          <div className="relative">
            <p className="text-primary font-medium mb-3">VAMOS CONVERSAR</p>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Tem algo no seu negócio que poderia funcionar <span className="gradient-text">melhor?</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-9">Me conte o problema. Eu avalio o cenário e penso na forma mais simples de transformar isso em uma solução digital.</p>
            <Button size="lg" asChild className="mb-10">
              <a href="https://wa.me/5511948160401?text=Ol%C3%A1%20Caio%2C%20vim%20pelo%20seu%20site%20e%20quero%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o."><MessageCircle className="h-5 w-5 mr-2"/>Falar com Caio</a>
            </Button>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 text-sm text-muted-foreground">
              <a className="flex items-center gap-2 hover:text-foreground" href="mailto:silverdevprofissional07@gmail.com"><Mail className="h-4 w-4"/>silverdevprofissional07@gmail.com</a>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4"/>São Paulo, SP</span>
              <a className="flex items-center gap-2 hover:text-foreground" href="https://github.com/Caio-Silveira" target="_blank" rel="noreferrer"><Github className="h-4 w-4"/>GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
