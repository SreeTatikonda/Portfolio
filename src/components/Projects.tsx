import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

// Import project images
import chestxrayscanImg from "@/assets/projects/chestxrayscan.png";
import multimodalragImg from "@/assets/projects/multimodalrag.png";
import emotionaiImg from "@/assets/projects/emotionai.png";
import airesumeanalyserImg from "@/assets/projects/airesumeanalyser.png";
import compilerImg from "@/assets/projects/compiler.png";
import financialai from "@/assets/projects/financialai.png";

type Category = "All" | "AI & LLM" | "ML & Research" | "Software";

const categories: Category[] = ["All", "AI & LLM", "ML & Research", "Software"];

const projects = [
  {
    title: "Multi-Modal RAG System",
    story: "Built a RAG pipeline that understands both images and text together — ingesting PDFs, Office docs, and images with hybrid retrieval and a cross-modal knowledge graph.",
    technologies: ["Python", "LangChain", "CLIP", "LLMs", "ChromaDB", "MinerU"],
    outcomes: ["99% retrieval accuracy", "Hybrid text and visual retrieval", "Cross-modal knowledge graph"],
    github: "https://github.com/SreeTatikonda/RAG_projects",
    image: multimodalragImg,
    category: "AI & LLM",
  },
  {
    title: "Enterprise Knowledge MCP Server",
    story: "An MCP-compliant server that enables LLM agents to securely retrieve and reason over enterprise knowledge through standardized tool-based context exchange.",
    technologies: ["Python", "FastAPI", "MCP", "LLMs", "RAG", "JSON-RPC"],
    outcomes: ["Reduced hallucinations", "Improved response reliability", "MCP protocol compliant"],
    github: "#",
    image: chestxrayscanImg,
    category: "AI & LLM",
  },
  {
    title: "AI Financial Planning Agent",
    story: "An AI-powered financial planning agent that analyzes transactions, categorizes spending, and generates personalized budgeting insights using LLM-based reasoning and 8 custom tools.",
    technologies: ["Python", "FastAPI", "LLMs", "Ollama", "Gemini API", "SQL"],
    outcomes: ["8 custom tool integrations", "Real-time spending analysis", "Personalized budgeting insights"],
    github: "https://github.com/SreeTatikonda/AI-Financial-Planning-Assistant-",
    image: financialai,
    category: "AI & LLM",
  },
  {
    title: "AI Resume Analyser",
    story: "Job hunting is a guessing game. Built a tool that shows exactly how a resume matches a job posting using semantic similarity and NLP-based skill gap detection.",
    technologies: ["Python", "NLP", "React", "Sentence Transformers", "FastAPI"],
    outcomes: ["Semantic skill gap detection", "Actionable improvement tips", "JD match scoring"],
    github: "https://github.com/SreeTatikonda/AI-Resume_Analyser",
    image: airesumeanalyserImg,
    category: "AI & LLM",
  },
  {
    title: "Chest X-Ray Scan Analysis",
    story: "Wondered if AI could catch what doctors might miss in busy hospitals. Built and evaluated a CNN to detect pneumonia from chest X-rays with clinical-grade accuracy.",
    technologies: ["Python", "PyTorch", "CNN", "OpenCV"],
    outcomes: ["94% detection accuracy", "Grad-CAM explainability", "Evaluated vs radiologist baseline"],
    github: "https://github.com/SreeTatikonda/ChestXray-Scan",
    image: chestxrayscanImg,
    category: "ML & Research",
  },
  {
    title: "Emotion Detection from Text",
    story: "Sentiment is binary. Emotions are not. Fine-tuned DistilBERT to detect nuanced feelings in text across 7 emotion categories with real-time inference.",
    technologies: ["Python", "DistilBERT", "PyTorch", "HuggingFace", "Streamlit"],
    outcomes: ["92% classification accuracy", "7 emotion categories", "Real-time inference"],
    github: "https://github.com/SreeTatikonda/Emotion-Detection-from-Text",
    image: emotionaiImg,
    category: "ML & Research",
  },
  {
    title: "C Compiler",
    story: "Wanted to truly understand how code becomes executable. Built a compiler from scratch covering lexing, parsing, and LLVM-based code generation for a C subset.",
    technologies: ["Python", "LLVM", "C#"],
    outcomes: ["Full lexer to parser to codegen pipeline", "Handles complex C constructs", "LLVM IR output"],
    github: "https://github.com/SreeTatikonda/Compiler---C-Compiler",
    image: compilerImg,
    category: "Software",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built out of curiosity, shipped with intent
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "glass-button text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-card overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" },
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
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground">
                    {project.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.story}</p>

                  {/* Outcomes */}
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
