export const services = [
 {id:1,title:"Web",description:"Sites, aplicações e experiências digitais.",icon:"Globe",features:["Sites","Aplicações","E-commerce"]},
 {id:2,title:"Sistemas",description:"Ferramentas para organizar e operar melhor.",icon:"Code",features:["Painéis","Gestão","Integrações"]},
 {id:3,title:"Automação",description:"Menos trabalho manual. Mais fluxo.",icon:"Zap",features:["Processos","APIs","Automação"]},
 {id:4,title:"Sob medida",description:"Tecnologia construída para uma necessidade específica.",icon:"Sparkles",features:["Produto","Integração","Implementação"]},
];
export type Service = (typeof services)[0];
