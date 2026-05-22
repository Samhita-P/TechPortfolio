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
    <div className="mb-10 sm:mb-12 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.4em] text-primary"
      >
        <span className="opacity-60 shrink-0">
          {index}
        </span>

        <span className="h-px w-8 sm:w-12 bg-primary/40 shrink-0" />

        <span className="break-all">
          // {id}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-gradient leading-tight"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-2xl text-sm sm:text-base text-foreground/70 leading-relaxed"
      >
        {kicker}
      </motion.p>
    </div>
  );
}