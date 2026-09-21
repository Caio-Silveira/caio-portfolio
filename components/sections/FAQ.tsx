"use client";
import {useState} from "react";
import {Plus} from "lucide-react";
const items=[
 ["Tenho uma ideia, mas ainda não sei como executar.","Eu organizo o problema, avalio caminhos possíveis e transformo a ideia em um escopo claro antes de desenvolver."],
 ["Você consegue trabalhar em algo que já existe?","Sim. Posso adaptar, integrar, corrigir ou evoluir uma solução existente quando esse for o melhor caminho."],
 ["Como prazo e valor são definidos?","Depois de entender escopo, riscos e complexidade. A proposta parte do que realmente precisa ser entregue."]
];
export default function FAQ(){const[open,setOpen]=useState<number|null>(0);return <section id="faq" className="section-shell"><div className="shell"><div className="grid lg:grid-cols-[.72fr_1.28fr] gap-12 lg:gap-28 items-start">
 <div className="lg:sticky lg:top-32"><p className="eyebrow">04 / FAQ</p><h2 className="section-title mt-6">O que você<br/><span className="text-[#D08A5B]">precisa saber.</span></h2></div>
 <div className="border-t border-white/10 lg:mt-16">{items.map(([q,a],i)=><div key={q} className="faq-item"><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span className="skill-index">0{i+1}</span><span className="font-medium">{q}</span><Plus className={"w-4 transition-transform "+(open===i?"rotate-45":"")}/></button><div className={"faq-answer "+(open===i?"open":"")}><div><p>{a}</p></div></div></div>)}</div>
 </div></div></section>}