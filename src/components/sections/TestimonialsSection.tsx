import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Working with Alex was an absolute pleasure. The attention to detail and technical expertise exceeded our expectations. Our new platform has significantly improved user engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Exceptional full-stack developer who truly understands both the technical and business aspects. Delivered a complex project ahead of schedule with outstanding quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, DigitalFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Alex's ability to translate complex requirements into elegant solutions is remarkable. The code quality and documentation were top-notch.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, AppVenture",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "A rare combination of creativity and technical skill. Alex not only built what we asked for but also suggested improvements that made our product even better.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Quote className="h-[500px] w-[500px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            What Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main testimonial card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 rounded-2xl text-center"
            >
              {/* Quote icon */}
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />

              {/* Content */}
              <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex 
                        ? "w-8 bg-gradient-to-r from-primary to-accent" 
                        : "w-2 bg-muted hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Additional testimonials grid (smaller cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-4 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl text-left transition-all ${
                index === activeIndex 
                  ? "glass-card ring-2 ring-primary/50" 
                  : "glass-card opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                "{testimonial.content}"
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
