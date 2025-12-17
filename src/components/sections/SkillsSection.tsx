import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Server, Brain, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "AI Integration",
    icon: Brain,
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "LangChain", level: 82 },
      { name: "RAG Systems", level: 78 },
      { name: "Prompt Engineering", level: 90 },
      { name: "AI Agents", level: 75 },
    ],
  },
];

const technologies = [
  { name: "React", delay: 0 },
  { name: "Next.js", delay: 0.1 },
  { name: "TypeScript", delay: 0.2 },
  { name: "Node.js", delay: 0.3 },
  { name: "Python", delay: 0.4 },
  { name: "OpenAI", delay: 0.5 },
  { name: "LangChain", delay: 0.6 },
  { name: "GPT-4", delay: 0.7 },
  { name: "PostgreSQL", delay: 0.8 },
  { name: "MongoDB", delay: 0.9 },
  { name: "Docker", delay: 1.0 },
  { name: "AWS", delay: 1.1 },
  { name: "Vercel", delay: 1.2 },
  { name: "Git", delay: 1.3 },
  { name: "Tailwind", delay: 1.4 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-primary/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-accent/10"
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm uppercase tracking-wider">Skills & Expertise</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Technologies I{" "}
            <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        {/* Skill Categories - Bento Grid Style */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              onMouseEnter={() => setActiveCategory(category.title)}
              onMouseLeave={() => setActiveCategory(null)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              <div className="relative glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                {/* Skills list with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.1 + index * 0.08 }}
                      className="group/skill"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.6 + catIndex * 0.1 + index * 0.08 }}
                          className="text-xs font-mono text-muted-foreground"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + catIndex * 0.15 + index * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                        >
                          <motion.div
                            animate={{ x: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-muted-foreground">Full Tech Stack</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + tech.delay * 0.3 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  <div className="px-5 py-3 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-default">
                    <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
