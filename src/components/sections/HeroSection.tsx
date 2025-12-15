import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "../MagneticButton";
import HeroBackground from "../HeroBackground";

// Typewriter text component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05,
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};


const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <HeroBackground />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">Available for work</span>
          </motion.div>

          {/* Main headline with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <TypewriterText text="Building " delay={0.3} />
            <span className="gradient-text">
              <TypewriterText text="Digital Experiences" delay={0.8} />
            </span>
            <br />
            <TypewriterText text="That Make an Impact" delay={1.8} />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 3.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
              className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Full-Stack Developer specializing in crafting beautiful, performant web applications 
            with modern technologies. Turning complex problems into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8 py-6 text-lg glow-effect"
              >
                View My Work
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="px-8 py-6 text-lg border-border hover:bg-secondary"
              >
                Get In Touch
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social) => (
              <MagneticButton key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-full glass-card hover:bg-secondary transition-colors"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* Decorative code snippet */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-10 top-1/3 hidden xl:block font-mono text-sm text-right"
      >
        <pre className="text-muted-foreground/50">
{`const developer = {
  name: "Alex Johnson",
  role: "Full-Stack Dev",
  passions: [
    "Clean Code",
    "UI/UX",
    "Performance"
  ]
};`}
        </pre>
      </motion.div>
    </section>
  );
};

export default HeroSection;
