export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "demolition",
    title: "Demolition",
    shortTitle: "Demolition",
    image: "/photos/service-demolition.jpg",
    imageAlt: "Excavator demolishing a building structure",
    summary:
      "Structure, garage, shed, concrete, and selective demolition with complete debris removal.",
    description:
      "Apex handles residential and commercial demolition from single structures to full property clearing. Every job includes a clear scope, safe teardown, and complete debris haul-off so the site is left ready for what's next.",
    bullets: [
      "Full residential structure demolition",
      "Commercial and outbuilding demolition",
      "Garage, shed, and barn removal",
      "Concrete, driveway, and slab removal",
      "Selective / interior demolition",
      "Complete debris removal and haul-off",
    ],
    faqs: [
      {
        q: "Do I need permits for demolition?",
        a: "Most demolition projects require a local permit. We can walk you through what your project needs before work begins.",
      },
      {
        q: "What happens to the debris?",
        a: "We haul away and dispose of all debris as part of the project so the site is left clean and ready.",
      },
      {
        q: "Can you demolish part of a structure?",
        a: "Yes. We handle selective and interior demolition in addition to full teardowns.",
      },
    ],
  },
  {
    slug: "excavation",
    title: "Excavation",
    shortTitle: "Excavation",
    image: "/photos/service-excavation.jpg",
    imageAlt: "Utility trench excavation with pipe installation",
    summary:
      "Precise excavation for foundations, utilities, drainage, and site construction.",
    description:
      "From new foundations to drainage and utility trenching, Apex brings the equipment and experience to move earth accurately and safely on residential and commercial sites.",
    bullets: [
      "Foundation and basement excavation",
      "Utility and drainage trenching",
      "Septic system excavation",
      "Pond digging and clearing",
      "Grading and backfill",
      "Excess soil hauling and removal",
    ],
    faqs: [
      {
        q: "What information is needed for an estimate?",
        a: "The project address, dimensions, intended use, target depth, access information, and any plans or photos you have available.",
      },
      {
        q: "Can you coordinate with another contractor?",
        a: "Yes, we regularly coordinate scheduling and access with builders, plumbers, electricians, and utility contractors.",
      },
      {
        q: "Do you provide grading after excavation?",
        a: "Grading and backfill can be included based on the scope of your project.",
      },
      {
        q: "Can you haul away excess soil?",
        a: "Yes, excess soil and unsuitable material can be quoted for removal as part of the job.",
      },
    ],
  },
  {
    slug: "land-clearing-sitework",
    title: "Land Clearing & Sitework",
    shortTitle: "Land Clearing",
    image: "/photos/service-land-clearing.jpg",
    imageAlt: "Bulldozer clearing a wooded lot",
    summary:
      "Brush, overgrowth, and site obstacles cleared and graded to prepare your property.",
    description:
      "Whether you're prepping a lot for construction or reclaiming overgrown property, Apex clears, grades, and levels the site so it's ready for building, landscaping, or drainage work.",
    bullets: [
      "Brush and overgrowth clearing",
      "Tree and stump removal",
      "Grading and leveling",
      "Driveway and pad preparation",
      "Drainage-ready site shaping",
      "Debris removal and disposal",
    ],
    faqs: [
      {
        q: "How much land can you clear?",
        a: "We take on projects ranging from a single overgrown lot to multi-acre sites. Send us the size and we'll scope it.",
      },
      {
        q: "Do you remove stumps and roots?",
        a: "Yes, stump and root removal is available as part of a clearing project.",
      },
      {
        q: "Can the site be graded after clearing?",
        a: "Yes, grading and leveling is a natural next step we can include in the same project.",
      },
    ],
  },
  {
    slug: "hauling-material-delivery",
    title: "Hauling & Material Delivery",
    shortTitle: "Hauling",
    image: "/photos/service-hauling.jpg",
    imageAlt: "Apex dump truck ready for material delivery",
    summary:
      "Mulch, sand, topsoil, and gravel delivery, plus debris removal and job-site cleanup.",
    description:
      "Apex delivers the materials your project needs and hauls away what it doesn't. From bulk topsoil to job-site debris, we keep material moving so your project stays on schedule.",
    bullets: [
      "Topsoil, sand, and gravel delivery",
      "Mulch delivery",
      "Construction debris hauling",
      "Job-site cleanup",
      "Dirt and fill removal",
      "Flexible scheduling for delivery or pickup",
    ],
    faqs: [
      {
        q: "What do you need to know for a delivery?",
        a: "Material type, estimated quantity, delivery address, preferred date, dump location, access restrictions, overhead wires, and driveway conditions.",
      },
      {
        q: "What do you need to know for a removal?",
        a: "Debris type, estimated volume, project address, loading access, photos, preferred timing, and any known disposal concerns.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
