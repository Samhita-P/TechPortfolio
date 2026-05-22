import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    id: "PUB-001",
    journal: "IJARCCE",
    year: "2025",
    title: "KSIT Nexus: A Unified Digital Campus Platform",
    description:
      "A unified smart campus ecosystem integrating AI chatbot systems, anonymous complaints, study groups, digital notices, and scalable backend infrastructure for educational institutions.",
    tags: [
      "AI Systems",
      "Campus Platform",
      "Scalable Backend",
      "Flutter",
      "Django",
    ],
    link: "https://doi.org/10.17148/IJARCCE.2025.14599",
  },
  {
    id: "PUB-002",
    journal: "IJISRT",
    year: "2025",
    title:
      "Native Aura: Empowering Karnataka's Tribal Communities via E-Commerce",
    description:
      "A research framework proposing a digital marketplace bridging tribal artisans with global commerce using accessibility-first UX and scalable backend systems.",
    tags: [
      "E-Commerce",
      "Accessibility",
      "Social Impact",
      "Scalable Systems",
      "Digital Inclusion",
    ],
    link: "https://www.ijisrt.com/native-aura-digital-empowerment-of-karnatakas-tribal-communities-through-ecommerce-and-cultural-preservation",
  },
];

export function Publications() {
  return (
    <section
      id="publications"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          id="archive.research()"
          title="Holographic research archive."
          kicker="Peer-reviewed publications and ongoing research transmissions."
        />

        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden"
            >
              <div className="absolute -top-32 -left-20 size-72 rounded-full bg-primary/15 blur-3xl" />

              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] xl:grid-cols-[auto_1fr_auto] gap-5 lg:gap-6 items-start xl:items-center">

                {/* ICON */}
                <div className="size-14 sm:size-16 lg:size-20 rounded-xl glass flex items-center justify-center shrink-0">
                  <FileText className="size-6 sm:size-7 lg:size-8 text-primary" />
                </div>

                {/* CONTENT */}
                <div className="min-w-0">
                  <div className="font-mono text-[8px] sm:text-[10px] lg:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] text-primary break-words">
                    {pub.id} · {pub.journal} · {pub.year}
                  </div>

                  <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight">
                    {pub.title}
                  </h3>

                  <p className="mt-3 text-foreground/70 text-sm sm:text-base leading-relaxed max-w-4xl">
                    {pub.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-mono bg-accent/10 text-accent border border-accent/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-fit justify-center xl:justify-start font-mono text-[10px] sm:text-xs tracking-wider px-4 py-3 rounded-full glass hover:border-primary/60 hover:text-primary transition flex items-center gap-2 h-fit"
                >
                  READ
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}