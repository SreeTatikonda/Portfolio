import { motion } from "framer-motion";
import { Mail, Linkedin, Download, MapPin, ArrowUpRight } from "lucide-react";

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
            I'm always open to discussing new opportunities, projects, or just having a chat about tech
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.a
              href="mailto:yasaswini.t@example.com"
              className="flex items-center gap-4 p-4 glass-button rounded-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">yasaswini.t@example.com</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yasaswini-t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-button rounded-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/yasaswini-t</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Open to remote opportunities worldwide</span>
          </div>

          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all group"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px hsl(220 70% 50% / 0.3)" }}
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