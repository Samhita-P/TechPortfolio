import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "./SectionHeader";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setStatus("Encrypting payload...");

    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("Establishing secure uplink...");
      await new Promise((r) => setTimeout(r, 1000));

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Transmission successful. Uplink established ✓");
      form.reset();

    } catch (error) {
      console.error(error);
      setStatus("Transmission failed ✕");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          index="06"
          id="transmit.signal()"
          title="Open a transmission."
          kicker="Direct uplink to Samhita's communication terminal. Latency: minimal."
        />

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8">

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="xl:col-span-3 glass-strong rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="font-mono text-[9px] sm:text-[11px] tracking-[0.3em] text-primary mb-5 sm:mb-6">
              /dev/transmit · ENCRYPTED
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="IDENTIFIER"
                placeholder="your name"
                name="from_name"
              />

              <Field
                label="UPLINK ADDRESS"
                placeholder="you@domain.com"
                type="email"
                name="reply_to"
              />
            </div>

            <div className="mt-4">
              <Field
                label="SUBJECT"
                placeholder="opportunity / collaboration / question"
                name="subject"
              />
            </div>

            <div className="mt-4">
              <label className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-muted-foreground">
                PAYLOAD
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Compose your transmission..."
                className="mt-1.5 w-full rounded-lg bg-background/50 border border-input px-3 sm:px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition min-h-[160px] sm:min-h-[200px]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              data-magnetic
              className="mt-6 w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-mono text-xs sm:text-sm tracking-wider glow-cyan hover:scale-[1.03] transition disabled:opacity-60"
            >
              {loading ? (
                <>TRANSMITTING...</>
              ) : (
                <>
                  TRANSMIT SIGNAL
                  <Send className="size-4 transition group-hover:translate-x-1" />
                </>
              )}
            </button>

            {status && (
              <div className="mt-5 font-mono text-[10px] sm:text-xs text-primary animate-pulse break-words">
                {status}
              </div>
            )}
          </motion.form>

          {/* CONTACT INFO */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-2 space-y-3"
          >
            <ContactRow
              icon={Mail}
              label="EMAIL"
              value="samhita.prashanth@gmail.com"
              href="mailto:samhita.prashanth@gmail.com"
            />

            <ContactRow
              icon={MapPin}
              label="COORDINATES"
              value="Bengaluru · India"
            />

            <ContactRow
              icon={Github}
              label="GITHUB"
              value="github.com/samhita-p"
              href="https://github.com/samhita-p"
            />

            <ContactRow
              icon={Linkedin}
              label="LINKEDIN"
              value="linkedin.com/in/samhita-prashanth-153437287"
              href="https://www.linkedin.com/in/samhita-prashanth-153437287"
            />

            <div className="glass rounded-xl p-4 sm:p-5 mt-6">
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-primary">
                SYSTEM STATUS
              </div>

              <div className="mt-3 space-y-2 font-mono text-[10px] sm:text-xs">
                <Row k="availability" v="open · selective" />
                <Row k="response" v="< 24h" />
                <Row k="timezone" v="IST · UTC+5:30" />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24 pb-8 sm:pb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-mono text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
        <div>
          © {new Date().getFullYear()} SAMHITA.OS · ALL SYSTEMS NOMINAL
        </div>

        <div className="max-w-full break-words">
          HINT: TRY{" "}
          <span className="text-primary">
            CTRL + SHIFT + D
          </span>{" "}
          · OR TYPE{" "}
          <span className="text-primary">
            "sudo hire samhita"
          </span>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <div>
      <label className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg bg-background/50 border border-input px-3 sm:px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: any) {
  const inner = (
    <div className="glass rounded-xl p-4 flex items-center gap-3 sm:gap-4 hover:border-primary/60 transition">
      <div className="shrink-0 size-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
        <Icon className="size-4 text-primary" />
      </div>

      <div className="min-w-0">
        <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-muted-foreground">
          {label}
        </div>

        <div className="text-xs sm:text-sm text-foreground break-all">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : inner;
}

function Row({ k, v }: any) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground/90 text-right">{v}</span>
    </div>
  );
}