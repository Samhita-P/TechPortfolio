import { motion } from "framer-motion";
import { NeuralOrb } from "./NeuralOrb";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* FLOATING STATUS CHIPS */}
      <FloatingChip
        className="left-[6%] top-[22%]"
        delay={0.4}
      >
        <span className="text-primary">●</span>{" "}
        backend.systems: ACTIVE
      </FloatingChip>

      <FloatingChip
        className="right-[6%] top-[28%]"
        delay={0.7}
      >
        response:{" "}
        <span className="text-primary">
          &lt;24h
        </span>
      </FloatingChip>

      <FloatingChip
        className="left-[8%] bottom-[26%]"
        delay={1.0}
      >
        projects:{" "}
        <span className="text-accent">
          3 major systems
        </span>
      </FloatingChip>

      <FloatingChip
        className="right-[10%] bottom-[22%]"
        delay={1.2}
      >
        status:{" "}
        <span className="text-primary">
          open to opportunities
        </span>
      </FloatingChip>

      <div className="relative z-10 mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono tracking-wider text-primary"
          >
            <Sparkles className="size-3" />
            FULL-STACK · AI SYSTEMS · BACKEND ENGINEERING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] font-semibold tracking-tight text-gradient glow-text"
          >
            SAMHITA{" "}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-5 max-w-xl text-lg text-foreground/80 leading-relaxed"
          >
            <span className="text-primary font-mono text-sm tracking-wider">
              // Full-Stack Developer & Computer Science Undergraduate
            </span>

            <br />

            Building scalable digital systems using
            Flutter, Django, Java, Angular, AI integrations,
            secure authentication, and realtime
            backend infrastructure for practical,
            real-world applications.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >

            <a
              href="#projects"
              data-magnetic
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-mono text-sm tracking-wider glow-cyan transition hover:scale-[1.03]"
            >
              EXPLORE SYSTEMS

              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              data-magnetic
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-foreground font-mono text-sm tracking-wider hover:border-primary/60 transition"
            >
              ESTABLISH LINK
            </a>

          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-6 font-mono text-xs text-muted-foreground"
          >

            <Stat
              label="TARGET USERS"
              value="600+"
            />

            <span className="h-8 w-px bg-border" />

            <Stat
              label="INTERNSHIPS"
              value="3"
            />

            <span className="h-8 w-px bg-border" />

            <Stat
              label="LOCATION"
              value="BLR · IN"
            />

          </motion.div>

        </div>

        {/* RIGHT ORB */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="relative aspect-square w-full max-w-[560px] ml-auto"
        >

          <NeuralOrb />

          <div
            className="absolute -inset-2 rounded-full pointer-events-none"
            style={{
              boxShadow: "var(--shadow-glow)",
            }}
          />

        </motion.div>

      </div>

      {/* SCROLL HINT */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
        SCROLL ↓ INITIATE SEQUENCE
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <div className="text-foreground text-xl font-display">
        {value}
      </div>

      <div className="text-[10px] tracking-[0.3em]">
        {label}
      </div>

    </div>
  );
}

function FloatingChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.8,
      }}
      className={`hidden lg:block absolute glass px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider text-foreground/80 animate-float ${className ?? ""}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}