import { motion } from "framer-motion";
import { Github } from "lucide-react";

// Import project images
import chestxrayscanImg from "@/assets/projects/chestxrayscan.png";
import multimodalragImg from "@/assets/projects/multimodalrag.png";
import emotionaiImg from "@/assets/projects/emotionai.png";
import airesumeanalyserImg from "@/assets/projects/airesumeanalyser.png";
import compilerImg from "@/assets/projects/compiler.png";
import qkdencryptionImg from "@/assets/projects/qkdencryption.png";

const projects = [
  {
    title: "Chest X-Ray Scan Analysis",
    purpose: "CNN-based pneumonia detection from chest X-rays.",
    problem: "Manual diagnosis is slow and error-prone at scale.",
    technologies: ["Python", "PyTorch", "CNN", "OpenCV"],
    outcome: "94% accuracy — reliable diagnostic support.",
    github: "https://github.com/SreeTatikonda/ChestXray-Scan",
    image: chestxrayscanImg,
  },
  {
    title: "Multi-Modal RAG System",
    purpose: "RAG system that processes both images and text.",
    problem: "Standard RAG misses context from visual content.",
    technologies: ["Python", "LangChain", "CLIP", "LLMs", "Vector DB"],
    outcome: "Unified embeddings with grounded LLM reasoning.",
    github: "https://github.com/SreeTatikonda/RAG_projects",
    image: multimodalragImg,
  },
  {
    title: "Emotion Detection from Text",
    purpose: "Transformer-based emotion classifier (DistilBERT).",
    problem: "Sentiment analysis lacks emotional nuance.",
    technologies: ["Python", "DistilBERT", "PyTorch", "Streamlit"],
    outcome: "92% accuracy with real-time inference.",
    github: "https://github.com/SreeTatikonda/Emotion-Detection-from-Text",
    image: emotionaiImg,
  },
  {
    title: "AI Resume Analyser",
    purpose: "NLP tool matching resumes to job descriptions.",
    problem: "Hard to optimize resumes for specific roles.",
    technologies: ["Python", "NLP", "React", "Sentence Transformers"],
    outcome: "Actionable feedback to improve match scores.",
    github: "https://github.com/SreeTatikonda/AI-Resume_Analyser",
    image: airesumeanalyserImg,
  },
  {
    title: "C Compiler",
    purpose: "Full C compiler from scratch.",
    problem: "Learning compiler internals hands-on.",
    technologies: ["Python", "C#", "Java", "LLVM"],
    outcome: "Complete pipeline: lexer → parser → codegen.",
    github: "https://github.com/SreeTatikonda/Compiler---C-Compiler",
    image: compilerImg,
  },
  {
    title: "Quantum Key Distribution",
    purpose: "BB84 protocol for quantum-secure encryption.",
    problem: "Classical encryption vulnerable to quantum attacks.",
    technologies: ["Python", "Qiskit", "Cryptography", "NumPy"],
    outcome: "Theoretically unbreakable key exchange.",
    github: "https://github.com/SreeTatikonda/Encryption-and-Decryption-using-QKD",
    image: qkdencryptionImg,
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
            Built out of curiosity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden border-b border-border/30 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                
                {/* Purpose */}
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Purpose</span>
                  <p className="text-muted-foreground text-sm">{project.purpose}</p>
                </div>

                {/* Problem */}
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Problem</span>
                  <p className="text-muted-foreground text-sm">{project.problem}</p>
                </div>

                {/* Outcome */}
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Outcome</span>
                  <p className="text-muted-foreground text-sm">{project.outcome}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-md transition-all duration-300 hover:bg-muted hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group/link pt-2"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 transition-transform duration-300 group-hover/link:rotate-12" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 group-hover/link:after:w-full">
                    View on GitHub
                  </span>
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
