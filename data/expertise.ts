export interface FocusArea {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  iconName: "droplets" | "mountain" | "cog" | "cpu" | "layout" | "bar-chart-3";
  tags: string[];
}

export interface ExpertiseData {
  sectionTitle: string;
  sectionSubtitle: string;
  headline: string;
  footerNote: string;
  areas: FocusArea[];
}

export const expertiseData: ExpertiseData = {
  sectionTitle: "Focus Areas",
  sectionSubtitle: "Specialized Agricultural & Engineering Competencies",
  headline: "Where Agronomy Meets Systems Engineering",
  footerNote:
    "Academic and hands-on knowledge from my Agricultural Engineering degree, now paired with modern software skills.",
  areas: [
    {
      id: "irrigation-water-management",
      number: "01",
      title: "Irrigation & Water Management",
      summary:
        "Signature engineering domain: precision micro-irrigation design, hydraulic pipe network calculations, fertigation systems, and smart sensor-driven water scheduling.",
      details:
        "End-to-end expertise across pressurized drip and micro-sprinkler layouts, emitter discharge uniformity (Christiansen's Cu), Hazen-Williams friction loss calculations, media and disc filtration sizing, Venturi fertigation injection, and crop evapotranspiration (ET0 × Kc) scheduling.",
      iconName: "droplets",
      tags: [
        "Drip Irrigation",
        "Hydraulics",
        "Fertigation",
        "Scheduling",
        "ET-based Irrigation",
        "Smart Irrigation",
        "Water Efficiency",
      ],
    },
    {
      id: "soil-water-conservation",
      number: "02",
      title: "Soil & Water Conservation",
      summary:
        "Soil science fundamentals, soil health and sustainable land management.",
      details:
        "Strong grounding in soil physical and chemical properties, erosion prevention, percolation rates, watershed management, and regenerative land conservation principles.",
      iconName: "mountain",
      tags: ["Soil Science", "Watershed", "Land Health", "Sustainability"],
    },
    {
      id: "farm-machinery-mechanization",
      number: "03",
      title: "Farm Machinery & Mechanization",
      summary:
        "Knowledge of agricultural machinery, equipment and farm mechanization.",
      details:
        "Functional mastery of power tillers, tractors, seed drills, harvesting mechanisms, post-harvest equipment calibration, and preventive maintenance protocols.",
      iconName: "cog",
      tags: ["Mechanization", "Tractors & Implements", "Field Equipment", "Automation"],
    },
    {
      id: "precision-smart-farming",
      number: "04",
      title: "Precision & Smart Farming",
      summary:
        "Applying technology, data and automation to modern farming systems.",
      details:
        "Integrating sensor telemetry, GPS spatial mapping, soil conductivity sensors, and automated greenhouse climate controllers to drive precision crop yields.",
      iconName: "cpu",
      tags: ["IoT Sensors", "Precision Agri", "Greenhouse Control", "Telemetry"],
    },
    {
      id: "agri-tech-web-platforms",
      number: "05",
      title: "Agri-Tech Web Platforms",
      summary:
        "Dashboards, portals and web tools for agricultural businesses and farmers.",
      details:
        "Architecting responsive, high-uptime web applications, farmer onboarding flows, inventory tracking, and operational control centers tailored for agri-businesses.",
      iconName: "layout",
      tags: ["Next.js", "Web Portals", "Farmer Dashboards", "Responsive UI"],
    },
    {
      id: "data-reporting",
      number: "06",
      title: "Data & Reporting",
      summary:
        "Admin dashboards and analytics to turn farm and field data into decisions.",
      details:
        "Transforming raw telemetry streams and soil analytics into actionable KPI dashboards, exportable reporting matrices, and automated decision-support graphs.",
      iconName: "bar-chart-3",
      tags: ["Analytics", "Data Visualization", "Telemetry Logs", "Admin Panels"],
    },
  ],
};
