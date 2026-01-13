import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gmailIcon from "@/assets/icons/gmail.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";
import mediumIcon from "@/assets/icons/medium.svg";
import substackIcon from "@/assets/icons/substack.svg";

const socialLinks = [
  { icon: gmailIcon, href: "mailto:yasaswinitatikonda1@gmail.com", label: "Email" },
  { icon: linkedinIcon, href: "https://www.linkedin.com/in/tatikondayasaswini", label: "LinkedIn" },
  { icon: githubIcon, href: "https://github.com/SreeTatikonda", label: "GitHub" },
  { icon: mediumIcon, href: "https://medium.com/@yasaswinitatikonda1", label: "Medium" },
  { icon: substackIcon, href: "https://substack.com/@yasaswinitatikonda", label: "Substack" },
];

const navItems = ["About", "Experience", "Skills", "Projects", "Education", "Testimonials", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
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
              setMobileMenuOpen(false);
            }}
          >
            YT
          </motion.a>

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-3">
            {/* Social links - hide some on mobile */}
            <div className="hidden sm:flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  aria-label={link.label}
                >
                  <img 
                    src={link.icon} 
                    alt={link.label} 
                    className="w-4 h-4 dark:invert opacity-70"
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-6 pt-20"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {item}
                </motion.a>
              ))}

              {/* Social links in mobile menu */}
              <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                    aria-label={link.label}
                  >
                    <img 
                      src={link.icon} 
                      alt={link.label} 
                      className="w-5 h-5 dark:invert opacity-70"
                    />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
