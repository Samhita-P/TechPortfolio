import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

import {
  Brain,
  Cpu,
  Network,
  ShieldCheck,
} from "lucide-react";

const facets = [
  {
    icon: Brain,
    title: "AI Systems",
    text: "AI chatbot integration, accessibility tools, computer vision, and intelligent real-time applications.",
  },

  {
    icon: Network,
    title: "Backend Engineering",
    text: "Django + DRF APIs, PostgreSQL systems, REST architecture, and scalable backend workflows.",
  },

  {
    icon: Cpu,
    title: "Cross-Platform Apps",
    text: "Flutter and Angular interfaces connected to secure APIs and realtime application systems.",
  },

  {
    icon: ShieldCheck,
    title: "Security & Testing",
    text: "Keycloak, JWT, OTP authentication, Selenium automation, Jira workflows, and Agile testing.",
  },
];

const counters = [
  { v: "600+", l: "Target Users" },
  { v: "3", l: "Industry Internships" },
  { v: "8+", l: "Projects Built" },
  { v: "2", l: "Research Publications" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">

        <SectionHeader
          index="01"
          id="profile.read()"
          title="The engineer behind the system."
          kicker="Computer Science undergraduate building scalable AI-driven systems, secure backend architectures, and modern digital platforms."
        />

        <div className="grid lg:grid-cols-5 gap-8">

          {/* MAIN ABOUT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-2xl p-8 relative overflow-hidden"
          >

            <div className="absolute -top-24 -right-24 size-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="font-mono text-[11px] tracking-[0.3em] text-primary mb-4">
              /etc/profile.json
            </div>

            <p className="text-foreground/85 leading-relaxed">
              Computer Science undergraduate and{" "}
              <span className="text-primary">
                Full-Stack Developer
              </span>{" "}
              specializing in{" "}
              <span className="text-primary">
                Flutter
              </span>{" "}
              and{" "}
              <span className="text-primary">
                Django
              </span>
              -based scalable applications. I build
              AI-driven systems integrating secure
              authentication, realtime infrastructure,
              backend engineering, and modern user
              experiences.
            </p>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              Developed applications designed for{" "}
              <span className="text-accent">
                600+ students and faculty
              </span>{" "}
              featuring AI chatbot integration,
              Keycloak authentication, realtime
              tracking, REST APIs, and scalable
              backend architecture. Experienced in
              backend engineering, REST API
              development, testing automation,
              DevOps workflows, and Agile software
              development through multiple industry
              internships.
            </p>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              Currently focused on building
              intelligent digital products,
              accessibility-driven AI systems,
              scalable backend services, and secure
              enterprise-grade software solutions.
            </p>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              {counters.map((c) => (
                <div
                  key={c.l}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-4"
                >

                  <div className="text-3xl font-display text-gradient">
                    {c.v}
                  </div>

                  <div className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground mt-1">
                    {c.l}
                  </div>

                </div>
              ))}

            </div>

          </motion.div>

          {/* FACETS */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">

            {facets.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:border-primary/50 transition group"
              >

                <f.icon className="size-5 text-primary group-hover:scale-110 transition" />

                <div className="mt-3 font-display text-lg">
                  {f.title}
                </div>

                <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {f.text}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}