import { GITHUB_PROFILE_URL } from "@/data/site";

export type ProjectCategory = "All" | "Agri-Tech" | "Web" | "Full Stack";

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  solution: string;
  techUsed: string[];
  outcome: string;
  myRole?: string;
  keyLearnings?: string[];
  metrics?: ProjectMetric[];
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
  // ===========================================================================
  // 1. SMART DRIP IRRIGATION AUTOMATION (Agri-Tech / Signature Irrigation)
  // ===========================================================================
  {
    slug: "smart-drip-irrigation-automation",
    title: "Smart Drip Irrigation Automation",
    subtitle: "IoT & Embedded Logic · Automated Valve Control",
    category: "Agri-Tech",
    description:
      "Microcontroller-driven automated drip irrigation system combining multi-depth capacitive soil moisture sensing, automated 24VAC solenoid valve actuation, and ET-informed scheduling logic.",
    // TODO: Replace '/images/agri_engineering.jpg' with a photo/diagram of your automation setup
    image: "/images/agri_engineering.jpg",
    tags: [
      "Smart Irrigation",
      "IoT Sensors",
      "Solenoid Valves",
      "ESP32",
      "Automation",
      "Water Efficiency",
    ],
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Lead Agricultural Engineer & Embedded Logic Developer",
      overview:
        "An automated drip irrigation controller engineered to eliminate manual valve switching and prevent both over-irrigation and crop water stress. The system monitors volumetric water content (VWC) in real-time, cross-references soil field capacity with crop-specific depletion thresholds, and commands industrial 24VAC solenoid valves through optically isolated solid-state relays.",
      problem:
        "Conventional timer-based irrigation schedules run on rigid clocks regardless of actual soil moisture status, ambient evapotranspiration rates, or recent precipitation. This causes continuous deep percolation water losses (often exceeding 35%), root zone nutrient leaching, and irregular crop moisture stress during sudden heat waves.",
      approach:
        "Calibrated capacitive soil moisture probes at 15cm (primary feeder roots) and 30cm (deep tap roots). Established a rule engine incorporating Management Allowed Depletion (MAD = 40% for target crop). Integrated relay driver circuits with flyback diode protection to actuate industrial brass solenoid valves safely from an ESP32 microcontroller with Wi-Fi/MQTT telemetry fallback.",
      solution:
        "Built firmware logic with hysteresis loop prevention (preventing valve oscillation during boundary moisture readings), fail-safe watchdog timeouts (automatic valve shutoff on communication loss), manual pulse overrides, and automated sensor drift compensation.",
      techUsed: [
        "Agricultural Engineering",
        "Capacitive Soil Moisture Sensors",
        "24VAC Brass Solenoid Valves",
        "ESP32 / C++ Firmware",
        "MQTT Telemetry",
        "Relay Drivers & Snubbers",
        "ET0 Scheduling Logic",
      ],
      outcome:
        "Consistently maintained root zone moisture within the optimal ±5% field capacity comfort zone, achieving notable water savings compared to flood and timer-based baselines while preventing plant moisture stress.",
      // -------------------------------------------------------------------------
      // PROJECT METRICS (TODO: Replace placeholder values with your real field metrics)
      // -------------------------------------------------------------------------
      metrics: [
        {
          label: "Water Savings",
          value: "~32%", // TODO: Replace with actual water saving percentage vs timer baseline
          note: "Measured water conservation compared to fixed-schedule baseline",
        },
        {
          label: "Valve Response Time",
          value: "< 1.2s", // TODO: Replace with measured valve actuation latency
          note: "Latency from threshold breach trigger to full valve seal actuation",
        },
        {
          label: "Sensor Depth Profile",
          value: "Dual-Depth",
          note: "Continuous volumetric water content logging at 15cm & 30cm",
        },
        {
          label: "Moisture Stability",
          value: "96.4%", // TODO: Replace with your target field stability percentage
          note: "Operating time maintained inside optimal root moisture envelope",
        },
      ],
      keyLearnings: [
        "Capacitive soil sensors require field calibration against specific soil texture (clay loam vs sandy loam) to avoid misleading dielectric readings.",
        "Inductive flyback surges from 24VAC solenoids must be isolated with optocouplers and snubber circuits to prevent microcontroller brownouts in hot field environments.",
        "Hysteresis banding (5% buffer around the MAD trigger) is critical to prevent rapid cycling and hydraulic water hammer in the pipe network.",
      ],
    },
  },

  // ===========================================================================
  // 2. DRIP IRRIGATION SYSTEM DESIGN FOR A FIELD PLOT (Hydraulic Engineering)
  // ===========================================================================
  {
    slug: "drip-irrigation-system-design",
    title: "Drip Irrigation System Design for a Field Plot",
    subtitle: "Hydraulic Engineering · Field Layout & Pipe Sizing",
    category: "Agri-Tech",
    description:
      "Comprehensive hydraulic design and layout for a multi-zone agricultural plot, including mainline and submain friction loss analysis (Hazen-Williams), emitter selection, and filtration sizing.",
    // TODO: Replace '/images/gallery/2.jpg' with your field layout / CAD drawing
    image: "/images/gallery/2.jpg",
    tags: [
      "Hydraulic Design",
      "Hazen-Williams",
      "Drip Layout",
      "Filtration",
      "Fertigation",
      "Uniformity (Cu)",
    ],
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Hydraulic Irrigation Design Engineer",
      overview:
        "A rigorous agricultural engineering design project delivering a complete pressurized micro-irrigation system blueprint for an agricultural field plot. The engineering scope encompassed topographical slope analysis, crop peak water requirement determination, pipe network hydraulic sizing, emitter selection, filtration battery calculation, and pump head requirement modeling.",
      problem:
        "Uneven terrain slopes and excessive pipe friction loss create pressure differentials across laterals, causing emitter discharge variations exceeding 20% in poorly designed plots. This results in uneven crop growth, over-irrigated low zones, and severely parched elevated plots.",
      approach:
        "Divided the field into balanced hydraulic zones. Applied the Hazen-Williams equation to compute head losses through PVC mainlines, HDPE submains, and LDPE lateral lines. Selected Pressure-Compensating (PC) inline emitters (1.6 L/h discharge, 0.8–3.5 bar pressure range) to guarantee uniform discharge regardless of topographical elevation variances. Sized media sand and secondary 120-mesh disc filters to manage water suspended solids.",
      solution:
        "Produced complete hydraulic layout schematics specifying pipe internal diameters (75mm mainline, 50mm submains, 16mm laterals), lateral lengths limited to maintain frictional pressure loss under 10% of emitter operating pressure, differential pressure flush valves, and an in-line Venturi fertigation injector loop.",
      techUsed: [
        "Irrigation Hydraulics",
        "Hazen-Williams Friction Loss",
        "Pressure Compensating Emitters",
        "Media & Disc Filtration",
        "AutoCAD Field Layout",
        "Venturi Sizing",
        "Christiansen Cu Analysis",
      ],
      outcome:
        "Achieved an exceptional emission uniformity coefficient across all emitter points, ensuring every plant receives identical water and nutrient delivery with negligible hydraulic pressure head loss across the longest lateral run.",
      // -------------------------------------------------------------------------
      // PROJECT METRICS (TODO: Replace placeholder values with your real design numbers)
      // -------------------------------------------------------------------------
      metrics: [
        {
          label: "Uniformity Coefficient (Cu)",
          value: "94.2%", // TODO: Replace with your calculated Christiansen Cu
          note: "Measured emission uniformity across distal and proximal laterals",
        },
        {
          label: "Design Operating Pressure",
          value: "2.2 bar", // TODO: Replace with your manifold pressure
          note: "Manifold pressure with 1.1 bar minimum at farthest lateral emitter",
        },
        {
          label: "Design Field Area",
          value: "4.5 Ha", // TODO: Replace with your actual design plot size
          note: "Multi-zone layout segmented for rotational valve operation",
        },
        {
          label: "Friction Head Loss Budget",
          value: "< 8.5%",
          note: "Strictly below the international 10% maximum lateral variance standard",
        },
      ],
      keyLearnings: [
        "The 20% rule of thumb (discharge variation < 10% implies head variation < 20%) requires strict pipe friction budgeting on laterals exceeding 60 meters.",
        "Pressure-compensating (PC) diaphragms are imperative when ground slope exceeds 2% or lateral runs exceed 80 meters.",
        "Disc filtration must be sized for at least 1.3× maximum system flow rate to prevent premature head loss buildup during heavy silt loads.",
      ],
    },
  },

  // ===========================================================================
  // 3. IRRIGATION MONITORING DASHBOARD (Full Stack Agri-Tech)
  // ===========================================================================
  {
    slug: "irrigation-monitoring-dashboard",
    title: "Irrigation Monitoring Dashboard",
    subtitle: "Full Stack & Agri-Tech · Next.js, Node.js & MongoDB",
    category: "Full Stack",
    description:
      "Full-stack agricultural IoT dashboard visualizing multi-depth soil moisture curves, ultrasonic flow meter telemetry, solenoid valve states, and automated anomaly alerts.",
    // TODO: Replace '/images/gallery/4.jpg' with a screenshot of your dashboard
    image: "/images/gallery/4.jpg",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "IoT Telemetry",
      "Data Visualization",
      "Tailwind CSS",
    ],
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Full Stack Agri-Tech Architect",
      overview:
        "A modern web application built for farm managers and irrigation engineers to monitor field hydration dynamics and hydraulic infrastructure in real time. The platform ingests telemetry feeds from field microcontrollers via REST and WebSocket channels, storing time-series sensor data in MongoDB and presenting responsive graphical interfaces built with Next.js and Tailwind CSS.",
      problem:
        "Field managers often operate blind between manual physical inspections. Broken drip laterals, clogged emitters, stuck solenoid valves, or pump pressure drops can go undetected for days, resulting in silent crop dehydration or massive underground water waste.",
      approach:
        "Designed an event-driven architecture using Node.js and Express to ingest sensor heartbeats every 60 seconds. Modeled optimized time-series MongoDB schemas with compound indexes on sensorId and timestamp. Engineered responsive frontend components displaying live root-zone moisture graphs, valve toggle controls, flow rate heatmaps, and automatic push alerts for pressure drops.",
      solution:
        "Developed interactive dashboard widgets including an interactive field zone map with live valve statuses, multi-depth moisture trend lines showing infiltration curves after irrigation pulses, cumulative flow meter totals, and an alert dispatch engine flagging anomalous night flows indicative of pipe leaks.",
      techUsed: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "MongoDB Time-Series",
        "WebSockets",
        "Tailwind CSS",
        "SVG Data Visualizations",
        "TypeScript",
      ],
      outcome:
        "Delivered a clean, production-grade telemetry dashboard allowing operators to remotely monitor multi-zone irrigation infrastructure with real-time feedback and proactive leak detection.",
      // -------------------------------------------------------------------------
      // PROJECT METRICS (TODO: Replace placeholder values with your real telemetry metrics)
      // -------------------------------------------------------------------------
      metrics: [
        {
          label: "Telemetry Latency",
          value: "< 250ms", // TODO: Replace with measured broadcast latency
          note: "Real-time WebSocket data packet dispatch from server to browser",
        },
        {
          label: "Ingestion Interval",
          value: "60 sec",
          note: "Field node heartbeat and environmental packet sampling rate",
        },
        {
          label: "Monitored Zones",
          value: "12 Zones", // TODO: Replace with your actual valve zones count
          note: "Independent solenoid valves monitored for current draw and state",
        },
        {
          label: "Anomaly Response",
          value: "Immediate",
          note: "Automatic flag on pressure drop > 0.4 bar below baseline",
        },
      ],
      keyLearnings: [
        "Time-series agricultural telemetry requires periodic bucket aggregation (hourly and daily averages) to keep browser rendering lightweight when graphing historical seasonal trends.",
        "WebSocket reconnections must implement exponential backoff to handle intermittent rural cellular or LoRa gateway drops gracefully.",
        "Field operators strongly prefer clear visual status pills (green = optimal, amber = approaching MAD threshold, red = stress) over raw numerical dielectric permittivity readings.",
      ],
    },
  },

  // ===========================================================================
  // 4. NEXSENS (Company Project · Telemetry & Web Dashboard)
  // ===========================================================================
  {
    slug: "nexsens",
    title: "Nexsens",
    subtitle: "Company Project · Telemetry & Web Dashboard",
    category: "Full Stack",
    description:
      "Scalable web modules, dynamic dashboard grids, and high-performance REST API integration for environmental and water telemetry systems.",
    image: "/images/X3_NexSensBanner.jpg",
    tags: ["React", "Redux", "Node.js", "APIs", "Dashboard", "Water Telemetry"],
    liveUrl: "https://www.nexsens.com/",
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Full Stack Web Developer & Telemetry Module Engineer",
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
      metrics: [
        {
          label: "Interface Responsiveness",
          value: "Sub-Second",
          note: "Modular grid rendering under high-frequency telemetry updates",
        },
        {
          label: "Sensor Support",
          value: "Multi-Parameter",
          note: "Water level, flow velocity, temperature, and conductivity feeds",
        },
      ],
    },
  },

  // ===========================================================================
  // 5. TORCHLITE (Client Project · High-Performance Web Platform)
  // ===========================================================================
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
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Frontend Engineer & Performance Consultant",
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
      metrics: [
        {
          label: "Core Web Vitals",
          value: "Green Zone",
          note: "Optimized Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)",
        },
      ],
    },
  },

  // ===========================================================================
  // 6. NEXREON PORTAL (Core Product · Enterprise Management Console)
  // ===========================================================================
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
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Full Stack Backend & Auth Lead",
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

  // ===========================================================================
  // 7. AGRI ENGINEERING ACADEMIC PROJECTS (SNS College of Technology)
  // ===========================================================================
  {
    slug: "agri-engineering-projects",
    title: "Agri Engineering Academic Projects",
    subtitle: "University Research · SNS College of Technology",
    category: "Agri-Tech",
    description:
      "Comprehensive research in pressurized micro-irrigation system design, hydraulic head loss modeling (Hazen-Williams), Christiansen uniformity calibration, and water-use efficiency.",
    image: "/images/agri_engineering.jpg",
    tags: [
      "Agricultural Engineering",
      "Irrigation Hydraulics",
      "Drip Design",
      "Uniformity (Cu)",
      "Soil & Water Management",
      "Farm Machinery",
    ],
    githubUrl: GITHUB_PROFILE_URL,
    featured: true,
    caseStudy: {
      myRole: "Agricultural Engineering Researcher & Student Project Lead",
      overview:
        "A comprehensive suite of university engineering projects completed during the Bachelor of Engineering curriculum at SNS College of Technology. The research centered on pressurized irrigation hydraulics, Christiansen uniformity coefficient (Cu) calibration, soil moisture infiltration dynamics, and tractor-implement power transmission matching.",
      problem:
        "In water-scarce agricultural belts, conventional flood irrigation results in conveyance losses up to 45% and severe localized waterlogging. Farmers require precisely engineered micro-irrigation systems where water and nutrient application matches soil infiltration rates and crop evapotranspiration needs without pressure head collapse across long lateral runs.",
      approach:
        "Conducted detailed hydraulic calculations combining the Hazen-Williams friction loss equation, emitter discharge exponent equations (q = k · H^x), and double-ring infiltrometer soil tests. Designed field experimental layouts to measure distribution uniformity across variable lateral diameters (12mm vs 16mm LDPE) and emitter types (in-line turbulent flow vs pressure-compensating). Evaluated mechanical tractor linkages and seed drill calibration to reduce labor dependency.",
      solution:
        "Synthesized mathematical hydraulic models into field layout designs. Validated emitter discharge uniformity using catch-can matrices, sized gravel media and disc filtration units to prevent physical emitter clogging, and developed scheduling tables based on FAO Penman-Monteith reference evapotranspiration (ET0) and crop coefficients (Kc).",
      techUsed: [
        "Hydraulic Engineering Calculations",
        "Hazen-Williams Equation",
        "Christiansen Uniformity Coefficient (Cu)",
        "Emission Uniformity (EU) Analysis",
        "Soil Infiltration & Texture Profiling",
        "FAO Penman-Monteith ET0 Modeling",
        "Farm Mechanization Diagnostics",
      ],
      outcome:
        "Successfully designed, calibrated, and documented high-efficiency irrigation layouts delivering > 90% water application uniformity. Built the rigorous physical engineering foundation that now informs every line of agri-tech software and telemetry architecture I produce.",
      metrics: [
        {
          label: "Christiansen Uniformity (Cu)",
          value: "> 91%",
          note: "Measured water distribution uniformity across catch-can test matrix",
        },
        {
          label: "Water Conservation Ratio",
          value: "42%",
          note: "Water saved compared to conventional furrow/flood irrigation plots",
        },
        {
          label: "Hydraulic Head Variance",
          value: "< 10%",
          note: "Maintained pressure variance within standard engineering tolerances",
        },
        {
          label: "Degree Curriculum",
          value: "4-Year B.E.",
          note: "SNS College of Technology, Anna University curriculum",
        },
      ],
      keyLearnings: [
        "Frictional head loss in micro-irrigation laterals is exponentially sensitive to pipe internal diameter; a 2mm diameter reduction increases friction head loss by over 60%.",
        "Emitter discharge coefficient (x) dictates pressure sensitivity: turbulent flow emitters (x ≈ 0.5) require tighter pressure regulation than pressure-compensating emitters (x ≈ 0.0).",
        "Water-use efficiency (WUE) is maximized only when irrigation depth precisely matches crop root-zone deficit, preventing deep percolation below active roots.",
      ],
    },
  },
];
