/**
 * GALLERY CONFIGURATION
 *
 * HOW TO REPLACE PHOTOS:
 * 1. Place your own high-resolution JPEG, PNG, or WebP photos inside `/public/images/gallery/`
 *    named `1.jpg`, `2.jpg`, `3.jpg`, ... up to `8.jpg` (or any custom names).
 * 2. Update the `src`, `title`, `caption`, and `tag` fields below to reflect your actual photos.
 * 3. An automatic graceful fallback component is in place, so even if an image file is missing
 *    or fails to load, a tasteful thematic gradient placeholder will render without breaking the layout.
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
  sectionTitle: "Field & Work Gallery",
  sectionSubtitle: "Visual Impressions From Engineering Research and Modern Agri-Tech",
  headline: "Field Observations & Systems in Action",
  items: [
    {
      id: "gal-1",
      src: "/images/gallery/1.jpg",
      alt: "Controlled environment vertical hydroponics greenhouse with LED lighting",
      title: "Vertical Hydroponic Systems",
      caption:
        "Modern multi-tier vertical farming facility featuring automated nutrient dosing, climate chambers, and high-efficiency LED grow arrays.",
      tag: "Greenhouse Tech",
      location: "Controlled Environment Lab",
      aspect: "landscape",
    },
    {
      id: "gal-2",
      src: "/images/gallery/2.jpg",
      alt: "Precision drip irrigation lines with wireless IoT telemetry node at sunset",
      title: "Drip Irrigation & IoT Telemetry",
      caption:
        "High-uniformity pressurized drip irrigation lines instrumented with solar-powered telemetry nodes for soil moisture monitoring.",
      tag: "Irrigation Systems",
      location: "Agricultural Research Field",
      aspect: "portrait",
    },
    {
      id: "gal-3",
      src: "/images/gallery/3.jpg",
      alt: "Automated solenoid valve controller and soil sensor station in field",
      title: "Field Controller Automation",
      caption:
        "Solar-powered field controller actuating automated solenoid valves according to real-time capacitive soil moisture thresholds.",
      tag: "Precision Agri",
      location: "Field Installation",
      aspect: "landscape",
    },
    {
      id: "gal-4",
      src: "/images/gallery/4.jpg",
      alt: "Environmental monitoring and water quality telemetry dashboard screen",
      title: "Water Quality & Telemetry Dashboard",
      caption:
        "Real-time sensor telemetry visualization tracking pH, electrical conductivity, dissolved oxygen, and irrigation distribution.",
      tag: "Web Platforms",
      location: "Operations Console",
      aspect: "landscape",
    },
    {
      id: "gal-5",
      src: "/images/gallery/5.jpg",
      alt: "Enterprise cloud management portal with user RBAC and event telemetry",
      title: "CloudCore Portal Console",
      caption:
        "Role-based administrative operations portal engineered with Node.js, MongoDB, and Next.js for high-security platform management.",
      tag: "Full Stack",
      location: "Production Platform",
      aspect: "landscape",
    },
    {
      id: "gal-6",
      src: "/images/gallery/6.jpg",
      alt: "Performance marketing and web analytics platform interface",
      title: "Modern Web Performance Engine",
      caption:
        "High-speed, SEO-optimized web platform engineered for sub-second page loads and seamless cross-device responsiveness.",
      tag: "Frontend Performance",
      location: "Client Delivery",
      aspect: "landscape",
    },
    {
      id: "gal-7",
      src: "/images/gallery/7.jpg",
      alt: "Automated greenhouse crop monitoring corridor",
      title: "Climate-Controlled Agriculture",
      caption:
        "Inspection corridor inside high-tech vertical agricultural setup displaying automated lighting and drainage recirculation.",
      tag: "Agronomy",
      location: "Greenhouse Facility",
      aspect: "portrait",
    },
    {
      id: "gal-8",
      src: "/images/gallery/8.jpg",
      alt: "Field sensor node monitoring soil moisture curves during sunset irrigation",
      title: "Field Sensor Telemetry Node",
      caption:
        "Wireless telemetry transceiver communicating multi-depth soil moisture data to cloud databases for precision irrigation scheduling.",
      tag: "IoT & Soil",
      location: "Field Plot",
      aspect: "square",
    },
  ],
};
