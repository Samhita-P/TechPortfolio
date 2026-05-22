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
    text: "Built AI-powered systems including chatbot integrations, accessibility-focused tools, computer vision solutions, and intelligent real-time applications designed to improve user experience and automation.",
  },

  {
    icon: Network,
    title: "Backend Engineering",
    text: "Experienced in designing scalable backend architectures using Django, Django REST Framework, PostgreSQL, REST APIs, authentication workflows, and efficient server-side business logic.",
  },

  {
    icon: Cpu,
    title: "Cross-Platform Apps",
    text: "Developed responsive cross-platform applications using Flutter and Angular, integrating secure APIs, realtime communication, intuitive interfaces, and production-ready application workflows.",
  },

  {
    icon: ShieldCheck,
    title: "Security & Testing",
    text: "Worked with Keycloak authentication, JWT and OTP security flows, Selenium automation testing, Jira-based defect tracking, Agile QA practices, and secure application deployment strategies.",
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
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10">
        <SectionHeader
          index="01"
          id="profile.read()"
          title="The engineer behind the system."
          kicker="Computer Science undergraduate building scalable AI-driven systems, secure backend architectures, and modern digital platforms."
        />

        <div className="mt-10 grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8">

          {/* MAIN ABOUT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-3 glass rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 size-48 sm:size-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="font-mono text-[9px] sm:text-[11px] tracking-[0.3em] text-primary mb-4">
              /etc/profile.json
            </div>

            <p className="text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed">
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

            <p className="mt-4 text-sm sm:text-base text-foreground/70 leading-relaxed">
              Developed applications designed for{" "}
              <span className="text-accent">
                600+ students and faculty
              </span>{" "}
              featuring AI chatbot integration,
              Keycloak authentication, realtime
              tracking, REST APIs, and scalable
              backend architecture.
            </p>

            <p className="mt-4 text-sm sm:text-base text-foreground/70 leading-relaxed">
              Experienced in backend engineering,
              REST API development, testing automation,
              DevOps workflows, and Agile software
              development through multiple industry
              internships.
            </p>

            <p className="mt-4 text-sm sm:text-base text-foreground/70 leading-relaxed">
              Currently focused on building intelligent
              digital products, accessibility-driven AI
              systems, scalable backend services, and
              secure enterprise-grade software solutions.
            </p>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 gap-4">
              {counters.map((c) => (
                <div
                  key={c.l}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5 text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient">
                    {c.v}
                  </div>

                  <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground mt-2">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FACETS */}
          <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facets.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 sm:p-6 hover:border-primary/50 transition group"
              >
                <f.icon className="size-5 sm:size-6 text-primary group-hover:scale-110 transition" />

                <div className="mt-3 font-display text-lg sm:text-xl">
                  {f.title}
                </div>

                <div className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
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