import { useEffect, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Research" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = "home";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top < 200) cur = it.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`glass rounded-full flex items-center justify-between px-4 py-2.5 ${scrolled ? "ring-glow" : ""}`}>
          <a href="#home" className="flex items-center gap-2 font-mono text-xs tracking-[0.3em]">
            <span className="size-2 rounded-full bg-primary glow-cyan" />
            <span className="text-primary">SAMHITA</span>
            <span className="text-muted-foreground">.OS</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                data-magnetic
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider rounded-full transition-colors ${
                  active === it.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === it.id && (
                  <span className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/40" />
                )}
                <span className="relative">{it.label}</span>
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            data-magnetic
            className="text-xs font-mono tracking-wider px-4 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/40 hover:bg-primary/25 transition"
          >
            INITIATE ↗
          </a>
        </div>
      </div>
    </header>
  );
}