import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { scrollYProgress } = useScroll();
  const show = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 text-center">
        <div className="text-gradient text-2xl font-bold">Ansh Sharma</div>
        <p className="mt-2 text-sm text-muted-foreground">Building the future, one commit at a time.</p>
      </div>

      <motion.a
        href="#home"
        style={{ opacity: show }}
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary shadow-glow transition-transform hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 text-primary-foreground" />
      </motion.a>
    </footer>
  );
}
