"use client"

import { cn } from "@/lib/utils"
import { Globe, Layers, RefreshCw, TrendingUp } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Business Website Design",
    description: "Custom websites that represent your brand professionally and help you stand out from competitors.",
    icon: Globe,
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Landing Page Design",
    description: "High-converting landing pages designed to capture leads and drive sales for your business.",
    icon: Layers,
    features: ["Conversion Focused", "A/B Testing Ready", "Lead Capture Forms", "Analytics Integration"],
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, fast, and user-friendly experience.",
    icon: RefreshCw,
    features: ["Modern UI/UX", "Performance Boost", "Brand Refresh", "Content Migration"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Conversion Optimization",
    description: "Data-driven improvements to help your website convert more visitors into paying customers.",
    icon: TrendingUp,
    features: ["User Analytics", "Heatmap Analysis", "CTA Optimization", "Speed Enhancement"],
    color: "from-orange-500/20 to-amber-500/20",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">What I Do</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Services</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            End-to-end web design services to help your business grow online.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-8 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  service.color,
                )}
              />

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary/60 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{service.id}</span>
                </div>

                <h3 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
