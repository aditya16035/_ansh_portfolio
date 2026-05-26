import { motion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import { ExternalLink, Activity, Shield, Bot, LineChart, Radar } from "lucide-react";

const projects = [
  {
    title: "LifeSync",
    tag: "Full Stack · AI",
    icon: Activity,
    desc: "Full-stack health analytics platform analyzing sleep, stress, posture, diet, exercise and sitting habits — with AI-powered risk insights via Gemini.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini API"],
    tech: ["full", "ai"],
    visual: "lifesync",
  },
  {
    title: "TDASS — Tactical Decision Support",
    tag: "AI · Simulation",
    icon: Shield,
    desc: "AI-driven battlefield intelligence system with a 100K-row synthetic dataset, BiLSTM models hitting 90% validation accuracy, and live tactical HUDs.",
    stack: ["Python", "PyTorch", "Pygame", "Gymnasium", "BiLSTM"],
    tech: ["ai", "ml"],
    visual: "tdass",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "full", label: "Full Stack" },
  { id: "ai", label: "AI" },
  { id: "ml", label: "ML" },
];

function LifeSyncVisual() {
  return (
    <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4">
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="font-mono text-primary">● Health Dashboard</span>
        <Bot className="h-4 w-4 text-accent" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Sleep", "Stress", "Diet"].map((l, i) => (
          <div key={l} className="rounded-lg bg-black/30 p-2">
            <div className="text-[9px] text-muted-foreground">{l}</div>
            <div className="text-sm font-bold text-gradient">{[82, 64, 91][i]}</div>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${[82, 64, 91][i]}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="h-full bg-gradient-primary" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-black/40 p-2 text-[10px]">
        <div className="flex gap-1 text-accent">
          <Bot className="h-3 w-3" /> AI Advisor
        </div>
        <div className="mt-1 text-muted-foreground">"Your sleep dipped 12% — try winding down 30 min earlier tonight."</div>
      </div>
    </div>
  );
}

function TdassVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-destructive/20 to-primary/20 p-4">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-mono text-destructive">● TACTICAL HUD</span>
        <Radar className="h-4 w-4 text-primary animate-pulse" />
      </div>
      <div className="grid grid-cols-6 gap-0.5">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: Math.random() * 0.9 + 0.1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.015 }}
            className="aspect-square rounded-sm"
            style={{
              background: `linear-gradient(135deg, oklch(0.7 0.22 ${20 + Math.random() * 100}), oklch(0.5 0.2 280))`,
            }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-black/40 p-2 text-[10px]">
        <LineChart className="h-3 w-3 text-primary" />
        <span className="text-muted-foreground">Validation acc.</span>
        <span className="ml-auto font-mono font-bold text-gradient">90.4%</span>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.tech.includes(filter));

  return (
    <Section id="projects">
      <SectionHeader eyebrow="Projects" title={<>Things I've <span className="text-gradient">built</span></>} subtitle="Selected work — from full-stack AI products to tactical simulation systems." />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              filter === f.id ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:border-glow"
          >
            <div className="mb-4 h-48 overflow-hidden">
              {p.visual === "lifesync" ? <LifeSyncVisual /> : <TdassVisual />}
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary">
                <p.icon className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-mono text-xs text-primary">{p.tag}</span>
            </div>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">{s}</span>
              ))}
            </div>
            <div className="mt-5">
              <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105">
                <ExternalLink className="h-3 w-3" /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
