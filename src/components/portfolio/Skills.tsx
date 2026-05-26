import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Brain, Code2, Database, Server, Users } from "lucide-react";

const technical = [
  { name: "Python", level: 82 },
  { name: "Machine Learning", level: 75 },
  { name: "Deep Learning", level: 68 },
  { name: "Java", level: 70 },
  { name: "C++", level: 65 },
  { name: "SQL", level: 72 },
  { name: "DSA", level: 57 },
  { name: "React", level: 68 },
  { name: "Node.js", level: 70 },
  { name: "Express.js", level: 68 },
  { name: "MongoDB", level: 65 },
  { name: "JWT / REST APIs", level: 70 },
  { name: "OpenCV", level: 62 },
  { name: "Neural Networks", level: 66 },
  { name: "DBMS", level: 72 },
  { name: "Git", level: 78 },
];

const soft = ["Communication", "Teamwork", "Leadership", "Critical Thinking", "Adaptability", "Collaboration", "Time Management", "Quick Learning"];

const stack = ["Python", "Java", "C++", "React", "Node", "Mongo", "TensorFlow", "PyTorch", "OpenCV", "SQL", "Git", "Express", "Gemini", "Pygame", "BiLSTM"];

const cats = [
  { icon: Code2, label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  { icon: Brain, label: "AI / ML", items: ["TensorFlow", "PyTorch", "OpenCV", "BiLSTM", "Neural Nets"] },
  { icon: Server, label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT"] },
  { icon: Database, label: "Data", items: ["MongoDB", "MySQL", "Pandas", "NumPy"] },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Skills" title={<>Tools I use to <span className="text-gradient">ship & think</span></>} />

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cats.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl glass p-5 transition-all hover:border-glow"
          >
            <c.icon className="mb-3 h-6 w-6 text-primary" />
            <div className="font-semibold">{c.label}</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.items.map((i) => (
                <span key={i} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl glass p-6 md:p-8">
          <h3 className="mb-5 flex items-center gap-2 font-semibold"><Code2 className="h-5 w-5 text-primary" /> Technical Proficiency</h3>
          <div className="grid gap-3">
            {technical.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="font-mono text-xs text-primary">{s.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.04, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl glass p-6 md:p-8">
          <h3 className="mb-5 flex items-center gap-2 font-semibold"><Users className="h-5 w-5 text-primary" /> Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {soft.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default rounded-xl glass px-4 py-2 text-sm transition-all hover:border-glow"
              >
                {s}
              </motion.span>
            ))}
          </div>

        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl glass py-5">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="font-mono text-xl font-semibold text-muted-foreground hover:text-primary">
              ✦ {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
