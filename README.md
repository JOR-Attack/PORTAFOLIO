# Portfolio — Astro + React + TailwindCSS

Portafolio personal de desarrollador construido con Astro, React y TailwindCSS.

## 🎨 Diseño

- **Estética**: Editorial / Brutalist-luxury en tonos oscuros (ink/paper/rust)
- **Tipografía**: Bebas Neue (display) · DM Serif Display · JetBrains Mono · Outfit
- **Animaciones**: CSS puro + Intersection Observer para scroll reveal

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de build
npm run preview
```

## 📁 Estructura

```
src/
├── components/
│   ├── Nav.astro          # Navegación fija con menú mobile
│   ├── Hero.astro         # Sección hero con animaciones CSS
│   ├── Marquee.astro      # Ticker animado de tecnologías
│   ├── About.astro        # Sección sobre mí
│   ├── Projects.tsx       # Proyectos con filtrado interactivo (React)
│   ├── Skills.astro       # Barras de habilidades animadas
│   └── Contact.tsx        # Formulario de contacto (React)
├── layouts/
│   └── BaseLayout.astro   # Layout base con meta tags
├── pages/
│   └── index.astro        # Página principal
└── styles/
    └── global.css         # Estilos globales + Tailwind
```

## 🛠 Stack

- **Astro 4** — Framework web con islands architecture
- **React 18** — Componentes interactivos (Projects + Contact)
- **TailwindCSS 3** — Utility-first CSS
- **TypeScript** — Tipado estático

## ✏️ Personalización

1. Edita tu nombre en `Hero.astro` y `Nav.astro`
2. Actualiza los proyectos en `Projects.tsx`
3. Modifica las habilidades en `Skills.astro`
4. Cambia los datos de contacto en `Contact.tsx`
5. Reemplaza la paleta de colores en `tailwind.config.mjs`
