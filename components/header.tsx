"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Linkedin } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { ThemeChanger } from "./theme-changer"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/50 bg-primary/10 font-mono text-sm text-primary transition-all duration-400 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
              <span className="font-bold">AR</span>
            </div>
            <span className="font-mono text-sm tracking-tight">
              AKSHAY
              <span className="bg-gradient-to-l from-primary/50 to-accent bg-clip-text text-transparent font-semibold">
                RAJPUT
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                  hoveredIndex === index && "text-foreground",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={cn(
                    "absolute left-1.5 text-primary transition-all duration-200",
                    hoveredIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2",
                  )}
                >
                  {">"}
                </span>
                <span
                  className={cn(
                    "transition-transform duration-200",
                    hoveredIndex === index && "translate-x-2",
                  )}
                >
                  {item.label}
                </span>
                <span
                  className={cn(
                    "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                    hoveredIndex === index ? "w-6" : "w-0",
                  )}
                />
              </a>
            ))}
            <div className="ml-2 flex items-center gap-1">
              <ThemeChanger />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/akshay-rajput-6559b4342/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-lg border border-[#0077B5]/50 bg-[#0077B5]/10 px-4 py-2 font-mono text-xs text-[#0077B5] transition-all hover:bg-[#0077B5] hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              <span>Connect</span>
            </a>

            <div className="hidden h-5 w-px bg-border sm:block" />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:flex items-center gap-2.5 font-mono text-xs text-primary px-4 py-2 rounded-lg bg-primary/10 border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Available for work</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 md:hidden transition-colors hover:bg-secondary"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-3.5 bg-foreground transition-all duration-300",
                    isMobileMenuOpen && "opacity-0 translate-x-2",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "transition-all duration-400 md:hidden bg-background",
            isMobileMenuOpen ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0 overflow-hidden",
          )}
        >
          <div className="flex flex-col gap-1 border-t border-border/50 pt-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-3 rounded-lg px-4 py-3.5 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all duration-200 active:bg-secondary hover:text-foreground hover:bg-secondary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary">{">"}</span>
                {item.label}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-4 px-4">
              <a
                href="https://www.linkedin.com/in/akshay-rajput-6559b4342/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-[#0077B5]/50 bg-[#0077B5]/10 text-[#0077B5] transition-colors active:bg-[#0077B5] active:text-white"
              >
                <Linkedin className="h-4 w-4" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/50">
                <ThemeChanger />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/50">
                <ThemeToggle />
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-3 flex items-center justify-center gap-2.5 px-4 py-3 font-mono text-xs text-primary bg-primary/10 rounded-lg mx-4 mb-2 border border-primary/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Available for work</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
