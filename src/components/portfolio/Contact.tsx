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
        "service_r99fq56",
        "template_kfsm39u",
        form,
        "9oBZONhPH0vVXWccr"
      );

      setStatus(
        "Transmission successful. Uplink established ✓"
      );

      form.reset();

    } catch (error) {
      console.error(error);

      setStatus(
        "Transmission failed ✕"
      );
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">

        <SectionHeader
          index="06"
          id="transmit.signal()"
          title="Open a transmission."
          kicker="Direct uplink to Samhita's communication terminal. Latency: minimal."
        />

        <div className="grid lg:grid-cols-5 gap-8">

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong rounded-2xl p-8 relative overflow-hidden"
          >

            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="font-mono text-[11px] tracking-[0.3em] text-primary mb-6">
              /dev/transmit · ENCRYPTED
            </div>

            <div className="grid md:grid-cols-2 gap-4">

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

              <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                PAYLOAD
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Compose your transmission..."
                className="mt-1.5 w-full rounded-lg bg-background/50 border border-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              data-magnetic
              className="mt-6 group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-mono text-sm tracking-wider glow-cyan hover:scale-[1.03] transition disabled:opacity-60"
            >

              {loading ? (
                <>
                  TRANSMITTING...
                </>
              ) : (
                <>
                  TRANSMIT SIGNAL
                  <Send className="size-4 transition group-hover:translate-x-1" />
                </>
              )}

            </button>

            {/* STATUS */}
            {status && (
              <div className="mt-5 font-mono text-xs text-primary animate-pulse">
                {status}
              </div>
            )}

          </motion.form>

          {/* CONTACT INFO */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
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

            <div className="glass rounded-xl p-5 mt-6">

              <div className="font-mono text-[10px] tracking-[0.3em] text-primary">
                SYSTEM STATUS
              </div>

              <div className="mt-3 space-y-2 font-mono text-xs">

                <Row
                  k="availability"
                  v="open · selective"
                />

                <Row
                  k="response"
                  v="< 24h"
                />

                <Row
                  k="timezone"
                  v="IST · UTC+5:30"
                />

              </div>

            </div>

          </motion.aside>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="relative mx-auto max-w-6xl px-6 mt-24 pb-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">

        <div>
          © {new Date().getFullYear()} SAMHITA.OS · ALL SYSTEMS NOMINAL
        </div>

        <div>
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

      <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg bg-background/50 border border-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
      />

    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {

  const inner = (
    <div className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/60 transition">

      <div className="size-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
        <Icon className="size-4 text-primary" />
      </div>

      <div className="min-w-0">

        <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          {label}
        </div>

        <div className="text-sm text-foreground truncate">
          {value}
        </div>

      </div>

    </div>
  );

  return href ? (
    <a
      href={href}
      data-magnetic
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function Row({
  k,
  v,
}: {
  k: string;
  v: string;
}) {
  return (
    <div className="flex justify-between gap-4">

      <span className="text-muted-foreground">
        {k}
      </span>

      <span className="text-foreground/90">
        {v}
      </span>

    </div>
  );
}