import { motion } from "framer-motion";
import { Mail, Linkedin, Github, BookOpen, Rss } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:yasaswini.t@example.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/yasaswini-t", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/yasaswini-t", label: "GitHub" },
  { icon: BookOpen, href: "https://medium.com/@yasaswini-t", label: "Medium" },
  { icon: Rss, href: "https://substack.com/@yasaswini-t", label: "Substack" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          className="text-xl font-semibold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          YT
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
          {["About", "Skills", "Projects", "Testimonials", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
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