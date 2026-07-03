import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Menu, ArrowRight, Cpu, Factory, Boxes, LineChart, ShieldCheck, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

const heroSlides = [
  {
    eyebrow: "Ingeniería industrial avanzada",
    title: "Transformación industrial con una estética más sólida, técnica y corporativa.",
    text: "Rediseño inspirado en la estructura visual de grandes grupos industriales: jerarquía clara, secciones amplias y una presentación más premium.",
    cta: "Descubrir soluciones",
  },
  {
    eyebrow: "Automatización e IA",
    title: "Una portada con impacto visual y mensajes más directos.",
    text: "Bloques grandes, navegación ordenada y llamadas a la acción visibles para reforzar confianza y claridad comercial.",
    cta: "Ver capacidades",
  },
];

const pillars = [
  {
    icon: Cpu,
    title: "Inteligencia artificial aplicada",
    text: "Automatización de decisiones, análisis operativo y asistencia inteligente en procesos industriales.",
  },
  {
    icon: Factory,
    title: "Ingeniería y automatización",
    text: "Integración técnica, mejora de procesos y digitalización con enfoque industrial real.",
  },
  {
    icon: Boxes,
    title: "Control de materiales",
    text: "Trazabilidad, coordinación en campo y visión unificada de recursos y operaciones.",
  },
  {
    icon: LineChart,
    title: "Datos y rendimiento",
    text: "Paneles, indicadores y seguimiento para convertir información en decisiones.",
  },
];

const featured = [
  {
    category: "Soluciones",
    title: "Una arquitectura de servicios más clara y escalable.",
    text: "Sustituye bloques sueltos por una estructura de familia de soluciones, con lectura rápida y mayor sensación de empresa consolidada.",
  },
  {
    category: "Operaciones",
    title: "Secciones editoriales amplias con foco en valor real.",
    text: "El diseño prioriza titulares fuertes, fondos con contraste y módulos que permiten crecer la web sin perder coherencia.",
  },
  {
    category: "Tecnología",
    title: "Más jerarquía visual, menos ruido.",
    text: "Tipografía grande, márgenes amplios, tarjetas limpias y CTAs mejor ubicados para guiar al visitante.",
  },
];

const capabilities = [
  "Automatización industrial",
  "Ingeniería digital",
  "IA para operaciones",
  "Control de materiales",
  "Integración de sistemas",
  "Analítica y seguimiento",
  "Soporte técnico",
  "Optimización de procesos",
];

const trust = [
  {
    title: "Diseño corporativo",
    text: "Más credibilidad visual desde el primer scroll.",
  },
  {
    title: "Estructura modular",
    text: "Preparada para crecer con nuevos apartados y casos.",
  },
  {
    title: "Mensaje más nítido",
    text: "Cada bloque tiene una función comercial concreta.",
  },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="text-base leading-7 text-slate-300 md:text-lg">{text}</p>}
    </div>
  );
}

export default function RitealmarRedesign() {
  return (
    <div className="min-h-screen bg-[#07111c] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111c]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-cyan-400/40 bg-cyan-400/10" />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Ritealmar</p>
              <p className="text-sm text-slate-300">Ingeniería, IA y automatización</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            <a className="text-sm text-slate-200 transition hover:text-white" href="#soluciones">Soluciones</a>
            <a className="text-sm text-slate-200 transition hover:text-white" href="#capacidades">Capacidades</a>
            <a className="text-sm text-slate-200 transition hover:text-white" href="#enfoque">Enfoque</a>
            <a className="text-sm text-slate-200 transition hover:text-white" href="#contacto">Contacto</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden rounded-full bg-white px-5 text-[#07111c] hover:bg-slate-100 lg:inline-flex">
              Solicitar propuesta
            </Button>
            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_28%),linear-gradient(180deg,#08121f_0%,#07111c_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <ShieldCheck className="h-4 w-4" />
              Nueva dirección visual para Ritealmar
            </div>

            <div className="space-y-8">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={slide.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={index === 0 ? "block" : "hidden md:block"}
                >
                  <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300">{slide.eyebrow}</p>
                  <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{slide.text}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="rounded-full bg-white px-6 text-[#07111c] hover:bg-slate-100">
                      {slide.cta}
                    </Button>
                    <Button variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/5">
                      Ver estructura
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-end">
            <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
              <CardContent className="p-7">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Visión general</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-4xl font-semibold">01</p>
                    <p className="mt-2 text-sm text-slate-300">Hero potente y navegación corporativa</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold">02</p>
                    <p className="mt-2 text-sm text-slate-300">Bloques de contenido con ritmo editorial</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold">03</p>
                    <p className="mt-2 text-sm text-slate-300">Tarjetas para soluciones y capacidades</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold">04</p>
                    <p className="mt-2 text-sm text-slate-300">Franja final de confianza y conversión</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="rounded-[2rem] border-white/10 bg-cyan-400/10">
                <CardContent className="p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Estilo</p>
                  <p className="mt-3 text-xl font-medium">Sobrio, técnico y con más presencia industrial.</p>
                </CardContent>
              </Card>
              <Card className="rounded-[2rem] border-white/10 bg-white/[0.04]">
                <CardContent className="p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Color</p>
                  <p className="mt-3 text-xl font-medium">Azul petróleo, cian frío y blanco limpio.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Estructura principal"
          title="Un sistema de bloques más parecido a una gran web industrial corporativa."
          text="La referencia trabaja con una portada muy jerarquizada: hero, accesos, tarjetas temáticas, franja de confianza y módulos editoriales. Esta propuesta traslada ese patrón a Ritealmar sin copiar servicios ni contenidos."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((item) => (
            <Card key={item.title} className="rounded-[2rem] border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:bg-white/[0.05]">
              <CardContent className="flex h-full flex-col p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{item.category}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-300">{item.text}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                  Saber más <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="capacidades" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Capacidades"
            title="Tus áreas actuales pueden vivir dentro de una presentación más ordenada y visualmente fuerte."
            text="Estas tarjetas funcionan como acceso rápido a tus líneas de trabajo, igual que en una web corporativa de mayor escala."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-[2rem] border-white/10 bg-[#0b1725]">
                  <CardContent className="p-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="enfoque" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.1),rgba(255,255,255,0.03))] p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Mapa de contenidos</p>
          <div className="mt-8 grid gap-4 text-sm text-slate-200">
            {[
              "Hero principal",
              "Bloque de accesos o destacados",
              "Familia de soluciones",
              "Capacidades técnicas",
              "Casos o metodología",
              "Franja de confianza",
              "CTA final y contacto",
            ].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                <span>{item}</span>
                <span className="text-cyan-300">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="Adaptación de contenido"
            title="No cambiaría lo que vendes. Cambiaría cómo se presenta."
            text="Tu propuesta actual puede mantenerse, pero dentro de una composición más elegante, más corporativa y mucho más fácil de escanear por clientes industriales."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="text-slate-100">{capability}</span>
                <ArrowRight className="h-4 w-4 text-cyan-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#08131f]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Confianza"
            title="Una franja intermedia para reforzar credibilidad, presencia y posicionamiento técnico."
            text="Este tipo de módulo funciona muy bien para mostrar enfoque, cobertura, experiencia o compromiso tecnológico con una estética institucional."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trust.map((item) => (
              <Card key={item.title} className="rounded-[2rem] border-white/10 bg-white/[0.04]">
                <CardContent className="p-7">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Presencia</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Una web con más empaque visual y mejor lectura comercial.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              La referencia utiliza una combinación de hero potente, narrativa corporativa y módulos visuales que generan confianza. Esta adaptación lleva esa lógica a Ritealmar con un lenguaje técnico e industrial.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
              <Globe2 className="h-4 w-4" />
              Diseño preparado para home, servicios, casos de uso y contacto
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Siguiente fase</p>
              <div className="mt-6 space-y-5 text-slate-200">
                <div className="rounded-2xl border border-white/10 px-4 py-4">Aplicar esta línea visual a tu home actual</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">Reorganizar secciones con mejor jerarquía</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">Unificar botones, espaciados, fondos y tipografía</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">Preparar plantilla repetible para el resto de páginas</div>
              </div>
              <Button className="mt-8 w-full rounded-full bg-white text-[#07111c] hover:bg-slate-100">
                Empezar rediseño
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="contacto" className="border-t border-white/10 bg-[#050d16]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Ritealmar</p>
            <p className="mt-2 text-slate-300">Nueva base visual inspirada en una gran web corporativa industrial.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a href="#">Inicio</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
