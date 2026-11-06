export interface IrrigationTopic {
  id: string;
  title: string;
  subtitle: string;
  category: "pressurized" | "gravity" | "engineering" | "automation";
  iconName: "droplets" | "sprinkler" | "waves" | "gauge" | "calendar-clock" | "leaf" | "cpu";
  description: string;
  keyConcepts: string[];
  tags: string[];
}

export interface IrrigationData {
  sectionTitle: string;
  sectionSubtitle: string;
  headline: string;
  introParagraph: string;
  topics: IrrigationTopic[];
}

export const irrigationData: IrrigationData = {
  sectionTitle: "Irrigation Engineering",
  sectionSubtitle: "Signature Domain · Precision Hydraulics & Water-Use Efficiency",
  headline: "Engineering Every Drop: From Hydraulic Math to Automated Valves",
  introParagraph:
    "Irrigation engineering is the backbone of sustainable food production, especially across arid environments like Dubai and water-stressed agricultural regions. By integrating hydraulic head loss calculations, filtration batteries, pressure-compensating emitters, and real-time evapotranspiration modeling, I design systems that deliver maximum crop yield per cubic meter of water while cutting conveyance and deep percolation losses.",
  topics: [
    {
      id: "drip-micro-irrigation",
      title: "Drip & Micro-Irrigation",
      subtitle: "Localized Root-Zone Pressurized Systems",
      category: "pressurized",
      iconName: "droplets",
      description:
        "Comprehensive hydraulic sizing of laterals, submains, and mainlines. Specialized in pressure-compensating (PC) and non-PC emitters, 120-mesh disc/screen filtration, sand media batteries, and Venturi chemical injectors for high-efficiency fertigation.",
      keyConcepts: [
        "In-line & on-line emitters (1.2 to 8.0 L/h)",
        "Hazen-Williams friction budgeting (head loss < 10%)",
        "Screen, disc & sand media filter backwash cycles",
        "Venturi injector bypass & fertilizer proportional dosing",
      ],
      tags: [
        "PC Emitters",
        "Disc Filtration",
        "Fertigation",
        "Lateral Hydraulics",
        "Venturi Injectors",
      ],
    },
    {
      id: "sprinkler-systems",
      title: "Sprinkler & Micro-Sprinkler Systems",
      subtitle: "Overhead & Canopy Water Distribution",
      category: "pressurized",
      iconName: "sprinkler",
      description:
        "Field layout optimization for solid set, portable, and overhead micro-sprinklers. Focus on nozzle sizing, Christiansen's Uniformity Coefficient (Cu > 85%), Distribution Uniformity (DU), and precipitation rate matching soil infiltration.",
      keyConcepts: [
        "Overlap spacing (50%–60% of wetting diameter)",
        "Christiansen Uniformity Coefficient (Cu) calculations",
        "Precipitation rate vs soil basic infiltration rate (Ib)",
        "Operating pressure regulation (1.5 to 3.5 bar)",
      ],
      tags: [
        "Christiansen Cu",
        "Precipitation Rate",
        "Micro-Sprinklers",
        "Nozzle Hydraulics",
      ],
    },
    {
      id: "surface-irrigation",
      title: "Surface Irrigation Methods",
      subtitle: "Gravity-Fed Hydraulic Management",
      category: "gravity",
      iconName: "waves",
      description:
        "Engineering furrow, border strip, and check basin irrigation systems. Calculating intake opportunity time, advance and recession trajectories, and cut-off ratios to minimize tailwater runoff and deep percolation losses.",
      keyConcepts: [
        "Furrow stream size & non-erosive velocity limits",
        "Border strip length-to-slope hydraulic calibration",
        "Intake opportunity time & infiltration cylinder analysis",
        "Tailwater recovery & drainage reuse",
      ],
      tags: ["Furrow Irrigation", "Border Strips", "Basin Sizing", "Advance Curves"],
    },
    {
      id: "hydraulics-pumping",
      title: "Hydraulics & Pump Engineering",
      subtitle: "Pressure Dynamics, Friction Loss & Pump Sizing",
      category: "engineering",
      iconName: "gauge",
      description:
        "Rigorous hydraulic modeling applying the Hazen-Williams and Darcy-Weisbach equations. Calculation of Total Dynamic Head (TDH), static lift, friction losses through fittings/valves, Net Positive Suction Head (NPSH), and pump curve matching.",
      keyConcepts: [
        "Hazen-Williams head loss equation (hf = 10.67·L·Q^1.852 / C^1.852·D^4.87)",
        "Total Dynamic Head (TDH) & Net Positive Suction Head (NPSH)",
        "Centrifugal & submersible pump operating point selection",
        "Water hammer mitigation & air-release valve sizing",
      ],
      tags: [
        "Hazen-Williams",
        "Friction Loss",
        "TDH & NPSH",
        "Pump Selection",
        "Surge Protection",
      ],
    },
    {
      id: "irrigation-scheduling",
      title: "Irrigation Scheduling & Agronomy",
      subtitle: "ET0, Crop Coefficients & Soil Depletion Limits",
      category: "engineering",
      iconName: "calendar-clock",
      description:
        "Scientific water budgeting based on FAO-56 Penman-Monteith reference evapotranspiration (ET0) multiplied by crop growth stage coefficients (Kc). Setting Management Allowed Depletion (MAD) thresholds to prevent water stress.",
      keyConcepts: [
        "Crop Evapotranspiration (ETc = ET0 × Kc)",
        "Management Allowed Depletion (MAD = 30%–50%)",
        "Soil field capacity, wilting point & readily available water (RAW)",
        "Net & gross irrigation requirement calculations",
      ],
      tags: [
        "FAO Penman-Monteith",
        "Crop Coefficient (Kc)",
        "MAD Thresholds",
        "Water Budgeting",
      ],
    },
    {
      id: "water-conservation",
      title: "Water Conservation & Auditing",
      subtitle: "Deficit Irrigation, Mulching & Auditing",
      category: "engineering",
      iconName: "leaf",
      description:
        "Implementing Regulated Deficit Irrigation (RDI) for water savings during non-critical crop stages. Designing organic and plastic mulching solutions to curb evaporation, rainwater harvesting catchments, and conducting systematic irrigation audits.",
      keyConcepts: [
        "Regulated Deficit Irrigation (RDI) & Partial Root Drying (PRD)",
        "Surface mulching evaporation reduction (20%–35%)",
        "Rainwater runoff harvesting catchments & storage",
        "Catch-can irrigation distribution audits & DU benchmarking",
      ],
      tags: [
        "Deficit Irrigation",
        "Mulching",
        "Water Audits",
        "Rainwater Harvesting",
      ],
    },
    {
      id: "smart-automation",
      title: "Smart Irrigation & IoT Automation",
      subtitle: "Sensors, Solenoid Actuation & Logic Controllers",
      category: "automation",
      iconName: "cpu",
      description:
        "Bridging mechanical pipe systems with digital automation. Installing multi-depth capacitive and TDR soil moisture sensors, 24VAC solenoid valves, ESP32 microcontrollers, and cloud rule engines for fully automated closed-loop scheduling.",
      keyConcepts: [
        "Capacitive & Frequency Domain (FDR) soil moisture probes",
        "24VAC latching solenoid valves with solid-state relay actuation",
        "Closed-loop feedback control with threshold hysteresis",
        "Cellular / LoRa / MQTT telemetry backhaul to cloud databases",
      ],
      tags: [
        "Soil Sensors",
        "Solenoid Valves",
        "IoT Controllers",
        "Automated Actuation",
        "MQTT Telemetry",
      ],
    },
  ],
};

