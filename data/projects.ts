export type ProjectCategory = "All" | "Agri-Tech" | "Web" | "Full Stack";

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  solution: string;
  techUsed: string[];
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Agri-Tech" | "Web" | "Full Stack";
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  {
    slug: "nexsens",
    title: "Nexsens",
    subtitle: "Company Project · Telemetry & Web Dashboard",
    category: "Full Stack",
    description:
      "Scalable web modules, dynamic dashboard grids, and high-performance REST API integration for environmental and water telemetry systems.",
    image: "/images/X3_NexSensBanner.jpg",
    tags: ["React", "Redux", "Node.js", "APIs", "Dashboard"],
    liveUrl: "https://www.nexsens.com/",
    githubUrl: "https://github.com/yourgithub",
    featured: true,
    caseStudy: {
      overview:
        "Nexsens builds high-precision environmental data loggers and water monitoring systems. This project focused on developing scalable front-end web modules and dynamic dashboard interfaces backed by high-performance REST APIs.",
      problem:
        "Field telemetry devices generate continuous time-series streams of environmental data that require responsive visualization, modular UI components, and reliable data synchronization without degrading interface responsiveness.",
      approach:
        "Engineered modular React component architectures paired with predictable Redux state management. Connected front-end views to robust Node.js REST API endpoints with structured request validation and optimized state updates.",
      solution:
        "Implemented flexible dashboard grid components capable of rendering telemetry widgets, water quality indicators, and sensor status panels with seamless state transitions and clear error boundaries.",
      techUsed: ["React", "Redux", "Node.js", "REST APIs", "JavaScript (ES6+)", "Tailwind CSS"],
      outcome:
        "Delivered modular dashboard layouts and reliable REST API integrations that facilitate responsive real-time data display across desktop and tablet interfaces.",
    },
  },
  {
    slug: "torchlite",
    title: "Torchlite",
    subtitle: "Client Project · High-Performance Web Platform",
    category: "Web",
    description:
      "Optimized frontend performance, improved SEO structure, and responsive Next.js layouts for modern marketing collaboration.",
    image: "/images/torchlite1.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "SEO", "Web Vitals"],
    liveUrl: "https://torchlite.com/",
    githubUrl: "https://github.com/yourgithub",
    featured: true,
    caseStudy: {
      overview:
        "Torchlite is a partner and marketing technology platform. This client engagement focused on frontend architectural enhancements, search engine optimization, and Core Web Vitals optimization using Next.js.",
      problem:
        "The web platform required improved page load speed, cleaner semantic structure for search indexing, and unified responsive styling to ensure seamless presentation across mobile, tablet, and desktop viewports.",
      approach:
        "Conducted a systematic audit of layout rendering, component bundling, and responsive layouts. Re-architected key pages using Next.js server and client component patterns alongside utility-first Tailwind CSS.",
      solution:
        "Built responsive page templates, eliminated layout shifts, structured semantic metadata and Open Graph tags for SEO, and streamlined component trees for faster initial page loads.",
      techUsed: ["Next.js", "React", "Tailwind CSS", "SEO Best Practices", "Core Web Vitals", "TypeScript"],
      outcome:
        "Established responsive, clean layouts with optimized Core Web Vitals metrics and structured SEO foundations across all platform public pages.",
    },
  },
  {
    slug: "nexreon-portal",
    title: "Nexreon Portal",
    subtitle: "Core Product · Enterprise Management Console",
    category: "Full Stack",
    description:
      "Node.js and MongoDB APIs, RBAC authentication flows, and centralized administrative consoles for enterprise cloud operations.",
    image: "/images/nexreon.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Auth", "Portal"],
    liveUrl: "https://app.nexreon.com/login",
    githubUrl: "https://github.com/yourgithub",
    featured: true,
    caseStudy: {
      overview:
        "Nexreon Portal serves as a core administrative and operations hub. The application integrates secure role-based access control (RBAC), multi-tenant user management, and administrative consoles backed by Node.js and MongoDB.",
      problem:
        "Managing administrative permissions and internal operational workflows required strict authentication mechanisms, protected routes, reliable database schemas, and intuitive management views.",
      approach:
        "Designed clean REST API endpoints in Node.js, modeled scalable schema collections in MongoDB, and instituted role-based authorization guards on both server routes and client interfaces.",
      solution:
        "Developed administrative consoles in Next.js featuring secure authentication handshakes, multi-role access controls, real-time activity views, and centralized settings configuration.",
      techUsed: ["Next.js", "Node.js", "Express", "MongoDB", "Mongoose", "RBAC Auth", "Tailwind CSS"],
      outcome:
        "Delivered a dependable enterprise portal architecture featuring role-governed workflows and structured MongoDB data persistence.",
    },
  },
  {
    slug: "agri-engineering-projects",
    title: "Agri Engineering Academic Projects",
    subtitle: "University Research · SNS College of Technology",
    category: "Agri-Tech",
    description:
      "University projects applying agricultural engineering concepts such as irrigation, water management, and farm technology to practical field solutions.",
    image: "/images/agri_engineering.jpg",
    tags: ["Agricultural Engineering", "Irrigation", "Farm Technology"],
    githubUrl: "https://github.com/yourgithub",
    featured: true,
    caseStudy: {
      overview:
        "A series of university engineering projects completed during the Bachelor of Engineering curriculum at SNS College of Technology, centered on field hydraulics, water conservation, and farm mechanization.",
      problem:
        "Agricultural producers in water-stressed regions require efficient water application, minimal canal evaporation losses, and practical equipment modifications to reduce labor intensity and input wastage.",
      approach:
        "Combined engineering calculations for hydraulic head losses, soil infiltration rates, and mechanized implement linkages with controlled field experiments and evaluation prototypes.",
      solution:
        "Designed and analyzed micro-irrigation pipe layouts, calibrated water application uniformities, evaluated soil moisture retention methods, and investigated farm mechanization improvements for regional crop patterns.",
      techUsed: [
        "Agricultural Engineering",
        "Irrigation Hydraulics",
        "Soil & Water Management",
        "Farm Machinery",
        "Technical Analysis",
      ],
      outcome:
        "Successfully developed and documented practical engineering solutions demonstrating efficient water usage and mechanization principles, providing the foundational domain knowledge now applied to agri-tech software.",
    },
  },
];
