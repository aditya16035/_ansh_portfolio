import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Lightbulb, Trophy } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const stats = [
  { icon: Code, label: "Projects Completed", value: "10+" },
  { icon: Lightbulb, label: "Technologies Learned", value: "20+" },
  { icon: Trophy, label: "Problem Solving", value: "500+" },
  { icon: Briefcase, label: "Internship Experience", value: "1" },
];

const timeline = [
  { year: "2024 – 2028", title: "B.Tech Computer Science", place: "Bennett University", desc: "GPA: 7.87 / 10 — Specialization in AI & ML" },
  { year: "2026 – Present", title: "Data Analyst Intern", place: "Lysandra Group of Companies", desc: "Driving data-informed business decisions" },
  { year: "Always", title: "Continuous Learner", place: "Self-driven", desc: "AI/ML, DSA, System Design, Open Source" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title={<>Curious mind, <span className="text-gradient">builder by heart</span></>} />
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground"
        >
          <p className="text-lg leading-relaxed">
            I'm a Computer Science undergraduate at <span className="text-foreground font-semibold">Bennett University</span>, deeply interested in Artificial Intelligence, Deep Learning, and full-stack engineering.
          </p>
          <p className="leading-relaxed">
            I love turning complex problems into clean, performant products — from training neural nets that predict the next move on a battlefield to shipping health analytics dashboards that actually help people.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl glass p-5 transition-all hover:border-glow"
              >
                <s.icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <GraduationCap className="h-4 w-4 text-primary-foreground" />
                </span>
                <div className="rounded-2xl glass p-5">
                  <div className="text-xs font-mono text-primary">{t.year}</div>
                  <div className="mt-1 text-lg font-semibold">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.place}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
