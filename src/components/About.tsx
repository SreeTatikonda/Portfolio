import { motion } from "framer-motion";
import { Code2, Brain, Database, Layers } from "lucide-react";

const expertise = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Brain, label: "LLM & AI Systems" },
  { icon: Database, label: "RAG Pipelines" },
  { icon: Layers, label: "ML Engineering" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 rounded-2xl"
        >
          <p className="text-muted-foreground leading-relaxed text-center md:text-lg mb-8">
            Full-stack engineer specializing in <span className="text-primary font-medium">AI/ML systems</span>, 
            <span className="text-primary font-medium"> LLM integrations</span>, and 
            <span className="text-primary font-medium"> RAG pipelines</span>. 
            I transform complex AI research into production-ready applications that scale. 
            Passionate about building intelligent systems that automate workflows and deliver measurable business impact.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50"
              >
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-xs md:text-sm font-medium text-foreground/80 text-center">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
