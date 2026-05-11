import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

import {
  Activity,
  Cpu,
  Database,
  GitBranch,
  Users,
  Zap,
} from "lucide-react";

type Project = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  nodes: string[];
  status: string;
};

const projects: Project[] = [
  {
    code: "PRJ-001",

    name: "KSIT Nexus",

    tagline: "Unified digital campus platform",

    description:
      "Built a Flutter + Django campus application featuring AI chatbot integration, anonymous complaints, study groups, digital notice board, and room tracking for students and faculty.",

    stack: [
      "Flutter",
      "Django",
      "DRF",
      "Keycloak",
      "PostgreSQL",
      "JWT",
    ],

    metrics: [
      { label: "target users", value: "600+" },
      { label: "modules", value: "7" },
      { label: "security", value: "Keycloak" },
    ],

    nodes: [
      "AI Chatbot",
      "Study Groups",
      "Notice Board",
      "Room Tracking",
      "Complaint System",
    ],

    status: "ACTIVE",
  },

  {
    code: "PRJ-002",

    name: "CashBee",

    tagline: "Real-time cash delivery platform",

    description:
      "Developing a Flutter + Django-based cash delivery platform with secure Stripe payment integration, Firebase live tracking, and automated Twilio notifications.",

    stack: [
      "Flutter",
      "Django",
      "Stripe",
      "Firebase",
      "Twilio",
    ],

    metrics: [
      { label: "tracking", value: "Firebase" },
      { label: "payments", value: "Stripe" },
      { label: "status", value: "Ongoing" },
    ],

    nodes: [
      "Stripe Payments",
      "Firebase Tracking",
      "Twilio Alerts",
      "Driver Module",
      "Delivery System",
    ],

    status: "ONGOING",
  },

  {
    code: "PRJ-003",

    name: "Visual Accessibility & AI Captioning",

    tagline: "Computer vision accessibility tools",

    description:
      "Built accessibility-focused AI tools using OpenCV, TensorFlow, and Flask for colour-blindness correction and AI-powered image captioning.",

    stack: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Flask",
    ],

    metrics: [
      { label: "improvement", value: "30%" },
      { label: "vision", value: "AI" },
      { label: "focus", value: "Accessibility" },
    ],

    nodes: [
      "OpenCV Vision",
      "AI Captioning",
      "Accessibility",
      "Flask API",
    ],

    status: "RESEARCH",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
    >

      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">

        <SectionHeader
          index="02"
          id="systems.list()"
          title="Systems engineered."
          kicker="Projects focused on scalable backend systems, AI-driven platforms, accessibility tools, and secure full-stack engineering."
        />

        <div className="space-y-8">

          {projects.map((p, i) => (
            <ProjectPanel
              key={p.code}
              project={p}
              index={i}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function ProjectPanel({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
    >

      <div className="absolute -inset-x-20 -top-32 h-64 bg-gradient-to-r from-primary/0 via-primary/15 to-accent/0 blur-3xl opacity-0 group-hover:opacity-100 transition" />

      <div className="grid lg:grid-cols-12 gap-8 relative">

        {/* LEFT */}
        <div className="lg:col-span-4">

          <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-primary">

            <span className="size-1.5 rounded-full bg-primary animate-pulse" />

            {project.code} · {project.status}

          </div>

          <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-tight">
            {project.name}
          </h3>

          <p className="mt-1 text-primary/90 font-mono text-xs tracking-wider uppercase">
            {project.tagline}
          </p>

          <p className="mt-4 text-foreground/75 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">

            {project.stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-primary/10 border border-primary/30 text-primary"
              >
                {s}
              </span>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-8 relative rounded-xl border border-primary/15 bg-[#070b1f]/60 p-6 min-h-[280px] overflow-hidden">

          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="absolute top-3 right-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">

            <Activity className="size-3 text-primary" />

            ARCHITECTURE.MAP

          </div>

          <ArchDiagram
            nodes={project.nodes}
            index={index}
          />

          <div className="absolute bottom-3 inset-x-3 grid grid-cols-3 gap-2 font-mono text-[10px]">

            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="glass rounded-md px-2 py-1.5"
              >

                <div className="text-primary text-sm">
                  {m.value}
                </div>

                <div className="text-muted-foreground tracking-[0.2em] uppercase text-[9px]">
                  {m.label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </motion.article>
  );
}

function ArchDiagram({
  nodes,
  index,
}: {
  nodes: string[];
  index: number;
}) {

  const icons = [
    Database,
    Cpu,
    Zap,
    Users,
    GitBranch,
  ];

  return (
    <div className="relative h-[230px] w-full">

      {/* CORE */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="relative size-20 rounded-full glass-strong flex items-center justify-center">

          <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
            CORE
          </span>

          <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-ring" />

          <div className="absolute -inset-3 rounded-full border border-accent/20 animate-orbit" />

        </div>

      </div>

      {/* NODES */}
      {nodes.map((n, i) => {

        const angle =
          (i / nodes.length) *
            Math.PI *
            2 -
          Math.PI / 2 +
          index * 0.3;

        const r = 38;

        const x =
          50 + Math.cos(angle) * r;

        const y =
          50 +
          Math.sin(angle) *
            r *
            0.7;

        const Icon =
          icons[i % icons.length];

        return (
          <div key={n}>

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >

              <line
                x1="50%"
                y1="50%"
                x2={`${x}%`}
                y2={`${y}%`}
                stroke="url(#connGrad)"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.5"
              />

              <defs>

                <linearGradient
                  id="connGrad"
                  x1="0"
                  x2="1"
                >

                  <stop
                    offset="0"
                    stopColor="oklch(0.78 0.18 210)"
                    stopOpacity="0.8"
                  />

                  <stop
                    offset="1"
                    stopColor="oklch(0.7 0.27 305)"
                    stopOpacity="0.4"
                  />

                </linearGradient>

              </defs>

            </svg>

            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 glass rounded-full px-2.5 py-1.5 font-mono text-[10px] tracking-wider flex items-center gap-1.5 hover:border-primary/60 hover:bg-primary/10 transition"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >

              <Icon className="size-3 text-primary" />

              {n}

            </div>

          </div>
        );
      })}

    </div>
  );
}