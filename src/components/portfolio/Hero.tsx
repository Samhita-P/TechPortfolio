import { motion } from "framer-motion";
import { NeuralOrb } from "./NeuralOrb";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* FLOATING CHIPS */}
      <FloatingChip
        className="right-[4%] top-[18%] xl:right-[6%] xl:top-[28%]"
        delay={0.7}
      >
        response: <span className="text-primary">&lt;24h</span>
      </FloatingChip>

      <FloatingChip
        className="right-[5%] bottom-[10%] xl:right-[10%] xl:bottom-[22%]"
        delay={1.2}
      >
        status: <span className="text-primary">open to opportunities</span>
      </FloatingChip>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT */}
          <div className="order-2 xl:order-1 text-center xl:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex flex-wrap justify-center xl:justify-start items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass text-[10px] sm:text-xs font-mono tracking-wider text-primary"
            >
              <Sparkles className="size-3 sm:size-4" />
              FULL-STACK · AI SYSTEMS · BACKEND ENGINEERING
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="mt-5 sm:mt-6 font-display font-semibold tracking-tight text-gradient glow-text leading-[0.9]
              text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]"
            >
              SAMHITA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-5 max-w-2xl mx-auto xl:mx-0 text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed px-2 sm:px-0"
            >
              <span className="text-primary font-mono text-[11px] sm:text-sm tracking-wider">
                // Full-Stack Developer & Computer Science Undergraduate
              </span>

              <br />
              <br />

              Building scalable digital systems using Flutter, Django,
              Java, Angular, AI integrations, secure authentication,
              and realtime backend infrastructure for practical,
              real-world applications.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3"
            >
              <a
                href="#projects"
                data-magnetic
                className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-mono text-sm tracking-wider glow-cyan transition hover:scale-[1.03]"
              >
                EXPLORE SYSTEMS

                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                data-magnetic
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full glass text-foreground font-mono text-sm tracking-wider hover:border-primary/60 transition"
              >
                ESTABLISH LINK
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-xl mx-auto xl:mx-0"
            >
              <Stat label="TARGET USERS" value="600+" />
              <Stat label="INTERNSHIPS" value="3" />
              <Stat label="LOCATION" value="BLR · IN" />
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
            className="order-1 xl:order-2 relative mx-auto aspect-square
            w-[85vw]
            max-w-[320px]
            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[600px]
            xl:max-w-[700px]
            2xl:max-w-[850px]"
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
      </div>

      {/* SCROLL HINT */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
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
    <div className="glass rounded-2xl px-5 py-5 text-center">
      <div className="text-foreground text-2xl sm:text-3xl font-display">
        {value}
      </div>

      <div className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground">
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
      className={`hidden xl:block absolute glass px-4 py-2 rounded-full font-mono text-[10px] tracking-wider text-foreground/80 animate-float ${className ?? ""}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
}