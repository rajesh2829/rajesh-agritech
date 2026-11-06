// ==============================================================================
// GITHUB CONFIGURATION
// TODO: Replace 'yourgithub' with your actual GitHub username below.
// All repository and profile links across the portfolio reference this constant.
// ==============================================================================
export const GITHUB_PROFILE_URL = "https://github.com/yourgithub";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "whatsapp" | "email" | "github";
  label: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  positioning: string;
  tagline: string;
  shortBio: string;
  location: string;
  locationDetail: string;
  email: string;
  phoneWhatsApp: string;
  whatsappUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  availabilityBadge: string;
  siteUrl: string;
  navLinks: NavItem[];
  socialLinks: SocialLink[];
  marqueeKeywords: string[];
  stats: {
    value: number;
    suffix: string;
    label: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Rajesh Samysundaram",
  role: "Agricultural Engineer & Agri-Tech Full Stack Developer",
  positioning: "Agricultural Engineer & Agri-Tech Full Stack Developer",
  tagline: "Engineering smarter farms with technology.",
  shortBio:
    "Agricultural Engineering graduate who combines deep knowledge of irrigation, soil and water management, and farm machinery with 3+ years of full stack development experience. I build digital tools and web platforms that help agriculture work smarter.",
  location: "Dubai, UAE",
  locationDetail: "Dubai, UAE (originally from India)",
  email: "srajeshs021@gmail.com",
  phoneWhatsApp: "+91 97906 14060",
  whatsappUrl: "https://wa.me/919790614060",
  linkedinUrl: "https://www.linkedin.com/in/rajesh-samysundaram/",
  githubUrl: GITHUB_PROFILE_URL,
  resumeUrl: "/resume.pdf",
  availabilityBadge: "Open to agri-tech and engineering opportunities",
  siteUrl: "https://rajesh-agritech.vercel.app",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Focus Areas", href: "#focus-areas" },
    { label: "Irrigation", href: "#irrigation" },
    { label: "Projects", href: "#projects" },
    { label: "Insights", href: "#insights" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rajesh-samysundaram/",
      icon: "linkedin",
      label: "View LinkedIn Profile",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919790614060",
      icon: "whatsapp",
      label: "Chat on WhatsApp",
    },
    {
      name: "Email",
      href: "mailto:srajeshs021@gmail.com",
      icon: "email",
      label: "Send an Email",
    },
    {
      name: "GitHub",
      href: GITHUB_PROFILE_URL,
      icon: "github",
      label: "View GitHub Repository",
    },
  ],
  marqueeKeywords: [
    "Drip Irrigation",
    "Hydraulics",
    "Fertigation",
    "Smart Irrigation",
    "ET-Based Scheduling",
    "Soil Science",
    "Precision Agriculture",
    "Water Management",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "IoT Telemetry",
    "Agri-Tech",
  ],
  stats: [
    {
      value: 3,
      suffix: "+",
      label: "Years in Tech",
      description: "Full-stack web and API development",
    },
    {
      value: 12,
      suffix: "+",
      label: "Projects Delivered",
      description: "Enterprise portals, platforms & tools",
    },
    {
      value: 5,
      suffix: "+",
      label: "Tech Stacks",
      description: "Frontend, backend, databases & DevOps",
    },
    {
      value: 1,
      suffix: " Degree",
      label: "B.E. Agri Engineering",
      description: "SNS College of Technology graduate",
    },
  ],
};
