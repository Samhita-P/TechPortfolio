import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FileText, ExternalLink } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute -top-32 -left-20 size-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            <div className="size-20 rounded-xl glass flex items-center justify-center">
              <FileText className="size-8 text-primary" />
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.3em] text-primary">PUB-001 · IJISRT · 2025</div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight">
                Native Aura: Empowering Karnataka's Tribal Communities via E-Commerce
              </h3>
              <p className="mt-2 text-foreground/70 text-sm max-w-2xl">
                A research framework proposing a digital marketplace bridging tribal artisans
                with global commerce, integrating accessibility-first UX and scalable backends.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["E-Commerce", "Accessibility", "Scalable Systems", "Social Impact"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent border border-accent/30">{t}</span>
                ))}
              </div>
            </div>
            <a
              data-magnetic
              href="#"
              className="font-mono text-xs tracking-wider px-4 py-2 rounded-full glass hover:border-primary/60 hover:text-primary transition flex items-center gap-2"
            >
              READ <ExternalLink className="size-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}