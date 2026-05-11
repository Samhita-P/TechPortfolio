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
link: "https://www.ijisrt.com/native-aura-digital-empowerment-of-karnatakas-tribal-communities-through-ecommerce-and-cultural-preservation",  },
];

export function Publications() {
  return (
    <section id="publications" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          index="05"
          id="archive.research()"
          title="Holographic research archive."
          kicker="Peer-reviewed publications and ongoing research transmissions."
        />

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Glow Effects */}
              <div className="absolute -top-32 -left-20 size-72 rounded-full bg-primary/15 blur-3xl" />

              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                {/* Icon */}
                <div className="size-20 rounded-xl glass flex items-center justify-center">
                  <FileText className="size-8 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <div className="font-mono text-[11px] tracking-[0.3em] text-primary">
                    {pub.id} · {pub.journal} · {pub.year}
                  </div>

                  <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight">
                    {pub.title}
                  </h3>

                  <p className="mt-3 text-foreground/70 text-sm max-w-3xl leading-relaxed">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-accent/10 text-accent border border-accent/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <a
                  data-magnetic
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-wider px-4 py-2 rounded-full glass hover:border-primary/60 hover:text-primary transition flex items-center gap-2 h-fit"
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
