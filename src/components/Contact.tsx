import { motion } from "framer-motion";
import { Download, MapPin, Calendar } from "lucide-react";
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

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Open to full-time roles, consulting, or collaboration on AI/ML projects.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="w-12 h-12 rounded-full bg-foreground/5 border border-border/50 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              aria-label={link.label}
            >
              <img 
                src={link.icon} 
                alt={link.label} 
                className="w-5 h-5 dark:invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Ames, Iowa • Open to relocation</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Available December 2025</span>
          </div>
        </motion.div>

        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
