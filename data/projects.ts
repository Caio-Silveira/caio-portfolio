export const projects = [
 { slug:"central-atendimento", featured:true, title:"Central de Atendimento", description:"Central self-hosted para organizar conversas comerciais, contatos e atendimento de equipe em uma única caixa.", tags:["Chatwoot","Docker","PostgreSQL"], demoUrl:"http://127.0.0.1:8200/app/login" },
 { slug:"uikit", featured:true, title:"UiKit", description:"Framework de UI extensível em C++ e DirectX 12 para construção de widgets personalizados.", tags:["C++","DirectX 12","UI Framework"], githubUrl:"https://github.com/Caio-Silveira/UiKit" },
 { slug:"memvm", featured:true, title:"MemVM", description:"Módulo de acesso à memória de máquinas virtuais com suporte a RDI, focado em programação de baixo nível.", tags:["C++","Virtualização","Low-level"], githubUrl:"https://github.com/Caio-Silveira/MemVM" },
 { slug:"shadow", title:"Shadow", description:"Projeto experimental recente de automação e construção de ferramentas próprias.", tags:["Automação","Experimento","Open Source"], githubUrl:"https://github.com/Caio-Silveira/Shadow" },
 { slug:"base", title:"Base", description:"Aplicação SaaS full stack com autenticação, equipes, assinaturas e painel de gestão.", tags:["Next.js","SaaS","TypeScript"], githubUrl:"https://github.com/Caio-Silveira/base" },
 { slug:"pulse", title:"Pulse", description:"Dashboard administrativo para acompanhamento de operação, métricas e atividade.", tags:["React","Dashboard","Vite"], githubUrl:"https://github.com/Caio-Silveira/pulse" },
];
export type Project=(typeof projects)[0];