import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

import chestxrayscanImg from "@/assets/projects/chestxrayscan.png";
import multimodalragImg from "@/assets/projects/multimodalrag.png";
import emotionaiImg from "@/assets/projects/emotionai.png";
import airesumeanalyserImg from "@/assets/projects/airesumeanalyser.png";
import compilerImg from "@/assets/projects/compiler.png";
import qkdencryptionImg from "@/assets/projects/qkdencryption.png";
import facerecognitionImg from "@/assets/projects/facerecognition.png";
import financialai from "@/assets/projects/financialai.png";
import moddify from "@/assets/projects/moddify.png";

type Category = "All" | "AI & LLM" | "ML & Research" | "Software";

const categories: Category[] = ["All", "AI & LLM", "ML & Research", "Software"];

const projects = [
  // ── AI & LLM ──────────────────────────────────────────────────────────────
  {
    title: "Multi-Modal RAG System",
    story: "Built a RAG pipeline that goes beyond text — ingesting PDFs, Office docs, and images with hybrid retrieval, MinerU-based parsing, and a cross-modal knowledge graph for unified search.",
    technologies: ["Python", "LangChain", "CLIP", "LLMs", "ChromaDB", "MinerU"],
    outcomes: [
      "99% retrieval accuracy on 1,000+ daily queries",
      "Hybrid text and visual retrieval",
      "Cross-modal knowledge graph with entity extraction",
    ],
    github: "https://github.com/SreeTatikonda/RAG_projects",
    image: multimodalragImg,
    category: "AI & LLM" as Category,
  },
  {
    title: "Code Review AI",
    story: "Fine-tuned DeepSeek-Coder-6.7B with QLoRA on real GitHub PR reviews, served it with vLLM, and streamed feedback token-by-token through a WebSocket interface with a Monaco-style editor.",
    technologies: ["Python", "QLoRA", "DeepSeek-Coder", "vLLM", "FastAPI", "WebSocket", "W&B", "React"],
    outcomes: [
      "QLoRA 4-bit fine-tuning on GitHub PR dataset",
      "vLLM inference with real-time token streaming",
      "W&B experiment tracking across training runs",
    ],
    github: "https://github.com/SreeTatikonda/code-review-ai",
    image: airesumeanalyserImg,
    category: "AI & LLM" as Category,
  },
  {
    title: "Enterprise Knowledge MCP Server",
    story: "An MCP-compliant server that enables LLM agents to securely retrieve and reason over enterprise knowledge through standardized tool-based context exchange.",
    technologies: ["Python", "FastAPI", "MCP", "LLMs", "RAG", "JSON-RPC"],
    outcomes: [
      "MCP protocol compliant tool-based retrieval",
      "Reduced hallucinations on enterprise queries",
      "Standardized context exchange for LLM agents",
    ],
    github: "#",
    image: qkdencryptionImg,
    category: "AI & LLM" as Category,
  },
  {
    title: "AI Financial Planning Agent",
    story: "An AI agent that analyzes transactions, categorizes spending, and generates personalized budgeting insights using LLM reasoning with 8 custom tools including SQL and web search.",
    technologies: ["Python", "FastAPI", "LLMs", "Ollama", "Gemini API", "SQL"],
    outcomes: [
      "8 custom tool integrations",
      "Real-time transaction categorization",
      "Personalized budget recommendations",
    ],
    github: "https://github.com/SreeTatikonda/AI-Financial-Planning-Assistant-",
    image: financialai,
    category: "AI & LLM" as Category,
  },
  {
    title: "TechPulse Newsletter Agent",
    story: "Autonomous LangGraph agent that identifies trending tech topics, curates and summarizes 10 articles, then synthesizes an editorial — using Claude Sonnet for reasoning and Haiku for cost-efficient summarization.",
    technologies: ["Python", "LangGraph", "Claude Sonnet", "Claude Haiku", "Anthropic API", "feedparser"],
    outcomes: [
      "Dual-model cost optimization strategy",
      "Fully autonomous daily newsletter generation",
      "Deduplication system across pipeline runs",
    ],
    github: "https://github.com/SreeTatikonda/TechPulse_Newsletter_Agent",
    image: moddify,
    category: "AI & LLM" as Category,
  },

  // ── ML & Research ─────────────────────────────────────────────────────────
  {
    title: "ATO Fraud Detection System",
    story: "Three-branch fraud detection system combining GraphSAGE for relationship analysis, Isolation Forest and Autoencoder for anomaly detection, and an XGBoost ensemble — all behind a production FastAPI.",
    technologies: ["Python", "GraphSAGE", "XGBoost", "LightGBM", "Isolation Forest", "FastAPI", "scikit-learn"],
    outcomes: [
      "AUC-ROC 0.9732 on 284K transactions",
      "89% fraud detection rate",
      "Under 30ms P95 API latency",
    ],
    github: "https://github.com/SreeTatikonda/Fraud_detection_model",
    image: facerecognitionImg,
    category: "ML & Research" as Category,
  },
  {
    title: "Customer Churn Prediction",
    story: "End-to-end MLOps pipeline for telecom churn — from raw data to a live prediction API with Optuna hyperparameter tuning, SHAP explainability, MLflow tracking, and Evidently AI drift monitoring.",
    technologies: ["Python", "XGBoost", "LightGBM", "MLflow", "Evidently AI", "Optuna", "SHAP", "FastAPI"],
    outcomes: [
      "AUC-ROC 0.873 with Optuna-tuned ensemble",
      "MLflow experiment registry across 200+ runs",
      "Evidently AI drift detection in production",
    ],
    github: "https://github.com/SreeTatikonda/Customer-Churn-Prediction-",
    image: emotionaiImg,
    category: "ML & Research" as Category,
  },
  {
    title: "Chest X-Ray Scan Analysis",
    story: "Trained and evaluated a CNN to detect pneumonia from chest X-rays, with Grad-CAM explainability to surface which image regions drove each prediction.",
    technologies: ["Python", "PyTorch", "CNN", "OpenCV", "Grad-CAM"],
    outcomes: [
      "94% detection accuracy",
      "Grad-CAM visual explainability",
      "Evaluated vs clinical review baseline",
    ],
    github: "https://github.com/SreeTatikonda/ChestXray-Scan",
    image: chestxrayscanImg,
    category: "ML & Research" as Category,
  },

  // ── Software ──────────────────────────────────────────────────────────────
  {
    title: "C Compiler",
    story: "Built a compiler from scratch to understand how code becomes executable — covering lexing, parsing, semantic analysis, and LLVM-based code generation for a C language subset.",
    technologies: ["Python", "LLVM", "C#"],
    outcomes: [
      "Full lexer to parser to codegen pipeline",
      "LLVM IR output",
      "Handles complex C constructs",
    ],
    github: "https://github.com/SreeTatikonda/Compiler---C-Compiler",
    image: compilerImg,
    category: "Software" as Category,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
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

        {/* Project count */}
        <motion.p
          className="text-center text-sm text-muted-foreground mb-8"
          key={activeCategory + "-count"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </motion.p>

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
                className="glass-card overflow-hidden group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden border-b border-border/30 relative shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.story}
                  </p>

                  {/* Outcomes */}
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-md transition-all duration-300 hover:bg-muted hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link pinned to bottom */}
                  <div className="pt-2 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm transition-all duration-300 group/link ${
                        project.github === "#"
                          ? "text-muted-foreground/40 cursor-not-allowed pointer-events-none"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      whileHover={project.github !== "#" ? { x: 4 } : {}}
                      whileTap={project.github !== "#" ? { scale: 0.95 } : {}}
                    >
                      <Github className="w-4 h-4 transition-transform duration-300 group-hover/link:rotate-12" />
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 group-hover/link:after:w-full">
                        {project.github === "#" ? "Coming soon" : "View on GitHub"}
                      </span>
                    </motion.a>
                  </div>
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
