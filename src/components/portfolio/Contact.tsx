import { motion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const cards = [
  { icon: Mail, label: "Email", value: "anshisabest111@gmail.com", href: "mailto:anshisabest111@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 90398 50207", href: "tel:+919039850207" },
  { icon: MapPin, label: "Location", value: "Greater Noida, UP, India", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "ansh-sharma-53b35a411", href: "https://linkedin.com/in/ansh-sharma-53b35a411" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/anshisabest111@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
          _replyto: result.data.email,
          _subject: `Portfolio contact from ${result.data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send your message. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader eyebrow="Contact" title={<>Let's build something <span className="text-gradient">amazing together</span></>} subtitle="Open to internships, collaborations and challenging engineering problems." />

      <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
        <div className="space-y-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:border-glow"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate font-semibold">{c.value}</div>
              </div>
            </motion.a>
          ))}

          <div className="flex gap-3 pt-2">
            <a href="https://linkedin.com/in/ansh-sharma-53b35a411" target="_blank" rel="noopener" className="grid h-12 w-12 place-items-center rounded-xl glass transition-all hover:border-glow hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" className="grid h-12 w-12 place-items-center rounded-xl glass transition-all hover:border-glow hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:anshisabest111@gmail.com" className="grid h-12 w-12 place-items-center rounded-xl glass transition-all hover:border-glow hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="relative mt-4 h-48 overflow-hidden rounded-2xl glass">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 grid-bg" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-gradient-primary shadow-glow"
              >
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </motion.div>
              <div className="text-sm font-semibold">Greater Noida</div>
              <div className="text-xs text-muted-foreground">Uttar Pradesh, India</div>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-strong p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Name</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={6}
              className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="Tell me about your project, role, or idea…"
            />
          </label>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {loading ? "Sending…" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}
