import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and real-time inventory management. Built with React, Node.js, and PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Interactive dashboard featuring machine learning predictions, data visualization, and automated reporting. Leverages Python, TensorFlow, and D3.js.",
    tags: ["Python", "TensorFlow", "D3.js", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable messaging platform with WebSocket integration, end-to-end encryption, and multi-platform support using React Native.",
    tags: ["React Native", "Socket.io", "MongoDB", "Redis"],
    github: "#",
    live: "#",
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "DevOps tool for managing AWS resources, automating deployments, and monitoring system health. Built with Python and Terraform.",
    tags: ["Python", "AWS", "Terraform", "Docker"],
    github: "#",
    live: "#",
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
            A showcase of my recent work and personal projects
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
              whileHover={{ y: -5 }}
            >
              {/* Project screenshot placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-blue-400/10 flex items-center justify-center border-b border-white/20">
                <FolderOpen className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;