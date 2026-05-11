import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "Initializing SamhitaOS v4.1.2 ...",
  "Mounting /neural/cortex ............ [ OK ]",
  "Loading cognitive modules .......... [ OK ]",
  "Connecting to AI gateway ........... [ OK ]",
  "Calibrating holographic interface .. [ OK ]",
  "Authentication complete. Welcome.",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, lines[i]]);
      setProgress(Math.round(((i + 1) / lines.length) * 100));
      i++;
      if (i >= lines.length) {
        clearInterval(id);
        setTimeout(() => setExiting(true), 500);
        setTimeout(onDone, 1200);
      }
    }, 320);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816] scanline noise"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative z-10 w-[min(560px,90vw)] font-mono text-sm">
            <div className="mb-6 flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-primary glow-cyan animate-pulse-ring" />
              <span className="text-primary tracking-[0.3em] text-xs">SAMHITA.OS</span>
              <span className="ml-auto text-muted-foreground text-xs">{progress}%</span>
            </div>
            <div className="space-y-1.5 text-foreground/80">
              {shown.map((l, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex"
                >
                  <span className="text-primary mr-2">›</span>
                  <span>{l}</span>
                </motion.div>
              ))}
              <div className="text-primary cursor-blink h-5" />
            </div>
            <div className="mt-6 h-[2px] w-full bg-primary/10 overflow-hidden rounded">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}