import { useState } from "react";

const projects = [
  {
    id: 1,
    number: "001",
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2024",
    description:
      "Plataforma de comercio electrónico con carrito en tiempo real, pasarela de pagos y panel de administración.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    color: "#e8552a",
    link: "#",
  },
  {
    id: 2,
    number: "002",
    title: "Dashboard Analytics",
    category: "Frontend",
    year: "2024",
    description:
      "Dashboard interactivo con visualizaciones de datos en tiempo real, filtros avanzados y reportes exportables.",
    tech: ["React", "D3.js", "TailwindCSS", "FastAPI"],
    color: "#d4a843",
    link: "#",
  },
  {
    id: 3,
    number: "003",
    title: "App Móvil Social",
    category: "Mobile",
    year: "2023",
    description:
      "Red social para fotógrafos con feed infinito, sistema de seguidores y galería personalizada.",
    tech: ["React Native", "Node.js", "MongoDB", "AWS S3"],
    color: "#4a9eff",
    link: "#",
  },
  {
    id: 4,
    number: "004",
    title: "CMS Headless",
    category: "Full Stack",
    year: "2023",
    description:
      "Sistema de gestión de contenidos headless con API REST, roles de usuario y preview en vivo.",
    tech: ["Astro", "Strapi", "GraphQL", "Redis"],
    color: "#8b5cf6",
    link: "#",
  },
  {
    id: 5,
    number: "005",
    title: "CLI Dev Tools",
    category: "Backend",
    year: "2023",
    description:
      "Suite de herramientas CLI para automatizar flujos de trabajo de desarrollo, deploy y generación de código.",
    tech: ["Node.js", "TypeScript", "Docker", "GitHub Actions"],
    color: "#22c55e",
    link: "#",
  },
];

const categories = ["Todos", "Full Stack", "Frontend", "Mobile", "Backend"];

export default function Projects() {
  const [active, setActive] = useState("Todos");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="proyectos"
      className="py-32 px-8 md:px-16 bg-ink relative overflow-hidden"
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-px bg-accent" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
          Proyectos
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <h2 className="font-display text-[12vw] md:text-[7vw] leading-none text-paper">
          TRABAJO
          <br />
          <span className="text-stroke">RECIENTE</span>
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                active === cat
                  ? "bg-accent text-paper"
                  : "border border-paper/20 text-paper/50 hover:border-paper/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-0">
        {filtered.map((project, i) => (
          <a
            href={project.link}
            key={project.id}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-paper/10 hover:border-paper/30 transition-all duration-500 cursor-pointer block"
          >
            {/* Hover background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: project.color }}
            />

            <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1">
              {/* Number */}
              <span
                className="font-mono text-xs text-paper/20 group-hover:text-paper/40 transition-colors shrink-0 mt-1 md:mt-0"
              >
                {project.number}
              </span>

              {/* Title + description */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-paper group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 border w-fit transition-colors duration-300"
                    style={{
                      borderColor: hovered === project.id ? project.color : "rgba(245,240,232,0.2)",
                      color: hovered === project.id ? project.color : "rgba(245,240,232,0.4)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-paper/40 text-sm max-w-xl group-hover:text-paper/60 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6 mt-4 md:mt-0 ml-12 md:ml-0 shrink-0">
              {/* Tech stack */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] tracking-wider text-paper/30">
                    {t}
                  </span>
                ))}
              </div>

              <span className="font-mono text-xs text-paper/20 hidden md:block">
                {project.year}
              </span>

              {/* Arrow */}
              <div
                className="w-10 h-10 border border-paper/20 group-hover:border-current flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shrink-0"
                style={{ color: hovered === project.id ? project.color : undefined }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M8 2L13 7L8 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom line */}
      <div className="border-t border-paper/10 mt-0" />
    </section>
  );
}
