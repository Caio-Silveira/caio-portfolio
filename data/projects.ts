export const projects = [
  {
    id: 1,
    title: "Agenda online para serviços",
    description: "Demonstração de uma experiência de agendamento digital pensada para pequenos negócios que ainda concentram horários no WhatsApp.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1000&q=80",
    tags: ["Agendamento", "Web", "Automação"],
    category: "solucao",
    liveUrl: "#contact",
    githubUrl: "https://github.com/Caio-Silveira",
  },
  {
    id: 2,
    title: "Interfaces para operações",
    description: "Estruturas de painel e aplicações que transformam processos dispersos em uma experiência centralizada e objetiva.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    tags: ["Dashboard", "Next.js", "TypeScript"],
    category: "solucao",
    liveUrl: "#contact",
    githubUrl: "https://github.com/Caio-Silveira",
  },
  {
    id: 3,
    title: "Experiências web modernas",
    description: "Sites e aplicações responsivas com foco em clareza, confiança, performance e conversão.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
    tags: ["React", "UX", "Performance"],
    category: "solucao",
    liveUrl: "#contact",
    githubUrl: "https://github.com/Caio-Silveira",
  },
];

export type Project = (typeof projects)[0];
