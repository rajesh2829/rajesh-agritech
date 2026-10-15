export type TimelineType = "All" | "Work" | "Education" | "Certifications";

export interface TimelineItem {
  id: string;
  type: "Work" | "Education" | "Certifications";
  period: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  tags: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "exp-1",
    type: "Work",
    period: "2023 — 2026",
    role: "Full Stack Developer",
    organization: "Nexreon / Freelance",
    location: "Dubai, UAE",
    description:
      "Built responsive client sites, Node.js REST APIs with MongoDB, and persistent multi-theme features. Engineered dynamic dashboards and scalable backend endpoints.",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    type: "Work",
    period: "2022 — 2023",
    role: "Frontend Web Developer",
    organization: "Independent Contracts",
    description:
      "Engineered interactive frontends and dashboards with Tailwind CSS and Framer Motion. Handled REST API integrations, responsive layouts, and SEO/Core Web Vitals coaching.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Git", "Framer Motion"],
  },
  {
    id: "exp-3",
    type: "Certifications",
    period: "2022",
    role: "Software Testing Certification (Manual & Automation)",
    organization: "Professional QA Program",
    description:
      "In-depth training across SDLC and STLC, comprehensive test cases, defect life cycle tracking, Postman API validation, and automated testing with Jest and Cypress.",
    tags: ["Manual Testing", "Automation Testing", "Postman", "Cypress", "Jest"],
  },
  {
    id: "exp-4",
    type: "Education",
    period: "2021 — 2022",
    role: "Full Stack Development Learning",
    organization: "Self-Directed Bootcamps",
    description:
      "Intensive self-directed software curriculum: built 15+ sandbox web projects and solved 300+ data structure and programming challenges.",
    tags: ["JavaScript ES6+", "Node.js", "SQL", "Git", "Algorithms"],
  },
  {
    id: "exp-5",
    type: "Education",
    period: "2017 — 2021",
    role: "Bachelor of Engineering in Agricultural Engineering",
    organization: "SNS College of Technology",
    location: "India",
    description:
      "Rigorous four-year engineering degree encompassing agricultural machinery, irrigation systems, soil and water management, and modern farm technologies.",
    tags: [
      "Agricultural Engineering",
      "Irrigation",
      "Farm Machinery",
      "Soil Science",
      "Hydraulics",
    ],
  },
];
