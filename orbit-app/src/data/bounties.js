export const bounties = [
  {
    id: 1,
    title: "GDC Mobile App UI Redesign",
    sponsor: "RIT Dubai GDC",
    category: "UI/UX Design",
    reward: "1,200",
    duration: "72h",
    description: "Redesign the GDC mobile app interface with focus on student engagement and event discovery. Must include dark mode support and accessibility features.",
    deliverables: [
      "Figma design file with all screens",
      "Interactive prototype",
      "Design system documentation",
      "Asset export package"
    ],
    tags: ["mobile", "ui", "figma"],
    spots: 3,
    submitted: 12
  },
  {
    id: 2,
    title: "+twe Landing Page Animation",
    sponsor: "+twe Studio",
    category: "Frontend Web",
    reward: "800",
    duration: "48h",
    description: "Create scroll-based animations for +twe's new landing page using GSAP or Framer Motion. Should feel premium and smooth.",
    deliverables: [
      "React component with animations",
      "GitHub repository",
      "Live demo deployment",
      "Performance optimization report"
    ],
    tags: ["web", "animation", "gsap"],
    spots: 2,
    submitted: 8
  },
  {
    id: 3,
    title: "DSO Campus 3D Map",
    sponsor: "Dubai Silicon Oasis",
    category: "3D & Motion",
    reward: "1,000",
    duration: "96h",
    description: "Build an interactive 3D map of Dubai Silicon Oasis campus using Three.js. Include building markers and navigation paths.",
    deliverables: [
      "Three.js scene implementation",
      "Optimized 3D models",
      "Interactive controls",
      "Documentation"
    ],
    tags: ["3d", "threejs", "webgl"],
    spots: 2,
    submitted: 5
  },
  {
    id: 4,
    title: "AI Study Buddy Chatbot",
    sponsor: "AUS Dev Circle",
    category: "AI & Python",
    reward: "900",
    duration: "72h",
    description: "Develop a Python-based study assistant chatbot that can answer course-related questions using RAG architecture.",
    deliverables: [
      "Python backend code",
      "API documentation",
      "Test cases",
      "Deployment guide"
    ],
    tags: ["ai", "python", "nlp"],
    spots: 4,
    submitted: 15
  },
  {
    id: 5,
    title: "DTEC Startup Branding Kit",
    sponsor: "DTEC Startup Studio",
    category: "Branding",
    reward: "700",
    duration: "48h",
    description: "Create a complete branding kit for DTEC's new startup incubator program including logo variations, color palette, and typography guide.",
    deliverables: [
      "Logo suite (primary, secondary, icon)",
      "Brand guidelines PDF",
      "Social media templates",
      "Business card design"
    ],
    tags: ["branding", "logo", "design"],
    spots: 2,
    submitted: 10
  },
  {
    id: 6,
    title: "Campus Event Dashboard",
    sponsor: "RIT Dubai GDC",
    category: "Frontend Web",
    reward: "600",
    duration: "48h",
    description: "Build a real-time dashboard showing upcoming campus events across UAE universities with filtering and calendar integration.",
    deliverables: [
      "React dashboard application",
      "API integration",
      "Responsive design",
      "Source code repository"
    ],
    tags: ["react", "dashboard", "api"],
    spots: 3,
    submitted: 7
  }
];

export const categories = ["All", "UI/UX Design", "Frontend Web", "3D & Motion", "AI & Python", "Branding"];

export const studentWork = [
  {
    id: 1,
    title: "Neon Finance Dashboard",
    student: "Ahmed K.",
    university: "RIT Dubai",
    payout: "1,200 AED",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["UI/UX", "Fintech"]
  },
  {
    id: 2,
    title: "Desert Bloom 3D Experience",
    student: "Sara M.",
    university: "AUS",
    payout: "950 AED",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    tags: ["3D", "WebGL"]
  },
  {
    id: 3,
    title: "Smart Campus Navigation",
    student: "Omar H.",
    university: "DTEC",
    payout: "800 AED",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop",
    tags: ["Mobile", "Maps"]
  },
  {
    id: 4,
    title: "AI Art Generator",
    student: "Fatima A.",
    university: "CUD",
    payout: "1,100 AED",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=300&fit=crop",
    tags: ["AI", "Python"]
  },
  {
    id: 5,
    title: "EcoTrack Sustainability App",
    student: "Khalid R.",
    university: "UOWD",
    payout: "750 AED",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    tags: ["Mobile", "Sustainability"]
  },
  {
    id: 6,
    title: "Heritage Museum AR Tour",
    student: "Maryam S.",
    university: "RIT Dubai",
    payout: "1,000 AED",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=400&h=300&fit=crop",
    tags: ["AR", "Culture"]
  },
  {
    id: 7,
    title: "Crypto Portfolio Tracker",
    student: "Hassan L.",
    university: "AUS",
    payout: "850 AED",
    image: "https://images.unsplash.com/photo-1621504450168-b8c437536072?w=400&h=300&fit=crop",
    tags: ["Web3", "Finance"]
  },
  {
    id: 8,
    title: "Wellness Meditation App",
    student: "Noor T.",
    university: "DTEC",
    payout: "700 AED",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    tags: ["Mobile", "Health"]
  }
];

export const stats = [
  { value: "148,500", label: "AED Paid to Students", suffix: "" },
  { value: "840", label: "Student Builders", suffix: "+" },
  { value: "42", label: "Avg Sprint Time", suffix: " Hours" },
  { value: "12", label: "UAE Campuses", suffix: "+" }
];
