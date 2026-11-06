/**
 * GALLERY CONFIGURATION
 *
 * HOW TO REPLACE PHOTOS:
 * 1. Place your own high-resolution JPEG, PNG, or WebP photos inside `/public/images/gallery/`
 * 2. Update the `src`, `title`, `caption`, and `tag` fields below to reflect your actual photos.
 * 3. Graceful fallback is enabled, so even if an image file is missing or fails to load,
 *    a thematic gradient placeholder renders without breaking the layout.
 */

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  tag: string;
  location?: string;
  aspect: "landscape" | "portrait" | "square";
}

export interface GallerySectionData {
  sectionTitle: string;
  sectionSubtitle: string;
  headline: string;
  items: GalleryItem[];
}

export const galleryData: GallerySectionData = {
  sectionTitle: "Field & Irrigation Gallery",
  sectionSubtitle: "Visual Documentation From Engineering Fieldwork, Hydraulics & Smart Agri-Tech",
  headline: "Field Observations & Systems in Action",
  items: [
    // -------------------------------------------------------------------------
    // Core Irrigation Infrastructure Items (TODO: Add your real field photos)
    // -------------------------------------------------------------------------
    {
      id: "gal-drip-lines",
      // TODO: Replace '/images/gallery/2.jpg' with your real drip line photo (e.g. '/public/images/gallery/drip-lines.jpg')
      src: "/images/gallery/2.jpg",
      alt: "Close-up of pressurized in-line drip lateral with pressure compensating emitters emitting uniform water droplets",
      title: "Drip Laterals & PC Emitters",
      caption:
        "High-efficiency inline drip lateral system with pressure compensating (PC) emitters operating at 1.2 bar to maintain uniform discharge across sloped terrain.",
      tag: "Drip Irrigation",
      location: "Agricultural Field Plot",
      aspect: "landscape",
    },
    {
      id: "gal-sprinkler-field",
      // TODO: Replace '/images/gallery/1.jpg' with your real sprinkler field photo
      src: "/images/gallery/1.jpg",
      alt: "Overhead micro-sprinkler irrigation system creating uniform droplet distribution pattern across orchard crop",
      title: "Micro-Sprinkler Coverage & Uniformity",
      caption:
        "Calibrated micro-sprinkler layout evaluated for Christiansen's Uniformity Coefficient (Cu > 88%) with overlapping 360-degree wetting radiuses.",
      tag: "Sprinkler Systems",
      location: "Field Research Station",
      aspect: "portrait",
    },
    {
      id: "gal-pump-house",
      // TODO: Replace '/images/gallery/3.jpg' with your real pump house photo
      src: "/images/gallery/3.jpg",
      alt: "Centrifugal irrigation pump unit with suction line, foot valve, pressure gauge manifold, and electrical starter panel",
      title: "Irrigation Pump House & Manifold",
      caption:
        "Centrifugal irrigation pumping station fitted with analog pressure gauges, check valves, and air-release valves calibrated for Total Dynamic Head (TDH) requirements.",
      tag: "Hydraulics & Pumping",
      location: "Central Pump Station",
      aspect: "square",
    },
    {
      id: "gal-filtration-unit",
      // TODO: Replace '/images/gallery/4.jpg' with your real filtration unit photo
      src: "/images/gallery/4.jpg",
      alt: "Dual media sand and disc filtration battery with differential pressure gauges and backwash manifold",
      title: "Disc & Media Filtration Battery",
      caption:
        "Primary media sand and secondary 120-mesh disc filtration battery preventing physical clogging of 1.6 L/h drip emitters with manual differential-pressure backwash flushing.",
      tag: "Filtration Systems",
      location: "Headwork Control Hub",
      aspect: "landscape",
    },
    {
      id: "gal-soil-sensor",
      // TODO: Replace '/images/gallery/8.jpg' with your real soil moisture sensor photo
      src: "/images/gallery/8.jpg",
      alt: "Multi-depth capacitive soil moisture probe installed adjacent to drip emitter root zone with wireless telemetry transmitter",
      title: "Capacitive Soil Moisture Sensor Node",
      caption:
        "Wireless IoT sensor probe monitoring volumetric water content (VWC) at 15cm and 30cm root depths to detect Management Allowed Depletion (MAD) thresholds.",
      tag: "Smart Irrigation",
      location: "Sensor Node 04",
      aspect: "portrait",
    },
    {
      id: "gal-fertigation-unit",
      // TODO: Replace '/images/gallery/5.jpg' with your real fertigation setup photo
      src: "/images/gallery/5.jpg",
      alt: "Venturi chemical injector assembly connected in bypass to irrigation mainline for precise soluble fertilizer dosing",
      title: "Venturi Fertigation Injection Unit",
      caption:
        "Bypass Venturi fertilizer injector and rotameter calibrated for precise continuous dosing of soluble NPK nutrients into the pressurized drip stream.",
      tag: "Fertigation",
      location: "Nutrient Dosing Station",
      aspect: "landscape",
    },

    // -------------------------------------------------------------------------
    // Agri-Tech & Software Integration Items
    // -------------------------------------------------------------------------
    {
      id: "gal-field-controller",
      // TODO: Replace '/images/gallery/3.jpg' with your real automation controller photo
      src: "/images/gallery/3.jpg",
      alt: "Solar-powered automated solenoid valve controller in protective IP66 enclosure in field",
      title: "Field Controller Automation",
      caption:
        "Solar-powered microcontroller station actuating 24VAC latching solenoid valves according to real-time capacitive soil moisture thresholds and schedule rules.",
      tag: "IoT & Automation",
      location: "Field Installation",
      aspect: "landscape",
    },
    {
      id: "gal-telemetry-dashboard",
      // TODO: Replace '/images/gallery/4.jpg' with your real telemetry dashboard screenshot
      src: "/images/gallery/4.jpg",
      alt: "Nexsens environmental and water quality telemetry dashboard screen",
      title: "Water Telemetry Dashboard",
      caption:
        "Real-time sensor telemetry visualization tracking pressure heads, volumetric water content, dissolved oxygen, and flow rates with sub-second WebSocket updates.",
      tag: "Web Platforms",
      location: "Operations Console",
      aspect: "landscape",
    },
    {
      id: "gal-vertical-hydroponics",
      // TODO: Replace '/images/gallery/7.jpg' with your real CEA / greenhouse photo
      src: "/images/gallery/7.jpg",
      alt: "Controlled environment vertical hydroponics greenhouse with LED lighting and drip fertigation recirculating loop",
      title: "Controlled Environment Agriculture",
      caption:
        "Modern multi-tier vertical farming facility featuring automated closed-loop nutrient dosing, climate chambers, and high-efficiency recirculating drip arrays.",
      tag: "Greenhouse Tech",
      location: "Controlled Environment Lab",
      aspect: "portrait",
    },
    {
      id: "gal-cloud-console",
      // TODO: Replace '/images/gallery/5.jpg' with your real portal screenshot
      src: "/images/gallery/5.jpg",
      alt: "Role-based administrative operations portal engineered with Node.js, MongoDB, and Next.js",
      title: "Enterprise Portal Console",
      caption:
        "Role-based administrative operations portal engineered with Node.js, MongoDB, and Next.js for high-security platform and telemetry device management.",
      tag: "Full Stack",
      location: "Production Platform",
      aspect: "square",
    },
  ],
};
