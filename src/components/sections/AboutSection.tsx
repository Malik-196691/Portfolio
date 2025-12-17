import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Sparkles, Zap, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, performant web applications with modern frameworks",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Implementing intelligent features using OpenAI, LangChain & custom AI solutions",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces that users love to interact with",
    gradient: "from-orange-500 to-yellow-400",
  },
];

const highlights = [
  { icon: Zap, text: "Fast Delivery" },
  { icon: Globe, text: "Global Experience" },
  { icon: Sparkles, text: "Clean Code" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary font-mono text-sm uppercase tracking-wider mb-6"
          >
            <Sparkles className="h-4 w-4" />
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I blend creativity with technical expertise to build web
            applications enhanced with AI that solve real problems
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left side - Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              {/* Profile visual */}
              <div className="relative mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20"
                />

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Code2 className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Full-Stack Developer &{" "}
                <span className="gradient-text">AI Enthusiast</span>
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm passionate about creating exceptional digital experiences.
                My expertise spans from crafting pixel-perfect frontends to
                integrating cutting-edge AI solutions that bring applications to
                life.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether it's building responsive web apps, implementing
                conversational AI, or optimizing user experiences — I approach
                every project with creativity and attention to detail.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-6 group cursor-pointer"
              >
                {/* Icon with gradient background */}
                <div
                  className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">→</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "5+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-5 text-center group"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
