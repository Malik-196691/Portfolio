import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "5+", label: "Years Experience" },
  { icon: Rocket, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

const timeline = [
  { year: "2019", title: "Started Coding Journey", description: "Fell in love with web development" },
  { year: "2020", title: "First Developer Job", description: "Joined a startup as Junior Dev" },
  { year: "2021", title: "Senior Developer", description: "Led a team of 5 developers" },
  { year: "2023", title: "Freelance & Consulting", description: "Working with global clients" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Crafting Code with{" "}
            <span className="gradient-text">Passion</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience in building 
              exceptional digital experiences. I specialize in React, Node.js, and modern web 
              technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines clean code practices with creative problem-solving. I believe 
              great software should not only work flawlessly but also provide an intuitive and 
              delightful user experience.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl group hover:bg-secondary/50 transition-colors"
                >
                  <stat.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="relative pl-20 pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-1 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-accent ring-4 ring-background" />
                
                {/* Year badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-2">
                  {item.year}
                </span>
                
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
