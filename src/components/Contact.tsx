import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MapPin, ArrowUpRight, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-muted/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Building something ambitious? I'm open to full-time roles, consulting, or collaboration 
            on AI/ML projects that solve real problems.
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <motion.a
              href="mailto:yasaswinitatikonda1@gmail.com"
              className="flex items-center gap-4 p-4 glass-button rounded-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium truncate">yasaswinitatikonda1@gmail.com</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tatikondayasaswini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-button rounded-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium truncate">tatikondayasaswini</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </motion.a>

            <motion.a
              href="https://github.com/SreeTatikonda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-button rounded-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium truncate">SreeTatikonda</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </motion.a>

            <motion.a
              href="https://medium.com/@yasaswinitatikonda1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-button rounded-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">Blog</p>
                <p className="font-medium truncate">Medium & Substack</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Ames, Iowa • Open to relocation</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Available from December 2025</span>
            </div>
          </div>

          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all group"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
            <motion.span
              className="inline-block"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;