import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "../MagneticButton";

const categories = ["All", "Web App", "Mobile", "SaaS", "E-commerce"];

const projects = [
  {
    id: 1,
    title: "FinTrack Pro",
    description: "A comprehensive financial management dashboard with real-time analytics, budget tracking, and AI-powered insights.",
    category: "SaaS",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "ShopFlow",
    description: "Modern e-commerce platform with seamless checkout, inventory management, and customer analytics.",
    category: "E-commerce",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "TaskMaster",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team chat.",
    category: "Web App",
    tags: ["React", "Socket.io", "Redis", "TypeScript"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "HealthPulse",
    description: "Mobile-first health tracking application with workout plans, nutrition logging, and progress analytics.",
    category: "Mobile",
    tags: ["React Native", "Firebase", "GraphQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "DevConnect",
    description: "Social platform for developers to share projects, collaborate, and find opportunities.",
    category: "Web App",
    tags: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "CryptoWatch",
    description: "Real-time cryptocurrency tracking with portfolio management, alerts, and market analysis.",
    category: "SaaS",
    tags: ["React", "WebSocket", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <MagneticButton key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "glass-card hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative glass-card rounded-xl overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Overlay actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
                >
                  <MagneticButton>
                    <a
                      href={project.liveUrl}
                      className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a
                      href={project.githubUrl}
                      className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </MagneticButton>
                </motion.div>

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-mono bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <MagneticButton>
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
