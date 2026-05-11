import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const fakeLogs = [
  "[neural] cortex.warmup ok (12ms)",
  "[deploy] ksit-nexus → release v3.2.1",
  "[ai] embedding cache hit ratio 0.94",
  "[auth] keycloak realm 'campus' verified",
  "[gpu] tensor pipeline streaming · 24fps",
  "[ops] cashbee tx queue drained",
  "[net] uplink samhita.cortex stable · 12ms",
  "[sec] jwt rotation complete",
  "[ml] caption model loaded · acc=0.92",
  "[sys] heartbeat OK",
];

export function DevTerminal() {
  const [open, setOpen] = useState(false);
  const [granted, setGranted] = useState(false);
  const [feed, setFeed] = useState<string[]>([]);

  const buf = useRef("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {

      // OPEN TERMINAL
      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === "D" || e.key === "d")
      ) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }

      // CLOSE TERMINAL
      if (e.key === "Escape") {
        setOpen(false);
      }

      // SAFE KEY HANDLING
      const key = e.key || "";

      // EASTER EGG BUFFER
      if (
        key.length === 1 ||
        key === "Backspace" ||
        key === " "
      ) {

        buf.current = (
          key === "Backspace"
            ? buf.current.slice(0, -1)
            : buf.current + key
        ).slice(-32);

        if (
          buf.current
            .toLowerCase()
            .includes("sudo hire samhita")
        ) {
          setGranted(true);

          buf.current = "";

          setTimeout(() => {
            setGranted(false);
          }, 4000);
        }
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // LIVE TERMINAL FEED
  useEffect(() => {

    if (!open) return;

    setFeed([]);

    let i = 0;

    const id = setInterval(() => {

      setFeed((f) => [
        ...f,
        `${new Date()
          .toISOString()
          .slice(11, 19)}  ${
          fakeLogs[i % fakeLogs.length]
        }`,
      ].slice(-14));

      i++;

    }, 350);

    return () => clearInterval(id);

  }, [open]);

  return (
    <>
      {/* TERMINAL WINDOW */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              type: "spring",
              damping: 22,
              stiffness: 220,
            }}
            className="fixed bottom-4 right-4 z-[80] w-[min(520px,92vw)] glass-strong rounded-xl overflow-hidden font-mono text-xs"
          >

            {/* HEADER */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-primary/5">

              <span
                className="size-2 rounded-full bg-destructive/80 cursor-pointer"
                onClick={() => setOpen(false)}
              />

              <span className="size-2 rounded-full bg-yellow-400/70" />

              <span className="size-2 rounded-full bg-primary" />

              <span className="ml-2 text-[10px] tracking-[0.3em] text-muted-foreground">
                samhita@cortex · /dev/console
              </span>

              <span className="ml-auto text-[10px] tracking-[0.3em] text-primary">
                DEV MODE
              </span>

            </div>

            {/* METRICS */}
            <div className="px-4 py-3 grid grid-cols-3 gap-2 border-b border-primary/10">

              <Metric k="CPU" v="42%" />

              <Metric k="MEM" v="3.1G" />

              <Metric k="LAT" v="12ms" />

            </div>

            {/* TERMINAL FEED */}
            <div className="p-4 h-56 overflow-hidden text-foreground/85 leading-relaxed">

              {feed.map((l, i) => (
                <div
                  key={i}
                  className="opacity-90"
                >
                  <span className="text-primary">
                    ›
                  </span>{" "}
                  {l}
                </div>
              ))}

              <div className="text-primary cursor-blink">
                &nbsp;
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* ACCESS GRANTED POPUP */}
      <AnimatePresence>

        {granted && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            className="fixed inset-0 z-[120] flex items-center justify-center pointer-events-none"
          >

            <div className="glass-strong rounded-2xl px-10 py-8 text-center">

              <div className="font-mono text-[10px] tracking-[0.4em] text-primary">
                SECURITY · OVERRIDE
              </div>

              <div className="mt-3 font-display text-4xl text-gradient glow-text">
                ACCESS GRANTED.
              </div>

              <div className="mt-2 text-xs text-muted-foreground font-mono">
                welcome, recruiter ✦
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}

function Metric({
  k,
  v,
}: {
  k: string;
  v: string;
}) {
  return (
    <div className="rounded-md border border-primary/20 bg-background/40 px-2 py-1.5 text-center">

      <div className="text-[9px] tracking-[0.3em] text-muted-foreground">
        {k}
      </div>

      <div className="text-primary text-sm">
        {v}
      </div>

    </div>
  );
}