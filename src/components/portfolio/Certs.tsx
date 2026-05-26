import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, ExternalLink, Trophy, Zap, Sparkles, BookOpen } from "lucide-react";

const certs = [
  { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", icon: Award },
  { title: "Introduction to Microprocessors", issuer: "Coursera", icon: Zap },
  { title: "Operating System and You: Becoming a Power User", issuer: "Coursera", icon: BookOpen },
];

const achievements = [
  { icon: Trophy, label: "AI / ML Projects", value: "5+" },
  { icon: Sparkles, label: "Workshops", value: "10+" },
  { icon: BookOpen, label: "Always Learning", value: "∞" },
];

export function Certs() {
  return (
    <Section id="certs">
      <SectionHeader eyebrow="Certifications" title={<>Credentials & <span className="text-gradient">achievements</span></>} />

      <div className="grid gap-5 md:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-glow"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <c.icon className="h-5 w-5 text-primary-foreground" />
            </span>
            <h3 className="mt-4 font-semibold leading-snug">{c.title}</h3>
            <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>
            <button className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:underline">
              Verify <ExternalLink className="h-3 w-3" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-center text-2xl font-bold">Achievements & Activities</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl glass p-5 text-center hover:border-glow"
            >
              <a.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <div className="text-3xl font-bold text-gradient">{a.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{a.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
