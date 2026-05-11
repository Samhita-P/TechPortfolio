import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups: { name: string; color: string; items: string[] }[] = [
  { name: "Languages", color: "primary", items: ["Python", "Java", "C", "SQL", "TypeScript"] },
  { name: "Frameworks", color: "accent", items: ["Django", "DRF", "Flutter", "Angular"] },
  { name: "AI / ML", color: "primary", items: ["TensorFlow", "OpenCV", "LLM Agents"] },
  { name: "Databases", color: "accent", items: ["PostgreSQL", "MongoDB"] },
  { name: "DevOps", color: "primary", items: ["Docker", "Jenkins", "Git"] },
  { name: "Security", color: "accent", items: ["Keycloak", "JWT"] },
  { name: "Testing & Tools", color: "primary", items: ["Selenium", "Postman", "Figma"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          index="04"
          id="capabilities.map()"
          title="The skill galaxy."
          kicker="Tools, languages and systems orbiting the engineering core. Hover to inspect each cluster."
        />

        {/* Galaxy visual */}
        <div className="relative mx-auto h-[420px] max-w-3xl mb-16 hidden md:block">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-28 rounded-full glass-strong flex items-center justify-center">
            <span className="font-display text-sm tracking-[0.3em] text-gradient">CORE</span>
            <div className="absolute inset-0 rounded-full animate-pulse-ring" />
          </div>
          {[160, 220].map((r, ringIdx) => (
            <div key={r} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="rounded-full border border-primary/15 animate-orbit"
                style={{ width: r * 2, height: r * 2, animationDuration: `${40 + ringIdx * 25}s`, animationDirection: ringIdx % 2 ? "reverse" : "normal" }}
              />
            </div>
          ))}
          {groups.map((g, i) => {
            const ring = i < 4 ? 160 : 220;
            const items = i < 4 ? groups.slice(0, 4) : groups.slice(4);
            const idx = i < 4 ? i : i - 4;
            const total = items.length;
            const angle = (idx / total) * Math.PI * 2 + (i < 4 ? 0 : Math.PI / 4);
            const x = Math.cos(angle) * ring;
            const y = Math.sin(angle) * ring * 0.7;
            return (
              <div
                key={g.name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div className={`glass rounded-full px-3 py-1.5 font-mono text-[10px] tracking-wider ${g.color === "accent" ? "text-accent border-accent/40" : "text-primary"} hover:scale-110 transition cursor-default animate-float`} style={{ animationDelay: `${i * 0.3}s` }}>
                  {g.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Categorized grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-5 hover:border-primary/50 transition"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                <span className={`size-1.5 rounded-full ${g.color === "accent" ? "bg-accent" : "bg-primary"}`} />
                {g.name.toUpperCase()}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md text-xs font-mono bg-foreground/5 border border-border text-foreground/85 hover:border-primary/60 hover:text-primary transition">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}