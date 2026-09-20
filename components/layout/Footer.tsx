"use client";

import { ArrowUp, Github, Mail } from "lucide-react";

export default function Footer(){
 return <footer className="border-t bg-muted/20">
  <div className="container mx-auto px-4 py-10 max-w-6xl flex flex-col md:flex-row gap-6 justify-between items-center">
   <div><p className="font-heading font-bold text-xl">Caio Silveira</p><p className="text-sm text-muted-foreground">Soluções digitais para negócios · São Paulo</p></div>
   <div className="flex items-center gap-5 text-muted-foreground">
    <a href="https://github.com/Caio-Silveira" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5"/></a>
    <a href="mailto:silderdevprofissional07@gmail.com" aria-label="E-mail"><Mail className="h-5 w-5"/></a>
    <button onClick={()=>scrollTo({top:0,behavior:"smooth"})} className="flex items-center gap-2 text-sm"><ArrowUp className="h-4 w-4"/>Topo</button>
   </div>
  </div>
  <div className="container mx-auto px-4 pb-8 max-w-6xl text-xs text-muted-foreground">© {new Date().getFullYear()} Caio Silveira.</div>
 </footer>
}
