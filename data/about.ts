export interface AboutHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "sprout" | "code" | "shield-check" | "users";
  badge: string;
}

export interface AboutData {
  sectionTitle: string;
  sectionSubtitle: string;
  headline: string;
  storyParagraphs: string[];
  keyHighlights: AboutHighlight[];
  quote: {
    text: string;
    author: string;
  };
}

export const aboutData: AboutData = {
  sectionTitle: "About Me",
  sectionSubtitle: "Bridging physical farm domains and modern cloud architectures",
  headline: "Where agriculture meets software",
  storyParagraphs: [
    "I studied Agricultural Engineering at SNS College of Technology, where I built a strong foundation in irrigation systems, soil and water management, farm machinery and modern farming technology.",
    "After graduation I moved into software, completing a Software Testing certification and then building real-world web applications with React, Next.js, Node.js and MongoDB.",
    "Today I sit at the intersection of both worlds: I understand the field problems farmers face, and I know how to turn them into clean, reliable digital products.",
  ],
  keyHighlights: [
    {
      id: "agri-foundation",
      title: "Agri Foundation",
      subtitle: "B.E. Agricultural Engineering",
      description:
        "Deep academic and field-level understanding of irrigation networks, soil water dynamics, mechanization, and environmental parameters.",
      icon: "sprout",
      badge: "Domain Expertise",
    },
    {
      id: "fullstack-skills",
      title: "Full Stack Skills",
      subtitle: "3+ Years Web Architecture",
      description:
        "End-to-end development capabilities using React, Next.js, Node.js, Express, MongoDB, and TypeScript to engineer scalable web portals.",
      icon: "code",
      badge: "Modern Tech",
    },
    {
      id: "quality-mindset",
      title: "Quality Mindset",
      subtitle: "Testing & QA Certified",
      description:
        "Certified in Manual & Automation testing (SDLC/STLC, Postman, Jest, Cypress). High emphasis on reliability, test coverage, and edge cases.",
      icon: "shield-check",
      badge: "Zero-Defect Focus",
    },
    {
      id: "client-first",
      title: "Client First Approach",
      subtitle: "Impact-Driven Delivery",
      description:
        "Proven experience collaborating across cross-functional teams, optimizing Core Web Vitals, and translating operational requirements into intuitive UIs.",
      icon: "users",
      badge: "Collaboration",
    },
  ],
  quote: {
    text: "True innovation happens when domain engineers master the code that powers modern industry.",
    author: "Rajesh Samysundaram",
  },
};
