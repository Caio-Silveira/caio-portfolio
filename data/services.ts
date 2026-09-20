export const services = [
  {
    id: 1,
    title: "Sistemas para negócios",
    description: "Ferramentas digitais para organizar operações, atendimento e rotinas que hoje consomem tempo da sua equipe.",
    icon: "Code",
    features: ["Sistemas web", "Painéis e fluxos", "Integrações", "Implantação prática"],
  },
  {
    id: 2,
    title: "Automação",
    description: "Processos repetitivos transformados em fluxos mais simples, rápidos e consistentes.",
    icon: "Zap",
    features: ["Processos internos", "Integrações", "Redução de tarefas manuais", "Fluxos sob medida"],
  },
  {
    id: 3,
    title: "Aplicações web",
    description: "Experiências rápidas e responsivas para apresentar, atender e operar seu negócio pela internet.",
    icon: "Globe",
    features: ["Responsivo", "Performance", "Experiência moderna", "Deploy e configuração"],
  },
  {
    id: 4,
    title: "Soluções sob medida",
    description: "Quando a necessidade não cabe numa ferramenta genérica, desenho uma solução adequada ao problema.",
    icon: "Sparkles",
    features: ["Diagnóstico", "Prototipação", "Implementação", "Suporte quando aplicável"],
  },
];

export type Service = (typeof services)[0];
