import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/JOR-Attack",
    user: "@JOR-Attack",
  },
  { label: "LinkedIn", href: "https://linkedin.com", user: "/in/yorkdev" },
  { label: "Twitter", href: "https://twitter.com", user: "@yorkdev" },
  {
    label: "Email",
    href: "mailto:jorenbulo@gmail.com",
    user: "jorenbulo@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="py-32 px-8 md:px-16 bg-ink relative overflow-hidden"
    >
      {/* Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section label */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-px bg-accent" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
          Contacto
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left */}
        <div>
          <h2 className="font-display text-[11vw] md:text-[5.5vw] leading-none text-paper mb-8">
            HABLEMOS
            <br />
            <span className="text-stroke">PRONTO</span>
          </h2>
          <p className="text-paper/50 max-w-sm leading-relaxed mb-12">
            ¿Tienes un proyecto en mente? Me encantaría escucharte. Respondo en
            menos de 24 horas.
          </p>

          {/* Social links */}
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-4 border-b border-paper/10 hover:border-accent transition-all duration-300"
              >
                <span className="font-mono text-xs tracking-widest uppercase text-paper/40 group-hover:text-accent transition-colors">
                  {s.label}
                </span>
                <span className="font-serif text-paper group-hover:text-accent transition-colors flex items-center gap-2">
                  {s.user}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 inline-block transition-transform">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 border border-accent flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l5 5L20 7"
                    stroke="#e8552a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-paper mb-3">
                ¡Mensaje enviado!
              </h3>
              <p className="text-paper/50 font-mono text-sm">
                Te responderé pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="font-mono text-xs tracking-widest uppercase text-paper/30 block mb-2">
                  Nombre
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border-b border-paper/20 focus:border-accent outline-none py-3 text-paper placeholder-paper/20 font-body transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-mono text-xs tracking-widest uppercase text-paper/30 block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b border-paper/20 focus:border-accent outline-none py-3 text-paper placeholder-paper/20 font-body transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs tracking-widest uppercase text-paper/30 block mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-transparent border-b border-paper/20 focus:border-accent outline-none py-3 text-paper placeholder-paper/20 font-body resize-none transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative w-full py-4 bg-accent text-paper font-mono text-xs tracking-widest uppercase overflow-hidden hover:bg-paper hover:text-ink transition-all duration-500 disabled:opacity-50"
              >
                <span className="relative z-10">
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display text-2xl tracking-widest text-paper">
          DEV.
        </span>
        <span className="font-mono text-xs text-paper/20">
          © {new Date().getFullYear()} — Construido con Astro + React + Tailwind
        </span>
        <div className="flex gap-6">
          {socials.slice(0, 3).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-paper/30 hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
