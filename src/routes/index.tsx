import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/portfolio/Loader";
import { Cursor } from "@/components/portfolio/Cursor";
import { Particles } from "@/components/portfolio/Particles";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certs } from "@/components/portfolio/Certs";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ansh Sharma — AI/ML Engineer & Full Stack Developer" },
      { name: "description", content: "Portfolio of Ansh Sharma — CS undergraduate, AI/ML enthusiast, full-stack developer and data analyst." },
      { property: "og:title", content: "Ansh Sharma — AI/ML Engineer & Full Stack Developer" },
      { property: "og:description", content: "Premium portfolio showcasing projects in AI, ML, and full-stack engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Cursor />
      <Particles />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certs />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
}
