"use client";
import {useEffect,useRef,useState} from "react";
import {ArrowRight,FileText,Paperclip,X} from "lucide-react";
import {setProjectAttachments} from "@/lib/project-brief-store";

type Item={id:string;file:File;url?:string};

export default function ProjectComposer(){
 const[text,setText]=useState("");
 const[items,setItems]=useState<Item[]>([]);
 const fileRef=useRef<HTMLInputElement>(null);

 useEffect(()=>{setText(sessionStorage.getItem("projectBrief")||"")},[]);
 useEffect(()=>{setProjectAttachments(items.map(i=>i.file));return()=>{items.forEach(i=>i.url&&URL.revokeObjectURL(i.url))}},[items]);

 const update=(v:string)=>{setText(v);sessionStorage.setItem("projectBrief",v)};
 const add=(list:FileList|null)=>{
  if(!list)return;
  const next=Array.from(list).slice(0,6-items.length).map(file=>({
   id:crypto.randomUUID(),file,url:file.type.startsWith("image/")?URL.createObjectURL(file):undefined
  }));
  setItems(prev=>[...prev,...next].slice(0,6));
 };
 const remove=(id:string)=>setItems(prev=>{const hit=prev.find(i=>i.id===id);if(hit?.url)URL.revokeObjectURL(hit.url);return prev.filter(i=>i.id!==id)});
 const go=()=>document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"});

 return <div className="composer-shell">
  {items.length>0&&<div className="composer-attachments">{items.map(item=><div className="composer-attachment" key={item.id}>
   {item.url?<img src={item.url} alt={item.file.name}/>:<div className="composer-file-icon"><FileText/></div>}
   <button type="button" onClick={()=>remove(item.id)} aria-label={"Remover "+item.file.name}><X/></button>
   <span title={item.file.name}>{item.file.name}</span>
  </div>)}</div>}
  <textarea
   value={text}
   onChange={e=>update(e.target.value)}
   maxLength={500}
   className="composer-textarea"
   placeholder="O que você quer criar?"
   aria-label="Descreva sua ideia"
  />
  <div className="composer-toolbar">
   <div className="composer-tools">
    <button type="button" onClick={()=>fileRef.current?.click()} title="Anexar arquivo"><Paperclip/><span>Anexar</span></button>
    <span className="composer-count">{items.length}/6</span>
   </div>
   <button type="button" onClick={go} className="composer-send"><span>Continuar</span><ArrowRight/></button>
  </div>
  <input ref={fileRef} className="sr-only" type="file" multiple accept="image/*,.pdf,.doc,.docx,.txt,.zip" onChange={e=>{add(e.target.files);e.currentTarget.value=""}}/>
 </div>
}