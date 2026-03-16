"use client"

import { cn } from "@/lib/utils"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Owner, Sharma Real Estate",
    content: "Akshay transformed our online presence completely. Our new website generates 3x more leads than before. The design is modern and our clients love how easy it is to browse properties.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Manager, Spice Kitchen Restaurant",
    content: "Working with Akshay was a great experience. He understood exactly what we needed - a beautiful website that showcases our menu and makes reservations simple. Highly recommended!",
    rating: 5,
    avatar: "PP",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Founder, FitZone Gym",
    content: "Our gym website looks amazing now. The membership signup process is smooth, and we've seen a significant increase in online registrations. Akshay delivers quality work on time.",
    rating: 5,
    avatar: "VS",
  },
  {
    id: 4,
    name: "Dr. Anjali Mehta",
    role: "Director, Smile Dental Clinic",
    content: "Professional, responsive, and creative. Akshay built us a website that our patients find easy to use for booking appointments. It has really helped streamline our operations.",
    rating: 5,
    avatar: "AM",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Client Stories</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What Clients Say</h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            {"Don't just take my word for it. Here's what business owners have to say about working with me."}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-8 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 hover-lift animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-muted/20 transition-colors group-hover:text-primary/20" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="mb-6 text-sm sm:text-base leading-relaxed text-muted-foreground italic">
                  {`"${testimonial.content}"`}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary/60 font-semibold text-sm text-foreground transition-colors group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
