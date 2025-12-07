import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
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
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "OpenAI", "LangChain", "GPT-4", "Gemini", "Claude",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST",
  "Docker", "AWS", "Vercel", "Git", "Tailwind"
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Technologies I{" "}
            <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                          hoveredSkill === skill.name ? "shadow-[0_0_15px_hsl(var(--primary))]" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                }}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium cursor-default transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
