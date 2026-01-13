import { motion } from "framer-motion";
import Terminal from "./Terminal";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass-button text-sm font-medium text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Software Developer • 2025 Graduate
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Yasaswini T</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full-stack AI developer specializing in LLM systems, RAG pipelines, and production-ready ML applications. 
              I build scalable backends, train custom models, and turn complex AI research into reliable software 
              that solves real problems.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 glass-button rounded-xl font-medium"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full glass-card flex items-center justify-center overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src={profileImage} 
                  alt="Yasaswini T" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;