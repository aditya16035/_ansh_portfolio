import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Building2, MapPin } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title={<>Where I'm <span className="text-gradient">growing</span></>} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-3xl glass-strong p-6 transition-all hover:border-glow md:p-10"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl transition-opacity group-hover:opacity-40" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </span>
            <div>
              <div className="text-xs font-mono text-primary">May 2026 — Present</div>
              <h3 className="text-xl font-bold md:text-2xl">Data Analyst Intern</h3>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Lysandra Group of Companies</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Gurgaon, Haryana</span>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {[
              "Prepared executive reports, summaries and visualizations for cross-functional teams",
              "Collected, cleaned and analyzed operational & business data at scale",
              "Identified patterns and trends using Excel, SQL and modern analytics tooling",
              "Supported data-driven decision making with actionable insights",
              "Collaborated closely with stakeholders, product and operations teams",
            ].map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}

