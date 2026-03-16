"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Building2, UtensilsCrossed, Dumbbell, Stethoscope } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Real Estate Website",
    description: "Modern property listing website with advanced search filters and virtual tour integration.",
    category: "Real Estate",
    icon: Building2,
    tags: ["Property Listings", "Search Filters", "Virtual Tours", "Lead Generation"],
    results: "150% increase in lead inquiries",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "Elegant restaurant website with online reservations, menu display, and customer reviews.",
    category: "Restaurant",
    icon: UtensilsCrossed,
    tags: ["Online Reservations", "Menu Display", "Reviews", "Location Map"],
    results: "200% more online bookings",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 3,
    title: "Gym & Fitness Website",
    description: "Dynamic fitness center website with class schedules, membership plans, and trainer profiles.",
    category: "Fitness",
    icon: Dumbbell,
    tags: ["Class Schedule", "Membership Plans", "Trainer Profiles", "Online Signup"],
    results: "80% more membership signups",
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Dental Clinic Website",
    description: "Professional healthcare website with appointment booking, services showcase, and patient portal.",
    category: "Healthcare",
    icon: Stethoscope,
    tags: ["Appointment Booking", "Services", "Patient Portal", "Insurance Info"],
    results: "120% increase in appointments",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

const filters = ["all", "Real Estate", "Restaurant", "Fitness", "Healthcare"]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">My Work</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Portfolio</h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
              )}
              style={{ animationDelay: `${(index % 4) * 100 + 200}ms` }}
            >
              {/* Project Preview Area */}
              <div className={cn(
                "relative h-48 sm:h-56 bg-gradient-to-br flex items-center justify-center",
                project.color
              )}>
                <div className="absolute inset-0 bg-card/20" />
                <project.icon className="h-16 w-16 text-foreground/20 transition-transform duration-500 group-hover:scale-110" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-primary-foreground font-mono text-sm">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-primary">{project.results}</span>
                </div>

                <h3 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
