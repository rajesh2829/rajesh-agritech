export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  readingTime: string;
  publishedAt: string;
  category: "Hydraulics" | "Agronomy" | "Smart Agri-Tech";
  tags: string[];
  sections: ArticleSection[];
}

export interface InsightsData {
  sectionTitle: string;
  sectionSubtitle: string;
  headline: string;
  articles: InsightArticle[];
}

export const insightsData: InsightsData = {
  sectionTitle: "Irrigation Insights",
  sectionSubtitle: "Technical Analysis, Agronomy Principles & Field Engineering Notes",
  headline: "Engineering Perspectives on Water & Agriculture",
  articles: [
    {
      slug: "drip-vs-sprinkler-irrigation",
      title: "Drip vs Sprinkler: Choosing the Right System for Arid & Semi-Arid Climates",
      subtitle: "A Comparative Hydraulic, Agronomic, and Economic Analysis",
      category: "Hydraulics",
      readingTime: "4 min read",
      publishedAt: "October 2026",
      tags: ["Drip Irrigation", "Sprinklers", "Water Conservation", "Uniformity (Cu)"],
      summary:
        "A rigorous engineering comparison between pressurized micro-drip and overhead sprinkler irrigation systems, evaluating distribution uniformity, evaporative losses, energy footprints, and salinity management.",
      sections: [
        {
          heading: "The Hydraulic & Environmental Dilemma",
          body: [
            "In arid and semi-arid regions such as the United Arab Emirates and dryland agricultural basins, water availability and high vapor pressure deficits (VPD) govern every farm design decision. Choosing between localized micro-drip irrigation and pressurized sprinkler systems is not merely a preference—it is a hydraulic and thermodynamics trade-off between evaporative losses, labor costs, soil infiltration rates, and water salinity.",
            "While both systems operate under pressurized pipe networks, their spatial distribution mechanisms and efficiency ratings diverge dramatically once ambient temperatures rise above 35°C.",
          ],
        },
        {
          heading: "Micro-Drip Systems: Maximum Water-Use Efficiency",
          body: [
            "Drip irrigation delivers water directly to the crop root zone at very low discharge rates (typically 1.2 to 4.0 liters per hour per emitter). Operating pressures range comfortably between 1.0 and 2.5 bar, significantly lower than high-pressure impact sprinklers.",
            "Because water is conveyed directly to the soil surface under localized wetting bulbs, aerodynamic canopy interception and wind-drift droplet evaporation are virtually eliminated. Field application efficiencies frequently reach 90% to 95%. Furthermore, drip allows precise concurrent chemical injection (fertigation), preventing fertilizer leaching below the root zone.",
            "However, drip systems require meticulous filtration (screen and disc batteries to 120-mesh or 130-micron thresholds) to prevent physical clogging from suspended sand and chemical precipitation of calcium carbonates.",
          ],
        },
        {
          heading: "Sprinkler Systems: Uniformity Across Dense Canopies",
          body: [
            "Sprinklers disperse pressurized water droplets through air nozzles in overlapping circular wetting patterns. They excel in closely spaced field crops (such as wheat, alfalfa, and pasture grasses) where laying thousands of meters of drip laterals is economically and mechanically impractical during harvest operations.",
            "Achieving high uniformity requires precise spacing layout: head-to-head spacing (50% to 60% of wetted diameter) is mandatory to attain a Christiansen Uniformity Coefficient (Cu) above 85%. Operating pressures range from 2.0 to 4.5 bar, necessitating larger pump impellers and higher electrical or diesel pumping energy.",
            "The major limitation in hot, windy climates is evaporative drift: droplet evaporation during flight and canopy interception loss can waste 20% to 35% of pumped water before it ever contacts the soil surface. Furthermore, foliar wetting with saline groundwater causes severe leaf burn on sensitive horticultural crops.",
          ],
        },
        {
          heading: "Engineering Decision Matrix",
          body: [
            "For row crops, orchard trees (such as Date Palms and Citrus), greenhouse vegetables, and areas dependent on saline groundwater or high-cost desalinated water, drip irrigation is undeniably the superior engineering choice.",
            "Sprinklers remain optimal for close-grown cereal crops, germination of delicate seedbeds, and microclimate temperature cooling in open fields. For sustainable desert agriculture, pressurized drip combined with pressure-compensating (PC) emitters represents the gold standard of water stewardship.",
          ],
        },
      ],
    },
    {
      slug: "how-to-calculate-crop-water-requirement",
      title: "How to Calculate Crop Water Requirement: Step-by-Step with ET0 and Kc",
      subtitle: "Applying the FAO-56 Penman-Monteith Methodology to Real Fields",
      category: "Agronomy",
      readingTime: "5 min read",
      publishedAt: "November 2026",
      tags: ["ET0", "Crop Coefficient (Kc)", "Irrigation Scheduling", "Water Budgeting"],
      summary:
        "A clear, practical engineering guide to calculating reference evapotranspiration, applying crop growth coefficients, accounting for irrigation efficiency, and translating volumetric results into valve runtime schedules.",
      sections: [
        {
          heading: "Understanding the Evapotranspiration Concept",
          body: [
            "At the core of scientific irrigation scheduling is crop evapotranspiration (ETc)—the combined volume of water lost through direct soil evaporation and plant leaf transpiration. Under-irrigating stresses the plant, inducing stomatal closure and yield penalties; over-irrigating saturates root zones, suffocates aeration, and leaches valuable nutrients into deep groundwater.",
            "The internationally accepted standard for quantifying crop water requirements is the two-step FAO-56 Penman-Monteith approach: calculate the reference evapotranspiration (ET0) of a hypothetical grass surface, then adjust for crop physiology using a crop coefficient (Kc).",
          ],
        },
        {
          heading: "Step 1: Determine Reference Evapotranspiration (ET0)",
          body: [
            "ET0 represents the evaporative demand of the atmosphere independently of crop type. It is calculated using solar radiation, air temperature, relative humidity, and wind speed at 2 meters elevation.",
            "In hot arid environments such as the Gulf region, peak summer ET0 frequently climbs to 7.0–9.5 mm/day, whereas mild winter days may hover around 2.5–4.0 mm/day. Weather stations or automated API telemetry provide daily ET0 figures.",
          ],
        },
        {
          heading: "Step 2: Apply the Crop Coefficient (Kc)",
          body: [
            "Different crops consume water at different rates depending on canopy size, leaf area index (LAI), and physiological stage. The actual crop evapotranspiration is computed as: ETc = ET0 × Kc.",
            "The crop coefficient changes over three distinct growth phases: Kc_ini (initial seedling / emergence, typically 0.3–0.5), Kc_mid (full vegetative canopy / flowering, typically 1.05–1.20), and Kc_end (late maturity / harvest dry-down, typically 0.6–0.8). For mature Date Palms in arid soil, Kc typically remains steady between 0.85 and 0.95 year-round.",
          ],
        },
        {
          heading: "Step 3: Account for Irrigation System Efficiency (Ea)",
          body: [
            "No irrigation system delivers 100% of pumped water into the plant root zone. Conveyance losses, wind drift, non-uniform emitter discharge, and minor deep percolation must be compensated for: Gross Irrigation Depth (GI) = Net ETc / (Ea / 100).",
            "For a well-designed drip system (Ea = 90% or 0.90), if net ETc is 6.3 mm/day, the gross depth required is: 6.3 / 0.90 = 7.0 mm/day.",
          ],
        },
        {
          heading: "Step 4: Convert Depth to Volume & Operating Time",
          body: [
            "To calculate daily field volume: Volume (m³/day) = Area (m²) × Gross Depth (mm) ÷ 1,000. For a 1-hectare plot (10,000 m²), a 7.0 mm application equals 70 m³/day (70,000 Liters/day).",
            "Finally, system runtime equals: Duration (hours) = Total Volume Needed (L) ÷ Total System Discharge (L/h). By standardizing this math into software algorithms, automated controllers can re-calculate valve pulse durations every morning before dawn.",
          ],
        },
      ],
    },
    {
      slug: "iot-reducing-water-waste-farms",
      title: "How IoT and Real-Time Telemetry Are Eliminating Water Waste in Modern Farms",
      subtitle: "Transitioning From Blind Clock Timers to Dynamic Soil Feedback",
      category: "Smart Agri-Tech",
      readingTime: "4 min read",
      publishedAt: "November 2026",
      tags: ["IoT Telemetry", "Soil Sensors", "Solenoid Valves", "Next.js Dashboard"],
      summary:
        "How capacitive soil moisture probes, automated solenoid actuators, and cloud-connected dashboards transform conventional agricultural operations from calendar guesses into closed-loop demand-driven hydration.",
      sections: [
        {
          heading: "The Flaw of Fixed Timer Irrigation",
          body: [
            "For decades, the standard approach to farm irrigation automation has been simple clock timers: run Zone A for 45 minutes at 6:00 AM, then Zone B for 30 minutes. While this eliminates manual valve opening, it operates completely detached from real biological and atmospheric conditions.",
            "If a sudden cloud cover reduces evapotranspiration by 40%, the timer still pumps full volume. If an underground PVC pipe fractures, thousands of liters escape silently without raising an alarm until the monthly water bill arrives.",
          ],
        },
        {
          heading: "The Sensor Layer: Multi-Depth Infiltration Tracking",
          body: [
            "Modern IoT smart irrigation places capacitive Frequency Domain Reflectometry (FDR) probes directly inside the crop root zone at strategic depths—for example, at 15cm (feeder root horizon) and 30cm (subsoil boundary).",
            "These sensors log volumetric water content (VWC %) continuously. When irrigation pulses begin, the top sensor detects infiltration within minutes. As water percolates downward, the lower sensor registers the wetting front. If the lower sensor shows excessive saturation, the system detects deep drainage losses and immediately flags the zone for schedule trimming.",
          ],
        },
        {
          heading: "Automated Solenoid Actuation & Hysteresis Control",
          body: [
            "Rather than irrigating on fixed hours, smart systems irrigate on demand when soil moisture approaches the Management Allowed Depletion (MAD) threshold. A solar-powered field microcontroller actuates 24VAC or 12VDC latching solenoid valves via solid-state relays.",
            "Firmware algorithms implement hysteresis buffers (e.g., irrigate when moisture drops below 22% VWC, stop when moisture reaches 28% VWC) to prevent erratic valve chatter. Digital flow meters cross-check expected flow against actual flow: an unexpected flow surge indicates pipe burst, while zero flow indicates pump failure or filter blockage.",
          ],
        },
        {
          heading: "Cloud Dashboards: Turning Data into Actionable Control",
          body: [
            "Connecting field telemetry to modern web dashboards built with Next.js, Node.js, and WebSockets empowers farm operators to monitor thousands of valves across multiple plots from a smartphone or control room.",
            "Real-time visual curves illustrate moisture depletion rates, system pressure heads, and electrical current draw on valves. By uniting physical agricultural engineering with modern cloud software, farms regularly achieve 25% to 40% water savings while simultaneously improving crop quality and yield consistency.",
          ],
        },
      ],
    },
  ],
};

