export interface SkillItem {
  name: string;
  level?: "Foundational" | "Advanced" | "Expert";
  category: "agri" | "frontend" | "backend" | "qa" | "devops";
}

export interface SkillPanel {
  title: string;
  subtitle: string;
  iconName: "wheat" | "terminal";
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
    title: "Agriculture & Engineering",
    subtitle: "Domain Expertise & Agronomic Science",
    iconName: "wheat",
    description:
      "Core competencies built during Bachelor of Engineering and applied to smart farming systems, water resources, and mechanization.",
    groups: [
      {
        categoryName: "Field Engineering",
        skills: [
          "Agricultural Engineering",
          "Irrigation & Water Management",
          "Soil Science",
          "Farm Machinery",
          "Agricultural Technology",
          "Technical Analysis",
        ],
      },
    ],
  },
  technologyPanel: {
    title: "Technology & Software",
    subtitle: "Modern Web, Backend, QA & Cloud Stacks",
    iconName: "terminal",
    description:
      "Modern development stack honed over 3+ years delivering production dashboards, APIs, and client platforms.",
    groups: [
      {
        categoryName: "Frontend & Architecture",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS"],
      },
      {
        categoryName: "Backend & Database",
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "WebSockets"],
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
          "AWS",
        ],
      },
    ],
  },
};
