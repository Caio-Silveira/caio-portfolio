export const projects = [
 { id:1, title:"UiKit", description:"Framework de UI extensível em C++ e DirectX 12 para construção de widgets personalizados.", tags:["C++","DirectX 12","UI Framework"], githubUrl:"https://github.com/Caio-Silveira/UiKit" },
 { id:2, title:"MemVM", description:"Módulo de acesso à memória de máquinas virtuais com suporte a RDI, focado em programação de baixo nível.", tags:["C++","Virtualização","Low-level"], githubUrl:"https://github.com/Caio-Silveira/MemVM" },
 { id:3, title:"Shadow", description:"Projeto experimental recente de automação e construção de ferramentas próprias.", tags:["Automação","Experimento","Open Source"], githubUrl:"https://github.com/Caio-Silveira/Shadow" },
 { id:4, title:"Base", description:"Aplicação SaaS full stack com autenticação, equipes, assinaturas e painel de gestão.", tags:["Next.js","SaaS","TypeScript"], githubUrl:"https://github.com/Caio-Silveira/base" },
 { id:5, title:"Pulse", description:"Dashboard administrativo para acompanhamento de operação, métricas e atividade.", tags:["React","Dashboard","Vite"], githubUrl:"https://github.com/Caio-Silveira/pulse" },
];
export type Project=(typeof projects)[0];