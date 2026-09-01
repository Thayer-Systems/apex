export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "5-signs-you-need-a-demolition-contractor",
    title: "5 Signs It's Time to Call a Professional Demolition Contractor",
    excerpt:
      "From storm damage to an outbuilding that's outlived its usefulness, here's how to tell when a project needs a professional demolition crew instead of a weekend DIY job.",
    date: "2026-09-01",
    image: "/photos/service-demolition.jpg",
    imageAlt: "Excavator demolishing a building structure",
    body: [
      {
        paragraphs: [
          "Not every teardown needs a professional crew — but plenty of projects that look like weekend jobs turn into safety hazards, code violations, or expensive cleanup problems once they're underway. If you're weighing whether to call in help, here are five signs it's worth it.",
        ],
      },
      {
        heading: "1. There's structural damage or a safety hazard",
        paragraphs: [
          "Fire damage, storm damage, foundation cracking, or a structure that's simply been neglected for years all come with real risk: unstable framing, exposed electrical, and materials that can fail without warning. A professional crew knows how to assess and take a structure down safely, in a controlled sequence, instead of guessing.",
        ],
      },
      {
        heading: "2. Your renovation plans go beyond repair",
        paragraphs: [
          "Sometimes a remodel reveals that the cheaper path forward is starting over: a kitchen addition that runs into a load-bearing wall, a bathroom with water damage that's spread further than expected, or a full gut renovation. Selective and interior demolition lets you clear exactly what needs to go while protecting the parts of the structure you're keeping.",
        ],
      },
      {
        heading: "3. An old shed, garage, or outbuilding is just in the way",
        paragraphs: [
          "A sagging shed or an unused detached garage doesn't just look bad — it's using up space you could put toward a driveway, a patio, or landscaping. These smaller structures are some of the most common demolition requests we get from homeowners across West Milton and the greater Dayton area, and they're usually quicker and more affordable than people expect.",
        ],
      },
      {
        heading: "4. You're clearing a site for new construction",
        paragraphs: [
          "Before a new build can go up, the site has to come down and come out. That includes the structure itself, concrete slabs and driveways, and any debris left behind. Coordinating demolition, hauling, and site grading with one contractor keeps a new-construction timeline moving instead of waiting on multiple crews to hand off the site to each other.",
        ],
      },
      {
        heading: "5. DIY demolition is costing more time and money than it's saving",
        paragraphs: [
          "Renting equipment, arranging a dumpster, and hauling debris to the right disposal site adds up fast — and that's before accounting for the time it takes to do it safely. A professional estimate accounts for equipment, labor, and disposal in one number, so there are no surprises partway through the project.",
        ],
      },
      {
        paragraphs: [
          "If any of this sounds like your project, we're happy to take a look and walk you through what it would take. Send us a few details or photos through our contact page and we'll follow up with next steps.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
