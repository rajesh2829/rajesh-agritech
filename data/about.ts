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
    "I studied Agricultural Engineering at SNS College of Technology, where I developed specialized domain expertise in irrigation engineering, hydraulic systems, soil and water conservation, and farm machinery.",
    "After graduation I transitioned into software engineering, completing professional Software Testing certification before architecting high-performance web applications with React, Next.js, Node.js, and MongoDB.",
    "This dual background directly powered my engineering work on Nexsens environmental and water telemetry systems, where an in-depth understanding of hydraulic pressure gradients, flow sensor calibration, and multi-depth soil moisture dynamics enabled me to design responsive, accurate real-time dashboards for field operators.",
    "Today in Dubai, I sit squarely at the intersection of both worlds: I understand the physical hydraulic and agronomic challenges farmers and water managers face in arid regions, and I have the software engineering chops to build clean, scalable digital tools that solve them.",
  ],
  keyHighlights: [
    {
      id: "agri-foundation",
      title: "Irrigation & Agri Core",
      subtitle: "B.E. Agricultural Engineering",
      description:
        "Deep mastery of pressurized micro-irrigation, pipe hydraulics, Christiansen uniformity, fertigation injection, and ET0-based scheduling from SNS College of Technology.",
      icon: "sprout",
      badge: "Signature Domain",
    },
    {
      id: "fullstack-skills",
      title: "Full Stack Skills",
      subtitle: "3+ Years Web Architecture",
      description:
        "End-to-end development capabilities using React, Next.js, Node.js, Express, MongoDB, and TypeScript to engineer scalable web portals and IoT telemetry consoles.",
      icon: "code",
      badge: "Modern Tech",
    },
    {
      id: "quality-mindset",
      title: "Quality Mindset",
      subtitle: "Testing & QA Certified",
      description:
        "Certified in Manual & Automation testing (SDLC/STLC, Postman, Jest, Cypress). High emphasis on reliability, test coverage, and edge cases in field conditions.",
      icon: "shield-check",
      badge: "Zero-Defect Focus",
    },
    {
      id: "client-first",
      title: "Client First Approach",
      subtitle: "Impact-Driven Delivery",
      description:
        "Proven experience collaborating across cross-functional teams, optimizing Core Web Vitals, and translating complex operational and agronomic requirements into intuitive UIs.",
      icon: "users",
      badge: "Collaboration",
    },
  ],
  quote: {
    text: "True innovation happens when domain engineers master the code that powers modern industry.",
    author: "Rajesh Samysundaram",
  },
};
