"use client"

import { useState } from "react"
import { Linkedin, Mail, MessageCircle, Heart, Send } from "lucide-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-rajput-6559b4342/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/919876543210", icon: MessageCircle },
  { label: "Email", href: "mailto:hello@akshayrajput.com", icon: Mail },
]

const services = [
  "Business Website Design",
  "Landing Page Design",
  "Website Redesign",
  "Conversion Optimization",
]

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", website: "", message: "" })
  }

  return (
    <footer id="contact" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Contact Form */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Get In Touch</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {"Let's build your "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">website</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Ready to transform your online presence? Fill out the form or reach out directly. I typically respond within 24 hours.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-primary/50 bg-primary/10 p-6 text-center animate-scale-in">
                <div className="flex h-12 w-12 mx-auto mb-4 items-center justify-center rounded-full bg-primary/20">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">{"Thank you for reaching out. I'll get back to you within 24 hours."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-xs text-muted-foreground">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-xs text-muted-foreground">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="website" className="font-mono text-xs text-muted-foreground">Current Website (if any)</label>
                  <input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="https://your-website.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-xs text-muted-foreground">Tell me about your project</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="I need a website for my business..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-8 py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto disabled:opacity-50"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </form>
            )}

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                <span>Or message me on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right column - Info */}
          <div className="space-y-8 lg:pl-8 animate-fade-in-up stagger-2">
            {/* Services */}
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</p>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Connect</p>
              <div className="space-y-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <link.icon className={cn(
                      "h-5 w-5 transition-all duration-300 group-hover:scale-110",
                      link.label === "LinkedIn" && "text-[#0077B5]",
                      link.label === "WhatsApp" && "text-green-500",
                      link.label === "Email" && "text-muted-foreground group-hover:text-primary",
                    )} />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card/50 glass p-6">
              <h3 className="text-lg font-semibold mb-2">Free Website Audit</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {"Not sure if your current website is performing? Get a free audit with actionable recommendations."}
              </p>
              <a
                href="https://www.linkedin.com/in/akshay-rajput-6559b4342/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline"
              >
                <Linkedin className="h-4 w-4" />
                Message me on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>by Akshay Rajput</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} Akshay Rajput — Web Designer
          </p>
        </div>
      </div>
    </footer>
  )
}
