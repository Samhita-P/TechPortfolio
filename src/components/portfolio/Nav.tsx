import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      let cur = "home";

      for (const it of items) {
        const el = document.getElementById(it.id);

        if (el && el.getBoundingClientRect().top < 180) {
          cur = it.id;
        }
      }

      setActive(cur);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-[1800px] px-3 sm:px-4 md:px-6 lg:px-8">
          <div
            className={`glass rounded-full flex items-center justify-between px-4 sm:px-5 py-2.5 ${
              scrolled ? "ring-glow" : ""
            }`}
          >
            {/* LOGO */}
            <a
              href="#home"
              className="flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-[0.25em] shrink-0"
            >
              <span className="size-2 rounded-full bg-primary glow-cyan" />
              <span className="text-primary">SAMHITA</span>
              <span className="text-muted-foreground">.OS</span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  data-magnetic
                  className={`relative px-3 xl:px-4 py-2 text-xs font-mono tracking-wider rounded-full transition-colors ${
                    active === it.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === it.id && (
                    <span className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/40" />
                  )}

                  <span className="relative">{it.label}</span>
                </a>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                data-magnetic
                className="hidden sm:inline-flex text-[10px] sm:text-xs font-mono tracking-wider px-4 sm:px-5 py-2 rounded-full bg-primary/15 text-primary border border-primary/40 hover:bg-primary/25 transition"
              >
                INITIATE ↗
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden size-10 rounded-full glass flex items-center justify-center text-primary"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm z-50 lg:hidden transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full glass-strong border-l border-primary/20 p-6 pt-24">
          <div className="flex flex-col gap-3">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={closeMenu}
                className={`rounded-xl px-4 py-4 font-mono text-sm tracking-wider transition ${
                  active === it.id
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {it.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 rounded-xl px-4 py-4 bg-primary text-primary-foreground text-center font-mono text-sm tracking-wider glow-cyan"
            >
              INITIATE CONTACT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}