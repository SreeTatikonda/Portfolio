import { motion } from "framer-motion";
import { Zap, Server, TrendingUp } from "lucide-react";
import Terminal from "./Terminal";
import profileImage from "@/assets/profile.png";

const highlights = [
  { icon: Zap, text: "Automated workflows saving 40 hours/week of manual effort" },
  { icon: Server, text: "Built systems processing 100K+ transactions daily" },
  { icon: TrendingUp, text: "Optimized performance by 60% for enterprise-scale applications" },
];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
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
              Software Engineer • Open to Work
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Yasaswini Tatikonda</span>
            </motion.h1>

            <motion.p
              className="text-xl text-primary font-semibold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              I build systems that eliminate repetitive work.
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-4 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Highlight of my impact:
            </motion.p>

            <motion.div
              className="space-y-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 glass-button rounded-xl font-medium"
              >
                Let's Talk
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
              {/* Animated Border Beam */}
              <div className="absolute inset-0 w-[calc(100%+16px)] h-[calc(100%+16px)] -top-2 -left-2 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full border-beam-gradient animate-border-beam" />
              </div>
              
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full glass-card flex items-center justify-center overflow-hidden border-2 border-background"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src={profileImage} 
                  alt="Yasaswini Tatikonda" 
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