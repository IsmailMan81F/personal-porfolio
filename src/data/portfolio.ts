export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  kicker: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  previewUrl: string;
  githubUrl: string;
}

export interface Milestone {
  year: string;
  title: string;
  organization?: string;
  description: string;
  highlight?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Ismail Meguehout",
  shortName: "Dev.",
  role: "Software Engineer",
  institution: "High National School of Computer Science (ESI)",
  yearOfStudy: "Year 3 of 5 — State Engineering Degree in Computer Science",
  location: "Jijel, Algeria",
  baccalaureateScore: "18.65 / 20",
  satisfiedClients: 3,
  socialLinks: {
    github: "https://github.com/IsmailMan81F",
    instagram: "https://www.instagram.com/ismail_meg81f/",
    facebook: "https://web.facebook.com/ismail.meguehout",
    whatsapp: "https://wa.me/213658331737",
    whatsappNumber: "+213 658 33 17 37",
    phones: ["0658331737", "0563443980"]
  }
};

export const PROJECTS: Project[] = [
  {
    id: "odelice",
    title: "O'délice Officiel",
    kicker: "Gourmet Digital Experience",
    tagline: "High-conversion web portal for premium dining.",
    category: "Full-Stack Web Application",
    description: "An elegant, interactive storefront crafted for the O'délice restaurant brand. Features dynamic menu exploration, lightning-fast ordering flows, and curated visual showcases to drive customer conversion online.",
    features: [
      "Intuitive interactive menu curation",
      "Streamlined order & contact pathways",
      "Optimized high-fidelity visual loading"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/assets/Odelice tumbnail.png",
    previewUrl: "https://www.odelice.site",
    githubUrl: "https://github.com/IsmailMan81F/odelice-website"
  },
  {
    id: "chickenvibe",
    title: "Chicken Vibe",
    kicker: "Dynamic Fast Food Portal",
    tagline: "Vibrant brand presence with real-time dish discovery.",
    category: "Modern Web Platform",
    description: "An energetic digital storefront designed to capture the urban atmosphere of Chicken Vibe. Built with seamless menu navigation, mobile-first touch ergonomics, and localized promotional highlights.",
    features: [
      "Mobile-optimized instant ordering UX",
      "Dynamic specials and daily promotion showcase",
      "Accessible navigation with responsive design"
    ],
    techStack: ["React", "TypeScript", "Modern CSS"],
    image: "/assets/Chickenvibe tumbnail.png",
    previewUrl: "https://chickenvibe.vercel.app",
    githubUrl: "https://github.com/IsmailMan81F/chickenvibe"
  },
  {
    id: "hellfire",
    title: "Hellfire Burger",
    kicker: "Artisanal Burger Showcase",
    tagline: "Punchy, appetite-driven online menu and showcase.",
    category: "Culinary Web Application",
    description: "A bold culinary platform tailored for an artisanal burger brand. Engineered for quick load times and high visual fidelity, presenting signature items and store locations with clear call-to-actions.",
    features: [
      "Custom burger builder interface",
      "Rich product visual staging",
      "Integrated pickup & direction points"
    ],
    techStack: ["React", "Tailwind CSS", "Vercel"],
    image: "/assets/Hellfire tumbnail.png",
    previewUrl: "https://hellfire-burger.vercel.app",
    githubUrl: "https://github.com/IsmailMan81F/hellfire-burger"
  },
  {
    id: "kord",
    title: "KORD E-Commerce",
    kicker: "Full-Featured Commerce Platform",
    tagline: "End-to-end commerce system with dedicated management tools.",
    category: "Enterprise E-Commerce & Admin",
    description: "A robust digital commerce engine equipped with categorized inventory catalogs, faceted search, user checkout workflows, and a comprehensive administrative dashboard for order tracking and inventory management.",
    features: [
      "Comprehensive merchant admin dashboard",
      "Multi-category product catalog with smart filters",
      "Persistent cart & checkout flow architecture"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    image: "/assets/KORD tumbnail.png",
    previewUrl: "https://ecom-website-beta-version.vercel.app/",
    githubUrl: "https://github.com/IsmailMan81F/ecommerce-website"
  },
  {
    id: "sahla-farm",
    title: "Sahla Farm IoT & AI Backend",
    kicker: "Intelligent AgriTech Automation",
    tagline: "Telemetric sensor ingestion pipeline with AI actuator triggers.",
    category: "IoT Architecture & AI Automation",
    description: "The core backend engine powering the Sahla Farm smart agriculture system. Ingests real-time soil and ambient sensor streams (temperature, humidity, moisture) from IoT edge units, feeding an AI decision agent that commands automated irrigation and field actuators.",
    features: [
      "Real-time telemetric hardware ingestion box pipeline",
      "Automated AI agent analysis on ground telemetry",
      "Actuator command dispatch for precision farming"
    ],
    techStack: ["Python", "FastAPI / Node", "IoT Telemetry", "AI Agents", "Docker"],
    image: "/assets/SAHLA tumbnail.png",
    previewUrl: "https://sahla-farm-website.vercel.app/",
    githubUrl: "https://github.com/IsmailMan81F/SAHLA_FARM_BACKEND"
  }
];

export const TIMELINE: Milestone[] = [
  {
    year: "July 2024",
    title: "National Baccalaureate Distinction",
    organization: "Algeria",
    description: "Graduated with an exceptional honors score of 18.65/20, ranking among the top students nationwide.",
    highlight: "18.65 / 20"
  },
  {
    year: "October 2024",
    title: "Admitted to National Higher School of Computer Science (ESI)",
    organization: "ESI (École Nationale Supérieure d'Informatique)",
    description: "Commenced the rigorous 5-year curriculum to attain the State Computer Science Engineering Certificate.",
    highlight: "Top Engineering School"
  },
  {
    year: "2025",
    title: "Foundations & Algorithmic Problem Solving",
    organization: "ESI Curriculum & Independent Engineering",
    description: "Mastered deep computer science foundations, low-level Linux systems, data structures, and algorithmic engineering.",
    highlight: "Linux & Algorithms"
  },
  {
    year: "February 2026",
    title: "Backend Engineer — Sahla Farm IoT Project",
    organization: "Sahla Farm",
    description: "Architected telemetry data pipelines connecting IoT hardware sensors directly with intelligent AI automation agents.",
    highlight: "IoT & AI Backend"
  },
  {
    year: "August 2026 – Present",
    title: "Independent Software Consultancy & Engineering",
    organization: "Freelance",
    description: "Designing and shipping bespoke web platforms, mobile solutions, and automation systems for clients worldwide.",
    highlight: "3 Satisfied Clients"
  }
];

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Web Platforms",
    description: "High-performance, pixel-precise web applications built with React, TypeScript, and modern edge tools.",
    details: "Specializing in frictionless user experiences, rigorous responsive design, and conversion-focused architectures."
  },
  {
    id: "apps",
    title: "Mobile & Desktop Apps",
    description: "Cross-platform mobile and desktop software that brings native fluidity to every operating system.",
    details: "Engineered with unified codebases for iOS, Android, macOS, and Windows without compromising performance."
  },
  {
    id: "ai",
    title: "AI Automations & Backends",
    description: "Autonomous agents, IoT telemetry pipelines, and robust backend APIs that eliminate manual business friction.",
    details: "Connecting disparate data streams to LLMs and automated actuators to build self-driving operational workflows."
  },
  {
    id: "growth",
    title: "Business Growth Engineering",
    description: "Helping brands establish undeniable authority online through tailored digital architecture.",
    details: "End-to-end consulting from system design and SEO hygiene to scalable hosting and production monitoring."
  }
];
