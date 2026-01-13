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
    story: "Wondered if AI could catch what doctors might miss in busy hospitals. Built a CNN to read X-rays and flag pneumonia.",
    technologies: ["Python", "PyTorch", "CNN", "OpenCV"],
    outcomes: ["94% detection accuracy", "Faster than manual review"],
    github: "https://github.com/SreeTatikonda/ChestXray-Scan",
    image: chestxrayscanImg,
  },
  {
    title: "Multi-Modal RAG System",
    story: "Frustrated that RAG systems ignored images. Built one that understands both visuals and text together.",
    technologies: ["Python", "LangChain", "CLIP", "LLMs", "Vector DB"],
    outcomes: ["Unified image-text embeddings", "Grounded LLM responses"],
    github: "https://github.com/SreeTatikonda/RAG_projects",
    image: multimodalragImg,
  },
  {
    title: "Emotion Detection from Text",
    story: "Sentiment is binary. Emotions aren't. Trained DistilBERT to detect nuanced feelings in text.",
    technologies: ["Python", "DistilBERT", "PyTorch", "Streamlit"],
    outcomes: ["92% accuracy", "Real-time inference"],
    github: "https://github.com/SreeTatikonda/Emotion-Detection-from-Text",
    image: emotionaiImg,
  },
  {
    title: "AI Resume Analyser",
    story: "Job hunting is a guessing game. Built a tool to show exactly how your resume matches a job posting.",
    technologies: ["Python", "NLP", "React", "Sentence Transformers"],
    outcomes: ["Skill gap detection", "Actionable improvement tips"],
    github: "https://github.com/SreeTatikonda/AI-Resume_Analyser",
    image: airesumeanalyserImg,
  },
  {
    title: "C Compiler",
    story: "Wanted to truly understand how code becomes executable. Built a compiler from scratch to find out.",
    technologies: ["Python", "C#", "Java", "LLVM"],
    outcomes: ["Full lexer → parser → codegen", "Handles complex C constructs"],
    github: "https://github.com/SreeTatikonda/Compiler---C-Compiler",
    image: compilerImg,
  },
  {
    title: "Quantum Key Distribution",
    story: "Classical encryption will break with quantum computers. Explored BB84 protocol to understand quantum-safe security.",
    technologies: ["Python", "Qiskit", "Cryptography", "NumPy"],
    outcomes: ["Unbreakable key exchange", "Quantum simulation working"],
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

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                
                {/* Story */}
                <p className="text-muted-foreground text-sm leading-relaxed">{project.story}</p>

                {/* Outcomes */}
                <ul className="space-y-1">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {outcome}
                    </li>
                  ))}
                </ul>

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
