"use client"

import { cn } from "@/lib/utils"
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We start with a call to understand your business, goals, target audience, and what makes you unique.",
    icon: MessageSquare,
    details: ["Business Analysis", "Competitor Research", "Goal Setting", "Timeline Planning"],
  },
  {
    id: 2,
    title: "Design",
    description: "I create custom mockups and wireframes that align with your brand and convert visitors into customers.",
    icon: Palette,
    details: ["Wireframing", "UI/UX Design", "Brand Integration", "Mobile-First Approach"],
  },
  {
    id: 3,
    title: "Development",
    description: "Your design comes to life with clean code, fast performance, and seamless functionality.",
    icon: Code2,
    details: ["Clean Code", "Speed Optimization", "SEO Setup", "Testing & QA"],
  },
  {
    id: 4,
    title: "Launch",
    description: "We deploy your website and ensure everything runs smoothly. I provide training and ongoing support.",
    icon: Rocket,
    details: ["Deployment", "Training Session", "Analytics Setup", "Ongoing Support"],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">My Process</h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            A streamlined approach to deliver your website on time and exceed expectations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-muted/20 transition-colors group-hover:text-primary/20">
                {step.id}
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/60 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {step.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                <ul className="space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
