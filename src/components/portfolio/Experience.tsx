import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const logs = [
  {
    time: "2025.PRESENT",
    org: "Mphasis",
    role: "AI / Software Engineering Intern",
    notes: [
      "Engineering AI-augmented enterprise systems",
      "Working across cognitive pipelines and scalable services",
      "Production-grade integration & deployment",
    ],
    color: "primary",
  },
  {
    time: "2024",
    org: "Sisail Pvt Ltd",
    role: "Full-Stack Developer Intern",
    notes: [
      "Built Django + Flutter modules for live products",
      "Designed REST APIs and auth flows (Keycloak, JWT)",
      "Shipped features serving real end-users",
    ],
    color: "accent",
  },
  {
    time: "2024",
    org: "Bobler",
    role: "Software Engineering Intern",
    notes: [
      "Contributed to scalable backend architecture",
      "Implemented APIs, integrations and test pipelines",
      "Operated in Agile sprint workflows",
    ],
    color: "primary",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          index="03"
          id="journal.tail()"
          title="Activity log."
          kicker="A live tail of where the engineering happened — internships and hands-on production missions."
        />

        <div className="glass rounded-2xl p-6 md:p-8 font-mono text-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <span className="size-2 rounded-full bg-destructive/80" />
            <span className="size-2 rounded-full bg-yellow-400/70" />
            <span className="size-2 rounded-full bg-primary" />
            <span className="ml-3 text-[11px] tracking-[0.3em] text-muted-foreground">samhita@cortex:~/journal $ tail -f</span>
          </div>

          <ol className="relative pl-6 border-l border-primary/30 space-y-8">
            {logs.map((l, i) => (
              <motion.li
                key={l.org}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className={`absolute -left-[31px] top-1 size-3 rounded-full ${l.color === "accent" ? "bg-accent" : "bg-primary"} ring-4 ring-background animate-pulse`} />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-[11px] tracking-[0.3em] text-muted-foreground">[{l.time}]</span>
                  <span className="text-primary text-base font-display tracking-wide">{l.org}</span>
                  <span className="text-foreground/60 text-xs">› {l.role}</span>
                </div>
                <ul className="mt-2 space-y-1 text-foreground/75 text-[13px]">
                  {l.notes.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span className="text-primary">›</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 text-primary/80 text-[12px] cursor-blink">awaiting next mission</div>
        </div>
      </div>
    </section>
  );
}