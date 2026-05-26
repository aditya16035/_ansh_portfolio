import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import avatar from "@/assets/ansh-character.png";

const floatingIcons = [
  { label: "PY", x: "5%", y: "20%", delay: 0 },
  { label: "JS", x: "85%", y: "15%", delay: 0.5 },
  { label: "⚛", x: "10%", y: "75%", delay: 1 },
  { label: "AI", x: "88%", y: "70%", delay: 1.5 },
  { label: "{ }", x: "92%", y: "40%", delay: 2 },
  { label: "</>", x: "3%", y: "50%", delay: 2.5 },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 grid-bg" />

      {floatingIcons.map((ic) => (
        <motion.div
          key={ic.label}
          className="absolute hidden h-14 w-14 place-items-center rounded-2xl glass font-mono text-sm font-bold text-primary lg:grid"
          style={{ left: ic.x, top: ic.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: ic.delay, ease: "easeInOut" }}
        >
          {ic.label}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Ansh Sharma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex items-center gap-2 font-mono text-lg text-primary md:text-2xl"
          >
            <Sparkles className="h-5 w-5" />
            <TypeAnimation
              sequence={[
                "Data Analyst", 2000,
                "AI/ML Enthusiast", 2000,
                "Full Stack Developer", 2000,
                "Problem Solver", 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
            />
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning,
            Data Analytics, and scalable software development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:border-glow"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="https://linkedin.com/in/ansh-sharma-53b35a411" target="_blank" rel="noopener" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-glow hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-glow hover:text-primary">
              <Github className="h-4 w-4" />
            </a>
            <a href="mailto:anshisabest111@gmail.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-glow hover:text-primary">
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 animate-glow rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <img
              src={avatar}
              alt="Ansh Sharma 3D character avatar"
              width={1024}
              height={1024}
              className="relative h-full w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
