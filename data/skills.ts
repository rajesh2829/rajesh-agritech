export interface SkillItem {
  name: string;
  level?: "Foundational" | "Advanced" | "Expert";
  category: "agri" | "frontend" | "backend" | "qa" | "devops";
}

export interface SkillPanel {
  title: string;
  subtitle: string;
  iconName: "wheat" | "terminal" | "droplets";
  description: string;
  groups: {
    categoryName: string;
    skills: string[];
  }[];
}

export interface SkillsSectionData {
  sectionTitle: string;
  sectionSubtitle: string;
  headline: string;
  agriculturePanel: SkillPanel;
  technologyPanel: SkillPanel;
}

export const skillsData: SkillsSectionData = {
  sectionTitle: "Skills & Tooling",
  sectionSubtitle: "Dual-Domain Mastery in Agronomy and Cloud Software",
  headline: "Specialized Knowledge Across Fields & Codebases",
  agriculturePanel: {
    title: "Irrigation & Agri Engineering",
    subtitle: "Signature Engineering Domain & Agronomic Science",
    iconName: "wheat",
    description:
      "Four-year B.E. Agricultural Engineering foundation at SNS College of Technology, specializing in hydraulic pipe network design, pressurized micro-irrigation, and water-use efficiency.",
    groups: [
      {
        categoryName: "Irrigation Engineering (Signature Domain)",
        skills: [
          "Drip & Micro-Irrigation System Design",
          "Pipe Hydraulics & Friction Loss (Hazen-Williams)",
          "Crop Water Requirement (ET0 & Kc Scheduling)",
          "Filtration (Screen, Disc & Media) & Fertigation",
          "Sprinkler Uniformity (Christiansen Cu & DU)",
          "Smart Valve & IoT Sensor Actuation",
        ],
      },
      {
        categoryName: "Agronomy & Field Engineering",
        skills: [
          "Soil Physics & Infiltration Dynamics",
          "Water Conservation & Deficit Irrigation",
          "Farm Machinery & Implement Sizing",
          "Watershed Management & Rainwater Harvesting",
          "Precision Agriculture & Telemetry",
          "Technical Hydraulic Analysis",
        ],
      },
    ],
  },
  technologyPanel: {
    title: "Technology & Software",
    subtitle: "Modern Web, Backend, QA & Cloud Stacks",
    iconName: "terminal",
    description:
      "Modern development stack honed over 3+ years delivering production dashboards, telemetry portals, APIs, and client platforms.",
    groups: [
      {
        categoryName: "Frontend & Architecture",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS"],
      },
      {
        categoryName: "Backend & Database",
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "WebSockets"],
      },
      {
        categoryName: "Quality, Testing & Cloud",
        skills: [
          "Manual and Automation Testing",
          "Postman",
          "Jest",
          "Cypress",
          "Git and GitHub",
          "Docker",
          "AWS Basics",
        ],
      },
    ],
  },
};
