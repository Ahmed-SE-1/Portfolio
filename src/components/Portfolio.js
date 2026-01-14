import React, { useState, useEffect } from "react";
import '../App.css';
import {
  Code2,
  Smartphone,
  Palette,
  Globe,
  Wrench,
  Rocket,
  Mail,
  Phone,
  Linkedin,
  Github,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullName = "Ahmed Ali";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing animation
  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2000;

    const typeWriter = () => {
      if (!isDeleting && currentIndex < fullName.length) {
        setDisplayedName((prev) => prev + fullName.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedName((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      } else if (!isDeleting && currentIndex === fullName.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(
      typeWriter,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullName]);

  // Cursor blinking
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "React, React Native, Flutter, Tailwind CSS, EJS, Next JS, HTML, CSS",
      gradient: "gradient-blue-purple",
    },
    {
      icon: Wrench,
      title: "Backend Development",
      description: "Node JS, Express, Electron JS, Dart",
      gradient: "gradient-green-emerald",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Frontend creativity, responsive layouts, modern design systems",
      gradient: "gradient-pink-rose",
    },
    {
      icon: Globe,
      title: "Development Area",
      description: "Full Stack Web Development, Cross-Platform App Development",
      gradient: "gradient-orange-red",
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      description: "Git, Webpack, npm, CI/CD",
      gradient: "gradient-indigo-blue",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "WebGL, Three.js, Creative Coding",
      gradient: "gradient-violet-purple",
    },
  ];

  const projects = [
    {
      icon: Globe,
      title: "E-Commerce Website",
      subtitle: "Herb Website - Node.js",
      description:
        "Full-stack e-commerce platform with Node.js and Express featuring modern design",
      gradient: "from-green-500 to-teal-600",
      link: "https://herbal-hxms.onrender.com/",
    },
    {
      icon: Code2,
      title: "Text Utility App",
      subtitle: "Text-Utility - React",
      description:
        "React-based text utility application with various text manipulation features",
      gradient: "from-blue-500 to-cyan-600",
      link: "https://text-utility-f6p5.vercel.app/",
    },
    {
      icon: Globe,
      title: "News World App",
      subtitle: "News-World - React",
      description:
        "React application for browsing and reading news from various sources",
      gradient: "from-purple-500 to-indigo-600",
      link: "https://github.com/Ahmed-SE-1/News-World",
    },
    {
      icon: Smartphone,
      title: "Video Downloader Backend",
      subtitle: "YT-DLP Backend - Node.js",
      description:
        "Backend service in Node.js for Flutter video downloader app using yt-dlp",
      gradient: "from-red-500 to-pink-600",
      link: "https://github.com/Ahmed-SE-1/yt-dlp-backend",
    },
    {
      icon: Smartphone,
      title: "Video Downloader App",
      subtitle: "Nova Stream - Flutter",
      description:
        "Cross-platform mobile app built with Flutter for downloading videos with modern UI/UX",
      gradient: "from-cyan-500 to-blue-600",
      link: "https://github.com/Ahmed-SE-1/Nova-Streaming-Video-Downloader-App-",
    },
    {
      icon: Globe,
      title: "E-Commerce Website",
      subtitle: "Zullbery Website - Node.js",
      description:
        "Full-stack e-commerce platform with Node.js and Express featuring modern design",
      gradient: "from-green-500 to-teal-600",
      link: "https://zullbery.onrender.com/",
    },
    {
      icon: Code2,
      title: "Desktop Application",
      subtitle: "Biryani Express - Electron",
      description:
        "Cross-platform desktop app built with Electron JS for restaurant management",
      gradient: "from-orange-500 to-pink-600",
      link: "",
    },
    {
      icon: Mail,
      title: "Phishing Email Simulation",
      subtitle: "Phisher - Python App",
      description:
        "Python app built  for experiencing phisihing simulation",
      gradient: "from-orange-500 to-pink-600",
      link: "https://github.com/Ahmed-SE-1/Phishing-Email-Simulation",
    },
  ];

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const FloatingShape = ({
    delay = 0,
    size = "floating-shape",
    position = "floating-shape-1",
  }) => (
    <div
      className={`position-absolute ${position} ${size} bg-gradient-floating rounded-circle blur-effect animate-pulse`}
      style={{ animationDelay: `${delay}s` }}
    />
  );

  const GradientText = ({ children, className = "" }) => (
    <span className={`gradient-text ${className}`}>{children}</span>
  );

  return (
    <div>
      <div className="min-vh-100 bg-black text-white overflow-hidden position-relative">
        {/* Animated Background */}
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-animated">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-overlay" />
          <FloatingShape delay={0} position="floating-shape-1" />
          <FloatingShape
            delay={2}
            position="floating-shape-2"
            size="floating-shape-lg"
          />
          <FloatingShape
            delay={4}
            position="floating-shape-3"
            size="floating-shape-sm"
          />
        </div>

        {/* Navigation */}
        <nav
          className={`navbar navbar-expand-md navbar-dark fixed-top transition-all ${
            scrollY > 50 ? "navbar-scrolled" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="navbar-brand">
              <div className="position-relative">
                <div className="logo-container d-flex align-items-center justify-content-center animate-spin-slow">
                  <GradientText className="fs-4 fw-bold">AA</GradientText>
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 logo-ping"></div>
              </div>
            </div>

            <div className="d-none d-md-block">
              <div className="d-flex">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="nav-link-custom mx-2 text-decoration-none position-relative"
                    >
                      {item}
                      <span className="nav-underline position-absolute bottom-0 start-0 w-100" />
                    </a>
                  )
                )}
              </div>
            </div>

            <button
              className="navbar-toggler border-0 d-md-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="d-md-none mobile-menu">
              <div className="p-3">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="d-block p-2 text-decoration-none text-white hover-blue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="position-relative min-vh-100 d-flex align-items-center justify-content-center"
        >
          <div className="text-center px-3">
            <div className="mb-5">
              <h1 className="hero-title fw-black mb-4 d-flex align-items-center justify-content-center">
                <GradientText>
                  {displayedName}
                  <span className={`cursor ${showCursor ? "opacity-100" : "opacity-0"}`}>
                    |
                  </span>
                </GradientText>
              </h1>

              <p className="hero-subtitle text-light mb-5 mx-auto">
                Creative Developer & UI/UX Designer crafting digital experiences
                that inspire and engage
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a
                  href="#projects"
                  className="btn btn-gradient px-4 py-3 rounded-pill fw-semibold"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-primary px-4 py-3 rounded-pill fw-semibold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="position-relative py-10 px-3">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              About <GradientText>Me</GradientText>
            </h2>

            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="about-text">
                  <p className="text-light mb-4 animate-fade-in-up">
                    I'm a passionate{" "}
                    <GradientText className="fw-semibold">
                      Software Engineer
                    </GradientText>{" "}
                    with a strong focus on full-stack web and mobile application
                    development. I specialize in building clean, scalable, and
                    user-centric solutions across both frontend and backend
                    platforms.
                  </p>

                  <p
                    className="text-light mb-4 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    My technical toolbox includes modern JavaScript frameworks
                    like{" "}
                    <GradientText className="fw-semibold">
                      Next, React and React Native
                    </GradientText>{" "}
                    for powerful user interfaces, Node.js and Express for
                    backend services, and Flutter for cross-platform mobile
                    development.
                  </p>

                  <p
                    className="text-light animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    I take pride in frontend creativity and backend innovation,
                    transforming ideas into engaging and intuitive experiences.
                    Whether it's a responsive web dashboard, a dynamic mobile
                    app, or a fully integrated full-stack solution, I deliver
                    high-quality results.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-card text-center card-hover">
                  <div className="avatar mx-auto mb-4 d-flex align-items-center justify-content-center animate-rotate-slow">
                    <span className="position-relative z-1 fs-1 fw-bold text-white">
                      AA
                    </span>
                    <div className="position-absolute top-0 start-0 w-100 h-100 avatar-shine"></div>
                  </div>
                  <h3 className="fs-3 fw-bold mb-2">
                    <GradientText>Creative Developer</GradientText>
                  </h3>
                  <p className="text-light">Turning ideas into reality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="position-relative py-5 px-3 skills-bg">
          <div className="container">
            <h2 className="section-title text-center mb-5">
              Skills & <GradientText>Expertise</GradientText>
            </h2>

            <div className="row g-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.title} className="col-sm-6 col-lg-4">
                    <div
                      className="skill-card h-100 card-hover animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`skill-icon ${skill.gradient} mb-3 d-flex align-items-center justify-content-center icon-hover animate-bounce-slow`}
                      >
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="fs-5 fw-bold mb-3 skill-title">
                        {skill.title}
                      </h3>
                      <p className="text-light skill-description">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
      <section id="projects" className="position-relative py-5 px-3">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Featured <GradientText>Projects</GradientText>
          </h2>

          <div className="row g-4">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={project.title} className="col-sm-6 col-lg-4">
                  <div
                    className={`project-card h-100 card-hover position-relative overflow-hidden animate-fade-in-up ${
                      project.link ? 'project-clickable' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onClick={() => handleProjectClick(project.link)}
                  >
                    <div className="project-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                    <div className="position-relative z-1">
                      <div
                        className={`project-icon project-gradient-${index % 6 + 1} mb-4 d-flex align-items-center justify-content-center icon-hover position-relative overflow-hidden animate-rotate-slow`}
                      >
                        <IconComponent className="text-white" size={40} />
                        <div className="project-icon-shine position-absolute top-0 start-0 w-100 h-100"></div>
                      </div>
                      <h3 className="fs-4 fw-bold mb-2 project-title">
                        {project.title}
                      </h3>
                      <p className="text-primary fw-semibold mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-light project-description mb-4">
                        {project.description}
                      </p>
                      {project.link && (
                        <div className="d-flex align-items-center text-primary small project-link">
                          <span className="me-2">View Project</span>
                          <ExternalLink size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="position-relative py-5 px-3 contact-bg"
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-4">
                Get In <GradientText>Touch</GradientText>
              </h2>
              <p className="contact-subtitle text-light mb-5 mx-auto px-3">
                Ready to bring your ideas to life? Let's connect and discuss
                your next project.
              </p>

              <div className="row g-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "ahmedaliqurexhi7867@gmail.com",
                    link: "mailto:ahmedaliqurexhi7867@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+92 327 788 9448",
                    link: "tel:+923277889448",
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    info: "LinkedIn Profile",
                    link: "https://linkedin.com/in/ahmed-ali-69a697369",
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    info: "GitHub Profile",
                    link: "https://github.com/Ahmed-SE-1",
                  },
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.title} className="col-sm-6 col-lg-3">
                      <a
                        href={contact.link}
                        target={
                          contact.link.startsWith("http") ? "_blank" : "_self"
                        }
                        className="contact-card d-block text-decoration-none card-hover animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        rel="noreferrer"
                      >
                        <div className="contact-icon mx-auto mb-3 d-flex align-items-center justify-content-center icon-hover animate-pulse-slow">
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <h3 className="fs-6 fw-bold mb-2 contact-title">
                          {contact.title}
                        </h3>
                        <p className="text-light contact-info">
                          {contact.info}
                        </p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-top py-4 text-center footer-border">
          <div className="container">
            <div className="d-flex justify-content-center mb-3 gap-3">
              {[
                { icon: Mail, link: "mailto:ahmedaliqurexhi7867@gmail.com" },
                {
                  icon: Linkedin,
                  link: "https://linkedin.com/in/ahmed-ali-69a697369",
                },
                {
                  icon: Github,
                  link: "https://github.com/Ahmed-SE-1/Ahmed-SE-1",
                },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target={social.link.startsWith("http") ? "_blank" : "_self"}
                    className="social-icon d-flex align-items-center justify-content-center text-decoration-none icon-hover animate-rotate-slow"
                    style={{ animationDelay: `${index * 0.5}s` }}
                    rel="noreferrer"
                  >
                    <IconComponent className="text-white" size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-light mb-0">
              &copy; 2025 <GradientText>Ahmed Ali</GradientText>. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
