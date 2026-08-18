// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for portfolio content.
// Edit this file to make the site yours — nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Ahmed Ali",
  initials: "AA",
  role: "Software Engineer",
  location: "Lahore, Pakistan",
  tagline: "I build scalable applications and native mobile experiences with precision.",
  description:
    "I'm a software engineer with 2 years of hands-on experience bridging the gap between performant backends and pixel-perfect interfaces. From web applications to cross-platform mobile apps, I focus on intuitive, user-centric engineering.",
  email: "ahmedaliqurexhi7867@gmail.com",
  resumeUrl: "/resume.pdf",
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
    title: "AI & ML",
    description:
      "I leverage artificial intelligence and machine learning to build intelligent applications that can learn and adapt to user needs.",
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
  {
    title: "Automation",
    description:
      "I automate the manual workflow processes, saving time and reducing human error.",
  },
];

export type ProjectSize = "large" | "medium" | "small";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  size: ProjectSize;
  /**
   * Optional manual cover image path (relative to /public).
   * e.g. "/projects/smartassist.png"
   *
   * If omitted:
   *  - Live web URLs → auto-screenshot via microlink.io
   *  - GitHub / non-web URLs → polished gradient fallback with initials
   */
  image?: string;
}

export const projects: Project[] = [
  {
    title: "SMARTASSIST - Smart Home System for Disabled People",
    description:
      "An application that provides a smart home system for disabled people, allowing them to control their home appliances and devices using voice commands and gestures.",
    tags: ["Flutter", "Dart", "Firebase", "IoT", "Voice Recognition (NLP)", "SIGN-DETR", "TensorFlow Lite"],
    href: "https://github.com/Ahmed-SE-1/Smart-Assist",
    size: "large",
    image: "/projects-image/smartassist_banner.png",
  },
  {
    title: "Lumiere Makeup",
    description:
      "A beauty-focused e-commerce platform with a sleek, modern design and seamless user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "REST API", "Superbase"],
    href: "https://lumiere-makeup.vercel.app/",
    size: "large",
  },
    {
    title: "TinyChat",
    description:
      "A WhatsApp-style real-time chat app with direct messaging, live presence, read receipts, unread indicators, and delete-for-me/everyone controls.",
    tags: ["React.js", "Vite", "Node.js", "Express.js", "Socket.IO", "MongoDB", "JWT", "Multer"],
    href: "https://tiny-chat.vercel.app/",
    size: "small",
    image: "/projects-image/TinyChat.png",
  },
  {
    title: "Proposal Generator",
    description:
      "A proposal generator that uses AI models to create professional proposals for upwork/fiver and also generate job application emails & cover letter.",
    tags: ["Next", "TypeScript", "AI Model", "Gemini Flash", "Grok", "Tailwind CSS"],
    href: "https://proposal-pro-lovat.vercel.app/",
    size: "medium",
  },
  {
    title: "Nexus Business Startup",
    description:
      "A modern corporate platform built for scale, featuring high-fidelity styling and type-safe data flows.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    href: "https://bussiness-startup.vercel.app/login",
    size: "medium",
  },
  {
    title: "Depresso Haus",
    description:
      "A highly aesthetic web experience optimized for structural speed and polished visual presentation.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "https://depresso-haus.vercel.app/",
    size: "medium",
  },

  {
    title: "POS System & Admin Dashboard",
    description:
      "A highly aesthetic web experience for POS and Admin dashboard, optimized for structural speed and polished visual presentation.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "REST API"],
    href: "https://depresso-admin-dashboard.vercel.app/login",
    size: "medium",
  },
   {
    title: "Sana Safinaz Clone",
    description:
      "A full-stack e-commerce clone replicating a Sana Safinaz-style shopping experience with product browsing, cart, wishlist, checkout, and admin management.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "bcrypt", "Multer", "Express Session"],
    href: "https://sana-safinaz-clone-tau.vercel.app/",
    size: "small",
    image: "/projects-image/SanaSafinaz.png",
  },
  {
    title: "Nova Streaming",
    description:
      "A fast cross-platform video downloading utility application engineered with a clean native UI.",
    tags: ["Flutter", "Dart", "Mobile API"],
    href: "https://github.com/Ahmed-SE-1/Nova-Streaming-Video-Downloader-App-",
    size: "medium",
    // image: "/projects/nova-streaming.png",  ← drop your cover here when ready
  },
 
  {
    title: "Phishing Simulation",
    description:
      "A Python-based email simulation tool designed to educate users on phishing threats, complete with SMTP integration and SQLite database support.",
    tags: ["Python", "SMTP", "SQLite"],
    href: "https://phishingsimulation-1.onrender.com/",
    size: "small",
  },

  {
    title: "Brand Shopping",
    description:
      "A vibrant storefront application featuring heavy emphasis on responsive UI components and fast asset rendering.",
    tags: ["React", "Vite", "Tailwind CSS"],
    href: "https://brand-shopping-theta.vercel.app/",
    size: "small",
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