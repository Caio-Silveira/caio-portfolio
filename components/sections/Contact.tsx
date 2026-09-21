"use client";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import {getProjectAttachments} from "@/lib/project-brief-store";

export default function Contact(){
 const openWhatsapp=async()=>{
  const brief=sessionStorage.getItem("projectBrief")?.trim();
  const files=getProjectAttachments();
  const message=brief
   ? `Olá Caio, vim pelo seu portfólio. Quero conversar sobre este projeto:\n\n${brief}`
   : "Olá Caio, vim pelo seu portfólio e quero conversar sobre um projeto.";

  if(files.length && typeof navigator!=="undefined" && "share" in navigator && navigator.canShare?.({files})){
   try{
    await navigator.share({title:"Projeto para Caio",text:message,files});
    return;
   }catch(error){
    if((error as DOMException)?.name==="AbortError") return;
   }
  }
  window.open(`https://wa.me/5511948160401?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
 };
 return <section id="contact" className="contact"><div className="shell relative z-10 py-20 md:py-24">
  <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="contact-compact">
   <div className="contact-compact-copy">
    <p className="eyebrow">05 / Contato</p>
    <h2 className="contact-title contact-title-compact mt-6">Agora é só<br/><span className="text-[#D08A5B]">começar.</span></h2>
   </div>
   <div className="contact-compact-action">
    <p className="contact-context-note">Sua descrição vai junto automaticamente.</p>
    <button onClick={openWhatsapp} className="contact-primary contact-primary-simple">
     <span>Continuar no WhatsApp</span><ArrowUpRight/>
    </button>
    <div className="contact-links">
     <a href="mailto:silverdevprofissional07@gmail.com">Email</a>
     <a href="https://github.com/Caio-Silveira" target="_blank" rel="noreferrer">GitHub</a>
     <a href="https://www.linkedin.com/in/caio-silveira07" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
   </div>
  </motion.div>
 </div></section>
}