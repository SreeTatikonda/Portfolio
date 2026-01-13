import { motion } from "framer-motion";
import { Github, Brain, FileSearch, Cpu, Code, Shield, Stethoscope } from "lucide-react";

const projects = [
  {
    title: "Chest X-Ray Scan Analysis",
    description: "Deep learning system for pneumonia detection from chest X-rays. Trained CNN model achieving 94% accuracy on medical imaging dataset. Implemented data preprocessing, model optimization, and evaluation pipelines for healthcare diagnostic support.",
    tags: ["Python", "PyTorch", "Computer Vision"],
    highlights: ["94% Accuracy", "Medical AI", "Deep Learning"],
    github: "https://github.com/SreeTatikonda/ChestXray-Scan",
    icon: Stethoscope,
  },
  {
    title: "Multi-Modal RAG System",
    description: "Developed a Multi-Modal Retrieval-Augmented Generation system capable of understanding and integrating information from both images and text documents. Implemented unified embedding pipelines, vector search, multimodal retrieval, and grounded LLM reasoning for accurate, context-aware responses.",
    tags: ["Python", "LLMs", "Computer Vision", "RAG", "Embeddings"],
    highlights: ["Multi-Modal Retrieval", "LLM Reasoning", "Unified Embeddings"],
    github: "https://github.com/SreeTatikonda/RAG_projects",
    icon: Brain,
  },
  {
    title: "Emotion Detection from Text",
    description: "NLP-based emotion classifier using transformer models (distilBERT). Achieves 92% accuracy on emotion classification with real-time inference. Features interactive UI with confidence scores and emotion distribution visualization for text analysis.",
    tags: ["Python", "NLP", "PyTorch"],
    highlights: ["92% Accuracy", "Real-time NLP", "Interactive UI"],
    github: "https://github.com/SreeTatikonda/Emotion-Detection-from-Text",
    icon: FileSearch,
  },
  {
    title: "AI Resume Analyser",
    description: "AI-powered tool that compares resumes against job descriptions using NLP similarity matching. Provides actionable recommendations for resume optimization. Helps job seekers identify skill gaps and improve match scores with target positions.",
    tags: ["Python", "NLP", "React"],
    highlights: ["NLP Processing", "AI Matching", "Career Tech"],
    github: "https://github.com/SreeTatikonda/AI-Resume_Analyser",
    icon: Cpu,
  },
  {
    title: "C Compiler",
    description: "Complete C compiler implementation from scratch with lexical analysis, parsing, semantic analysis, and code generation. Handles complex language constructs with proper error handling and optimization for executable code generation.",
    tags: ["Python", "C#", "Java"],
    highlights: ["System Programming", "Language Design", "Code Generation"],
    github: "https://github.com/SreeTatikonda/Compiler---C-Compiler",
    icon: Code,
  },
  {
    title: "Quantum Key Distribution",
    description: "Quantum key distribution (QKD) system for secure encryption and decryption. Explores quantum computing applications in cybersecurity. Implements cryptographic protocols leveraging quantum mechanics for theoretically unbreakable encryption.",
    tags: ["Python", "Security", "Quantum"],
    highlights: ["Quantum Security", "Cryptography", "Research"],
    github: "https://github.com/SreeTatikonda/Encryption-and-Decryption-using-QKD",
    icon: Shield,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            AI/ML applications, system programming, and research projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project icon header */}
              <div className="h-32 bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center border-b border-border/30">
                <project.icon className="w-14 h-14 text-primary/60 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-muted-foreground bg-muted/50 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;