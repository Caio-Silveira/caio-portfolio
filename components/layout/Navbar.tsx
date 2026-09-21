"use client";
import {useEffect,useState} from "react";
import {Menu,X} from "lucide-react";
import SilverMark from "@/components/brand/SilverMark";
const nav=[["Skills","#skills"],["Projetos","#projects"],["FAQ","#faq"],["Contato","#contact"]];
export default function Navbar(){const[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);useEffect(()=>{const h=()=>setScrolled(scrollY>24);addEventListener("scroll",h);h();return()=>removeEventListener("scroll",h)},[]);const go=(h:string)=>{setOpen(false);document.querySelector(h)?.scrollIntoView({behavior:"smooth"})};return <nav className={"fixed top-0 inset-x-0 z-50 text-[#eee9df] transition-all duration-300 "+(scrolled?"bg-[#101312]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.18)]":"bg-[#101312]/70 backdrop-blur-md border-b border-white/[.06]")}><div className="container mx-auto px-5 h-20 md:h-24 max-w-6xl flex items-center justify-between">
 <button onClick={()=>go("#hero")} className="flex items-center"><SilverMark className="w-[80px] md:w-[90px] text-[#D08A5B]"/></button>
 <div className="hidden md:flex items-center gap-9">{nav.map(([n,h])=><button key={n} onClick={()=>go(h)} className="relative py-2 text-[15px] font-medium text-[#c8c5bd] hover:text-[#f3eee4] transition-colors after:absolute after:left-0 after:right-full after:bottom-0 after:h-px after:bg-[#D08A5B] hover:after:right-0 after:transition-all">{n}</button>)}</div>
 <button className="md:hidden p-2" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<div className="md:hidden bg-[#101312] border-t border-white/10 px-5 py-6 flex flex-col gap-5">{nav.map(([n,h])=><button key={n} onClick={()=>go(h)} className="text-left text-lg font-medium">{n}</button>)}</div>}</nav>}