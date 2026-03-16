"use client"

import { cn } from "@/lib/utils"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for small businesses just getting started online.",
    price: "499",
    currency: "$",
    period: "one-time",
    features: [
      "5-Page Custom Website",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Round of Revisions",
      "2 Week Delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    description: "Best for growing businesses that need more features.",
    price: "999",
    currency: "$",
    period: "one-time",
    features: [
      "10-Page Custom Website",
      "Mobile Responsive Design",
      "Advanced Contact Forms",
      "Full SEO Optimization",
      "3 Rounds of Revisions",
      "Analytics Integration",
      "Social Media Integration",
      "1 Week Delivery",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Complete solution for established businesses.",
    price: "1,999",
    currency: "$",
    period: "one-time",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "E-commerce Features",
      "Advanced SEO & Analytics",
      "Unlimited Revisions",
      "Priority Support",
      "CMS Integration",
      "Training Session",
      "3 Months Support",
    ],
    cta: "Contact Me",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Investment</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Pricing Plans</h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 glass p-6 sm:p-8 transition-all duration-400 hover-lift animate-fade-in-up",
                plan.popular 
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card/40" 
                  : "border-border hover:border-primary/40 hover:bg-card/60",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 flex items-center gap-1.5 rounded-full border border-primary bg-primary px-4 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                  <span className="font-mono text-xs font-medium text-primary-foreground">Most Popular</span>
                </div>
              )}

              <div className={cn("relative z-10", plan.popular && "pt-4")}>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.currency}{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-lg border px-6 py-3.5 font-mono text-sm transition-all duration-500 active:scale-[0.98] w-full",
                    plan.popular
                      ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border bg-secondary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
                  )}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </a>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground animate-fade-in stagger-4">
          Need a custom solution? <a href="#contact" className="text-primary underline-animate">Get in touch</a> for a personalized quote.
        </p>
      </div>
    </section>
  )
}
