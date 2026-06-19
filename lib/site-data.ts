// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for portfolio content.
// Edit this file to make the site yours — nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Ahmed Ali",
  initials: "AA",
  role: "Software Engineer",
  location: "Lahore, Pakistan",
  tagline: "I build scalable applications and native mobile experiences with precision.",
  description:
    "I'm a software engineer with 2 years of hands-on experience bridging the gap between performant backends and pixel-perfect interfaces. From web applications to cross-platform mobile apps, I focus on intuitive, user-centric engineering.",
  email: "ahmedaliqurexhi7867@gmail.com",
  resumeUrl: "/resume.pdf", // Place your resume PDF in the public folder named 'resume.pdf'
  availableForWork: true,
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-ali-69a697369/" },
  { label: "GitHub", href: "https://github.com/Ahmed-SE-1" },
  { label: "Phone", href: "tel:+923277889448" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const philosophy = [
  {
    title: "Engineering",
    description:
      "I architecture full-stack systems using Node.js and modern databases. Code should not just work—it must scale seamlessly under production loads.",
  },
  {
    title: "Interfaces",
    description:
      "Whether it's React, Next.js, or Tailwind CSS, I treat UI as a product's handshake with the user. Fluid, intuitive, and visually pristine.",
  },
  {
    title: "Cross-Platform",
    description:
      "Using Flutter and Dart, I deliver native-feeling mobile solutions that compromise on neither performance nor visual fidelity.",
  },
  {
    title: "Workflow",
    description:
      "Operating with Agile methodologies means building iteratively, deploying with confidence, and optimizing performance metrics constantly.",
  },
];

export const projects = [
  {
    title: "SMARTASSIST - Smart Home System for Disabled People",
    description:
      "An application that provides a smart home system for disabled people, allowing them to control their home appliances and devices using voice commands and gestures.",
    tags: ["Flutter", "Dart", "Firebase", "IoT", "Voice Recognition (NLP)", "SIGN-DETR", "TensorFlow Lite"],
    href: "https://github.com/Ahmed-SE-1/Smart-Assist",
    size: "large" as const,
  },
  {
    title: "Nexus Business Startup",
    description:
      "A modern corporate platform built for scale, featuring high-fidelity styling and type-safe data flows.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    href: "https://bussiness-startup.vercel.app/login",
    size: "medium" as const,
  },
  {
    title: "Depresso Haus",
    description:
      "A highly aesthetic web experience optimized for structural speed and polished visual presentation.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "https://depresso-haus.vercel.app/",
    size: "medium" as const,
  },
  {
    title: "POS System & Admin Dashboard",
    description:
      "A highly aesthetic web experience for POS and Admin dashboard, optimized for structural speed and polished visual presentation.",
    tags: ["Next.js", "Tailwind CSS", "Strapi", "REST API"],
    href: "https://depresso-admin-dashboard.vercel.app/login",
    size: "medium" as const,
  },
  {
    title: "Nova Streaming",
    description:
      "A fast cross-platform video downloading utility application engineered with a clean native UI.",
    tags: ["Flutter", "Dart", "Mobile API"],
    href: "https://github.com/Ahmed-SE-1/Nova-Streaming-Video-Downloader-App-",
    size: "medium" as const,
  },
  {
    title: "Herbal E-Commerce",
    description:
      "Full-stack digital commerce platform featuring seamless server-side routing and database management.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    href: "https://herbal-hxms.onrender.com/",
    size: "small" as const,
  },
  {
    title: "Phishing Simulation",
    description:
      "A Python-based email simulation tool designed to educate users on phishing threats, complete with SMTP integration and SQLite database support.",
    tags: ["Python", "SMTP", "SQLite"],
    href: "https://github.com/Ahmed-SE-1/Phishing-Email-Simulation",
    size: "small" as const,
  },
  {
    title: "Zullbery Clone",
    description:
      "An end-to-end replication of a high-traffic e-commerce portal utilizing robust backend workflows.",
    tags: ["Node.js", "Express", "Database Optimization"],
    href: "https://zullbery.onrender.com/",
    size: "small" as const,
  },
  {
    title: "Brand Shopping",
    description:
      "A vibrant storefront application featuring heavy emphasis on responsive UI components and fast asset rendering.",
    tags: ["React", "Vite", "Tailwind CSS"],
    href: "https://brand-shopping-theta.vercel.app/",
    size: "small" as const,
  },
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Flutter",
  "Dart",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "MySQL",
  "Python",
  "JavaScript",
  "RESTful APIs",
  "Agile Methodology",
];