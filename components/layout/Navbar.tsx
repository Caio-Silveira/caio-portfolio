"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems=[["Soluções","#services"],["Exemplos","#projects"],["Sobre","#about"],["Contato","#contact"]];

export default function Navbar(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const [mounted,setMounted]=useState(false); const {theme,setTheme}=useTheme();
 useEffect(()=>setMounted(true),[]);
 useEffect(()=>{const h=()=>setScrolled(window.scrollY>30); addEventListener("scroll",h); return()=>removeEventListener("scroll",h)},[]);
 const go=(href:string)=>{setOpen(false); document.querySelector(href)?.scrollIntoView({behavior:"smooth"})};
 return <nav className={cn("fixed top-0 inset-x-0 z-50 transition-all",scrolled?"bg-background/80 backdrop-blur-xl border-b":"bg-transparent")}>
  <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
   <button onClick={()=>go("#hero")} className="font-heading font-bold text-xl"><span className="gradient-text">CS</span><span className="hidden sm:inline ml-2">Caio Silveira</span></button>
   <div className="hidden md:flex gap-8">{navItems.map(([n,h])=><button key={n} onClick={()=>go(h)} className="text-sm text-muted-foreground hover:text-foreground">{n}</button>)}</div>
   <div className="flex gap-2">
    {mounted&&<Button variant="ghost" size="icon" onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{theme==="dark"?<Sun className="h-5 w-5"/>:<Moon className="h-5 w-5"/>}</Button>}
    <Button variant="ghost" size="icon" className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
   </div>
  </div>
  {open&&<div className="md:hidden bg-background/95 backdrop-blur-xl border-b px-4 py-5 flex flex-col gap-4">{navItems.map(([n,h])=><button key={n} onClick={()=>go(h)} className="text-left text-lg">{n}</button>)}</div>}
 </nav>
}
