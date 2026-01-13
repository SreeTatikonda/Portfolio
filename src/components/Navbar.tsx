import { motion } from "framer-motion";
import { Mail, Linkedin, Github, BookOpen, Rss } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Mail, href: "mailto:yasaswinitatikonda1@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tatikondayasaswini", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/SreeTatikonda", label: "GitHub" },
  { icon: BookOpen, href: "https://medium.com/@yasaswinitatikonda1", label: "Medium" },
  { icon: Rss, href: "https://substack.com/@yasaswinitatikonda", label: "Substack" },
];

const navItems = ["About", "Experience", "Skills", "Projects", "Education", "Testimonials", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => 
        document.getElementById(item.toLowerCase())
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].toLowerCase());
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          className="text-xl font-semibold gradient-text"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          YT
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.toLowerCase()
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-bubble"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.15 }}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-foreground/70" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;