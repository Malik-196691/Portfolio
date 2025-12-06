import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading the development of enterprise SaaS applications. Managing a team of 5 developers and architecting scalable solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Led migration to microservices architecture",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Built and maintained multiple client-facing web applications using React and Node.js.",
    achievements: [
      "Developed 15+ production applications",
      "Mentored junior developers",
      "Introduced TypeScript to the codebase",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "DigitalAgency",
    location: "Remote",
    period: "2019 - 2020",
    description: "Created responsive web interfaces and interactive user experiences for various clients.",
    achievements: [
      "Delivered 20+ client projects on time",
      "Improved page load times by 50%",
      "Built reusable component library",
    ],
    current: false,
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "WebStudio",
    location: "Austin, TX",
    period: "2018 - 2019",
    description: "Started my professional journey building websites and learning modern web technologies.",
    achievements: [
      "Built first production React application",
      "Learned Agile development practices",
      "Contributed to open-source projects",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-0 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-accent ring-4 ring-background ${
                  index % 2 === 0 ? "left-0 md:left-1/2 md:-translate-x-1/2" : "left-0 md:left-1/2 md:-translate-x-1/2"
                }`}
              >
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content card */}
              <div 
                className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-xl hover:bg-secondary/30 transition-colors"
                >
                  {/* Header */}
                  <div className={`flex flex-wrap items-start gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.current && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        Current
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className={`text-sm flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
