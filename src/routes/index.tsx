import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BootSequence } from "@/components/portfolio/BootSequence";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Publications } from "@/components/portfolio/Publications";
import { Contact } from "@/components/portfolio/Contact";
import { DevTerminal } from "@/components/portfolio/DevTerminal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "SamhitaOS",
      },

      {
        name: "description",
        content:
          "Portfolio of Samhita P — Full-Stack Developer and Computer Science undergraduate building scalable backend systems, AI-integrated platforms, and secure digital applications.",
      },

      {
        property: "og:title",
        content:
          "Samhita — AI Systems & Full-Stack Engineer",
      },

      {
        property: "og:description",
        content:
          "Explore projects, backend systems, AI integrations, Flutter applications, and scalable engineering work by Samhita.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),

  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  return (
    <div className="relative min-h-screen text-foreground antialiased">
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <DevTerminal />
    </div>
  );
}
