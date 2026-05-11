import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Brain, Cpu, Network, ShieldCheck } from "lucide-react";

const facets = [
  { icon: Brain, title: "Cognitive AI", text: "LLM integration, agents, retrieval pipelines, vision systems." },
  { icon: Network, title: "Scalable Backends", text: "Django + DRF, microservices, REST, async pipelines." },
  { icon: Cpu, title: "Cross-Platform", text: "Flutter & Angular interfaces wired to production APIs." },
  { icon: ShieldCheck, title: "Identity & Auth", text: "Keycloak, JWT, OTP — secure-by-default architecture." },
];

const counters = [
  { v: "600+", l: "Active Users" },
  { v: "3", l: "Internships" },
  { v: "8+", l: "Shipped Systems" },
  { v: "1", l: "Published Paper" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          index="01"
          id="profile.read()"
          title="The engineer behind the system."
          kicker="Computer Science undergraduate engineering AI-driven products that scale — from neural backends to immersive frontends."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 size-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary mb-4">/etc/profile.json</div>
            <p className="text-foreground/85 leading-relaxed">
              Full-Stack Developer specializing in <span className="text-primary">Flutter</span> and{" "}
              <span className="text-primary">Django</span>-based scalable applications. I architect platforms that
              fuse AI cognition with production-grade systems — built, deployed, and serving real users.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Recent systems serve <span className="text-accent">600+ users</span> with AI chatbot integration,
              Keycloak authentication, real-time tracking, and resilient backends. I work fluently across
              REST APIs, microservices, AI systems, scalable engineering, backend architecture, and Agile teams.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {counters.map((c) => (
                <div key={c.l} className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="text-3xl font-display text-gradient">{c.v}</div>
                  <div className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground mt-1">{c.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {facets.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:border-primary/50 transition group"
              >
                <f.icon className="size-5 text-primary group-hover:scale-110 transition" />
                <div className="mt-3 font-display text-lg">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}