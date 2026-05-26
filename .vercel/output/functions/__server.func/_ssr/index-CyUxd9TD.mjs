import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { m } from "../_libs/react-type-animation.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useSpring, b as useTransform } from "../_libs/framer-motion.mjs";
import { i as CodeXml, t as Sun, p as Moon, X, o as Menu, s as Sparkles, a as ArrowRight, j as Download, M as Mail, l as Linkedin, G as Github, h as Code, L as Lightbulb, T as Trophy, f as Briefcase, k as GraduationCap, e as Brain, q as Server, D as Database, U as Users, g as Building2, n as MapPin, A as Activity, r as Shield, E as ExternalLink, c as Award, Z as Zap, B as BookOpen, P as Phone, m as LoaderCircle, S as Send, b as ArrowUp, d as Bot, R as Radar, C as ChartLine } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.6 },
      className: "fixed inset-0 z-[200] grid place-items-center bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: 360 },
            transition: { duration: 1.2, repeat: Infinity, ease: "linear" },
            className: "mx-auto h-16 w-16 rounded-full border-2 border-primary/20 border-t-primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            className: "mt-6 font-mono text-sm tracking-widest text-gradient",
            children: "ANSH.DEV — INITIALIZING"
          }
        )
      ] })
    }
  ) });
}
function Cursor() {
  const [pos, setPos] = reactExports.useState({ x: -100, y: -100 });
  const [hover, setHover] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full border border-primary md:block",
        animate: { x: pos.x - 12, y: pos.y - 12, scale: hover ? 2 : 1 },
        transition: { type: "spring", stiffness: 500, damping: 30, mass: 0.3 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-primary md:block",
        animate: { x: pos.x - 4, y: pos.y - 4 },
        transition: { type: "spring", stiffness: 900, damping: 40 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl transition-transform",
        style: {
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          background: "radial-gradient(circle, oklch(0.7 0.22 255 / 0.4), transparent 70%)"
        }
      }
    )
  ] });
}
function Particles() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5
    }));
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 160, 255, 0.6)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(140, 120, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref, className: "pointer-events-none fixed inset-0 z-0 opacity-60" });
}
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [dark, setDark] = reactExports.useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-primary",
        style: { scaleX }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.header,
      {
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "fixed left-1/2 top-4 z-50 w-[min(1100px,95%)] -translate-x-1/2 rounded-2xl glass-strong px-5 py-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient text-lg", children: "Ansh.dev" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                className: "rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
                children: l.label
              },
              l.href
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setDark((d) => !d),
                  "aria-label": "Toggle theme",
                  className: "grid h-9 w-9 place-items-center rounded-lg glass hover:border-glow",
                  children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen((o) => !o),
                  "aria-label": "Menu",
                  className: "grid h-9 w-9 place-items-center rounded-lg glass md:hidden",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.nav,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              className: "overflow-hidden md:hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 pt-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  children: l.label
                },
                l.href
              )) })
            }
          ) })
        ]
      }
    )
  ] });
}
const avatar = "/assets/ansh-character-bmcXYmAK.png";
const floatingIcons = [
  { label: "PY", x: "5%", y: "20%", delay: 0 },
  { label: "JS", x: "85%", y: "15%", delay: 0.5 },
  { label: "⚛", x: "10%", y: "75%", delay: 1 },
  { label: "AI", x: "88%", y: "70%", delay: 1.5 },
  { label: "{ }", x: "92%", y: "40%", delay: 2 },
  { label: "</>", x: "3%", y: "50%", delay: 2.5 }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative flex min-h-screen items-center overflow-hidden pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg" }),
    floatingIcons.map((ic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute hidden h-14 w-14 place-items-center rounded-2xl glass font-mono text-sm font-bold text-primary lg:grid",
        style: { left: ic.x, top: ic.y },
        animate: { y: [0, -20, 0], rotate: [0, 8, 0] },
        transition: { duration: 6, repeat: Infinity, delay: ic.delay, ease: "easeInOut" },
        children: ic.label
      },
      ic.label
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr,1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
              ] }),
              "Available for opportunities"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl",
            children: [
              "Hi, I'm ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Ansh Sharma" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            className: "mt-4 flex items-center gap-2 font-mono text-lg text-primary md:text-2xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                m,
                {
                  sequence: [
                    "Data Analyst",
                    2e3,
                    "AI/ML Enthusiast",
                    2e3,
                    "Full Stack Developer",
                    2e3,
                    "Problem Solver",
                    2e3
                  ],
                  wrapper: "span",
                  repeat: Infinity,
                  speed: 50
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-blink", children: "|" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.6 },
            className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
            children: "Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning, Data Analytics, and scalable software development."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.8 },
            className: "mt-8 flex flex-wrap items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#projects",
                  className: "group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105",
                  children: [
                    "View Projects",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/resume.pdf",
                  download: true,
                  className: "inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:border-glow",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                    " Download Resume"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold hover:bg-white/5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                    " Contact Me"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1 },
            className: "mt-8 flex items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/in/ansh-sharma-53b35a411", target: "_blank", rel: "noopener", "aria-label": "LinkedIn", className: "grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-glow hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener", "aria-label": "GitHub", className: "grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-glow hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:anshisabest111@gmail.com", "aria-label": "Email", className: "grid h-10 w-10 place-items-center rounded-full glass transition-all hover:border-glow hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.3 },
          className: "relative mx-auto aspect-square w-full max-w-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-glow rounded-full bg-gradient-primary opacity-30 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, -15, 0] },
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                className: "relative h-full w-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: avatar,
                    alt: "Ansh Sharma 3D character avatar",
                    width: 1024,
                    height: 1024,
                    className: "relative h-full w-full object-contain drop-shadow-2xl"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { rotate: 360 },
                transition: { duration: 30, repeat: Infinity, ease: "linear" },
                className: "absolute inset-0 rounded-full border border-dashed border-primary/30"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Section({ id, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`, children });
}
function SectionHeader({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: "mb-12 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
          " ",
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold tracking-tight md:text-5xl", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: subtitle })
      ]
    }
  );
}
const stats = [
  { icon: Code, label: "Projects Completed", value: "10+" },
  { icon: Lightbulb, label: "Technologies Learned", value: "20+" },
  { icon: Trophy, label: "Problem Solving", value: "500+" },
  { icon: Briefcase, label: "Internship Experience", value: "1" }
];
const timeline = [
  { year: "2024 – 2028", title: "B.Tech Computer Science", place: "Bennett University", desc: "GPA: 7.87 / 10 — Specialization in AI & ML" },
  { year: "2026 – Present", title: "Data Analyst Intern", place: "Lysandra Group of Companies", desc: "Driving data-informed business decisions" },
  { year: "Always", title: "Continuous Learner", place: "Self-driven", desc: "AI/ML, DSA, System Design, Open Source" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "about", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "About", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Curious mind, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "builder by heart" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "space-y-5 text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
              "I'm a Computer Science undergraduate at ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Bennett University" }),
              ", deeply interested in Artificial Intelligence, Deep Learning, and full-stack engineering."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "I love turning complex problems into clean, performant products — from training neural nets that predict the next move on a battlefield to shipping health analytics dashboards that actually help people." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 pt-2", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                whileHover: { y: -4 },
                className: "group rounded-2xl glass p-5 transition-all hover:border-glow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient", children: s.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
                ]
              },
              s.label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.15 },
                className: "relative pl-14",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-primary-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-primary", children: t.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-semibold", children: t.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t.place }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.desc })
                  ] })
                ]
              },
              t.title
            )) })
          ]
        }
      )
    ] })
  ] });
}
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
  { name: "Git / GitHub", level: 78 }
];
const soft = ["Communication", "Teamwork", "Leadership", "Critical Thinking", "Adaptability", "Collaboration", "Time Management", "Quick Learning"];
const stack = ["Python", "Java", "C++", "React", "Node", "Mongo", "TensorFlow", "PyTorch", "OpenCV", "SQL", "Git", "Express", "Gemini", "Pygame", "BiLSTM"];
const cats = [
  { icon: CodeXml, label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  { icon: Brain, label: "AI / ML", items: ["TensorFlow", "PyTorch", "OpenCV", "BiLSTM", "Neural Nets"] },
  { icon: Server, label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT"] },
  { icon: Database, label: "Data", items: ["MongoDB", "MySQL", "Pandas", "NumPy"] }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "skills", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Skills", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Tools I use to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "ship & think" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: cats.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "group rounded-2xl glass p-5 transition-all hover:border-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "mb-3 h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: c.items.map((i2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground", children: i2 }, i2)) })
        ]
      },
      c.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-5 flex items-center gap-2 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-5 w-5 text-primary" }),
          " Technical Proficiency"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: technical.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.03 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary", children: [
                  s.level,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${s.level}%` },
                  viewport: { once: true },
                  transition: { duration: 1.2, delay: i * 0.04, ease: "easeOut" },
                  className: "h-full rounded-full bg-gradient-primary"
                }
              ) })
            ]
          },
          s.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-5 flex items-center gap-2 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
          " Soft Skills"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: soft.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            whileHover: { scale: 1.05 },
            className: "cursor-default rounded-xl glass px-4 py-2 text-sm transition-all hover:border-glow",
            children: s
          },
          s
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-2xl glass py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee gap-12 whitespace-nowrap", children: [...stack, ...stack].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xl font-semibold text-muted-foreground hover:text-primary", children: [
      "✦ ",
      s
    ] }, i)) }) })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "experience", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Experience", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Where I'm ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "growing" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "group relative overflow-hidden rounded-3xl glass-strong p-6 transition-all hover:border-glow md:p-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-primary opacity-20 blur-3xl transition-opacity group-hover:opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-primary", children: "May 2026 — Present" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold md:text-2xl", children: "Data Analyst Intern" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Lysandra Group of Companies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                " Gurgaon, Haryana"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
              "Prepared executive reports, summaries and visualizations for cross-functional teams",
              "Collected, cleaned and analyzed operational & business data at scale",
              "Identified patterns and trends using Excel, SQL and modern analytics tooling",
              "Supported data-driven decision making with actionable insights",
              "Collaborated closely with stakeholders, product and operations teams"
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" }),
              r
            ] }, r)) })
          ] })
        ]
      }
    )
  ] });
}
const projects = [
  {
    title: "LifeSync",
    tag: "Full Stack · AI",
    icon: Activity,
    desc: "Full-stack health analytics platform analyzing sleep, stress, posture, diet, exercise and sitting habits — with AI-powered risk insights via Gemini.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini API"],
    tech: ["full", "ai"],
    visual: "lifesync"
  },
  {
    title: "TDASS — Tactical Decision Support",
    tag: "AI · Simulation",
    icon: Shield,
    desc: "AI-driven battlefield intelligence system with a 100K-row synthetic dataset, BiLSTM models hitting 90% validation accuracy, and live tactical HUDs.",
    stack: ["Python", "PyTorch", "Pygame", "Gymnasium", "BiLSTM"],
    tech: ["ai", "ml"],
    visual: "tdass"
  }
];
const filters = [
  { id: "all", label: "All" },
  { id: "full", label: "Full Stack" },
  { id: "ai", label: "AI" },
  { id: "ml", label: "ML" }
];
function LifeSyncVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "● Health Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-accent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["Sleep", "Stress", "Diet"].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-black/30 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground", children: l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: [82, 64, 91][i] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { width: 0 }, whileInView: { width: `${[82, 64, 91][i]}%` }, viewport: { once: true }, transition: { delay: i * 0.1 }, className: "h-full bg-gradient-primary" }) })
    ] }, l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-lg bg-black/40 p-2 text-[10px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 text-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3 w-3" }),
        " AI Advisor"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-muted-foreground", children: '"Your sleep dipped 12% — try winding down 30 min earlier tonight."' })
    ] })
  ] });
}
function TdassVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-destructive/20 to-primary/20 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-destructive", children: "● TACTICAL HUD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { className: "h-4 w-4 text-primary animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-0.5", children: Array.from({ length: 36 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: Math.random() * 0.9 + 0.1 },
        viewport: { once: true },
        transition: { delay: i * 0.015 },
        className: "aspect-square rounded-sm",
        style: {
          background: `linear-gradient(135deg, oklch(0.7 0.22 ${20 + Math.random() * 100}), oklch(0.5 0.2 280))`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 rounded-lg bg-black/40 p-2 text-[10px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "h-3 w-3 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Validation acc." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-mono font-bold text-gradient", children: "90.4%" })
    ] })
  ] });
}
function Projects() {
  const [filter, setFilter] = reactExports.useState("all");
  const visible = projects.filter((p) => filter === "all" || p.tech.includes(filter));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "projects", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Projects", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Things I've ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "built" })
    ] }), subtitle: "Selected work — from full-stack AI products to tactical simulation systems." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex flex-wrap justify-center gap-2", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setFilter(f.id),
        className: `rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${filter === f.id ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`,
        children: f.label
      },
      f.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-2", children: visible.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.1 },
        whileHover: { y: -8 },
        className: "group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:border-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 h-48 overflow-hidden", children: p.visual === "lifesync" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LifeSyncVisual, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(TdassVisual, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-4 w-4 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: p.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground", children: s }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
            " Live Demo"
          ] }) })
        ]
      },
      p.title
    )) })
  ] });
}
const certs = [
  { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", icon: Award },
  { title: "Introduction to Microprocessors", issuer: "Coursera", icon: Zap },
  { title: "Operating System and You: Becoming a Power User", issuer: "Coursera", icon: BookOpen }
];
const achievements = [
  { icon: Trophy, label: "AI / ML Projects", value: "5+" },
  { icon: Sparkles, label: "Workshops", value: "10+" },
  { icon: BookOpen, label: "Always Learning", value: "∞" }
];
function Certs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "certs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Certifications", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Credentials & ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "achievements" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: certs.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold leading-snug", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: c.issuer }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 inline-flex items-center gap-1 text-xs text-primary hover:underline", children: [
            "Verify ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
          ] })
        ]
      },
      c.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-6 text-center text-2xl font-bold", children: "Achievements & Activities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: achievements.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          whileHover: { y: -4 },
          className: "rounded-2xl glass p-5 text-center hover:border-glow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "mx-auto mb-2 h-6 w-6 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient", children: a.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: a.label })
          ]
        },
        a.label
      )) })
    ] })
  ] });
}
const schema = objectType({
  name: stringType().trim().min(1, "Name required").max(100),
  email: stringType().trim().email("Invalid email").max(255),
  message: stringType().trim().min(5, "Message too short").max(1e3)
});
const cards = [
  { icon: Mail, label: "Email", value: "anshisabest111@gmail.com", href: "mailto:anshisabest111@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 90398 50207", href: "tel:+919039850207" },
  { icon: MapPin, label: "Location", value: "Greater Noida, UP, India", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "ansh-sharma-53b35a411", href: "https://linkedin.com/in/ansh-sharma-53b35a411" }
];
function Contact() {
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const submit = async (e) => {
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
          _captcha: "false"
        })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "contact", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's build something ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "amazing together" })
    ] }), subtitle: "Open to internships, collaborations and challenging engineering problems." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr,1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: c.href,
            target: c.href.startsWith("http") ? "_blank" : void 0,
            rel: "noopener",
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            whileHover: { x: 6 },
            className: "group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:border-glow",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: c.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-semibold", children: c.value })
              ] })
            ]
          },
          c.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/in/ansh-sharma-53b35a411", target: "_blank", rel: "noopener", className: "grid h-12 w-12 place-items-center rounded-xl glass transition-all hover:border-glow hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener", className: "grid h-12 w-12 place-items-center rounded-xl glass transition-all hover:border-glow hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:anshisabest111@gmail.com", className: "grid h-12 w-12 place-items-center rounded-xl glass transition-all hover:border-glow hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-4 h-48 overflow-hidden rounded-2xl glass", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, -8, 0] },
                transition: { duration: 2, repeat: Infinity },
                className: "mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-gradient-primary shadow-glow",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary-foreground" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Greater Noida" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Uttar Pradesh, India" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          onSubmit: submit,
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "rounded-3xl glass-strong p-6 md:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    maxLength: 100,
                    className: "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30",
                    placeholder: "Your name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    value: form.email,
                    onChange: (e) => setForm({ ...form, email: e.target.value }),
                    maxLength: 255,
                    className: "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30",
                    placeholder: "you@email.com"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: form.message,
                  onChange: (e) => setForm({ ...form, message: e.target.value }),
                  maxLength: 1e3,
                  rows: 6,
                  className: "w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30",
                  placeholder: "Tell me about your project, role, or idea…"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                type: "submit",
                disabled: loading,
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60",
                children: [
                  loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  loading ? "Sending…" : "Send Message"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Footer() {
  const { scrollYProgress } = useScroll();
  const show = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gradient text-2xl font-bold", children: "Ansh Sharma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Building the future, one commit at a time." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.a,
      {
        href: "#home",
        style: { opacity: show },
        className: "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary shadow-glow transition-transform hover:scale-110",
        "aria-label": "Back to top",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-5 w-5 text-primary-foreground" })
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Certs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-center" })
  ] });
}
export {
  Index as component
};
