import { motion } from "framer-motion";

export function SectionHeader({
  index,
  id,
  title,
  kicker,
}: {
  index: string;
  id: string;
  title: string;
  kicker: string;
}) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-mono text-[11px] tracking-[0.4em] text-primary flex items-center gap-3"
      >
        <span className="opacity-60">{index}</span>
        <span className="h-px w-12 bg-primary/40" />
        <span>// {id}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-gradient"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-2xl text-foreground/70"
      >
        {kicker}
      </motion.p>
    </div>
  );
}