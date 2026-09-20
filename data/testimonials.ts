export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content:
      "Working with Alex was an absolute pleasure. The attention to detail and creative solutions provided exceeded our expectations. Our new website has significantly improved our conversion rates.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "Alex delivered a stunning mobile app that our users love. The smooth animations and intuitive interface have received overwhelmingly positive feedback. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content:
      "The brand identity work was exceptional. Alex perfectly captured our vision and created a cohesive brand that resonates with our target audience. Couldn't be happier!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content:
      "Outstanding technical skills and problem-solving ability. Alex built a complex dashboard that handles our real-time data beautifully. The performance is incredible.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Founder",
    company: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
    content:
      "Alex's design sensibility and technical expertise make them a rare find. They understood our needs immediately and delivered beyond what we imagined possible.",
    rating: 5,
  },
];

export type Testimonial = (typeof testimonials)[0];
