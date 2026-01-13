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
    purpose: "Deep learning system for automated pneumonia detection from chest X-ray images.",
    problem: "Manual X-ray analysis is time-consuming and prone to human error in high-volume medical settings.",
    technologies: ["Python", "PyTorch", "CNN", "OpenCV"],
    challenges: "Handling imbalanced medical datasets and ensuring model generalization across different X-ray qualities.",
    outcome: "Achieved 94% accuracy on the test set, providing reliable diagnostic support for healthcare professionals.",
    github: "https://github.com/SreeTatikonda/ChestXray-Scan",
    image: chestxrayscanImg,
  },
  {
    title: "Multi-Modal RAG System",
    purpose: "A Retrieval-Augmented Generation system that understands both images and text documents.",
    problem: "Traditional RAG systems only process text, missing valuable context from visual content.",
    technologies: ["Python", "LangChain", "CLIP", "LLMs", "Vector DB"],
    challenges: "Building unified embeddings for different modalities and ensuring accurate cross-modal retrieval.",
    outcome: "Successfully integrated image and text understanding with grounded LLM reasoning for accurate, context-aware responses.",
    github: "https://github.com/SreeTatikonda/RAG_projects",
    image: multimodalragImg,
  },
  {
    title: "Emotion Detection from Text",
    purpose: "NLP-based classifier that detects emotions from text using transformer models.",
    problem: "Understanding emotional context in text is crucial for customer feedback analysis and mental health applications.",
    technologies: ["Python", "DistilBERT", "PyTorch", "Streamlit"],
    challenges: "Fine-tuning transformers for nuanced emotion categories beyond simple sentiment.",
    outcome: "Achieved 92% accuracy with real-time inference and interactive visualization of emotion distributions.",
    github: "https://github.com/SreeTatikonda/Emotion-Detection-from-Text",
    image: emotionaiImg,
  },
  {
    title: "AI Resume Analyser",
    purpose: "AI-powered tool that compares resumes against job descriptions using NLP similarity matching.",
    problem: "Job seekers struggle to optimize resumes for specific positions and identify skill gaps.",
    technologies: ["Python", "NLP", "React", "Sentence Transformers"],
    challenges: "Extracting meaningful features from unstructured resume formats and providing actionable feedback.",
    outcome: "Delivers personalized recommendations helping users improve match scores with target positions.",
    github: "https://github.com/SreeTatikonda/AI-Resume_Analyser",
    image: airesumeanalyserImg,
  },
  {
    title: "C Compiler",
    purpose: "Complete C compiler implementation from scratch with full compilation pipeline.",
    problem: "Understanding compiler internals is essential for systems programming and language design.",
    technologies: ["Python", "C#", "Java", "LLVM"],
    challenges: "Implementing proper lexical analysis, parsing complex grammar, and generating optimized code.",
    outcome: "Successfully compiles C programs through lexing, parsing, semantic analysis, and code generation phases.",
    github: "https://github.com/SreeTatikonda/Compiler---C-Compiler",
    image: compilerImg,
  },
  {
    title: "Quantum Key Distribution",
    purpose: "QKD system exploring quantum computing applications in secure cryptography.",
    problem: "Classical encryption methods are vulnerable to quantum computing attacks.",
    technologies: ["Python", "Qiskit", "Cryptography", "NumPy"],
    challenges: "Simulating quantum protocols accurately and handling noise in quantum systems.",
    outcome: "Implemented BB84 protocol demonstrating theoretically unbreakable encryption using quantum mechanics.",
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
