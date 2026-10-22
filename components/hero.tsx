import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Authentic Nepali Taste
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Traditional Pickles, Crafted with Love
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Experience the authentic flavors of Nepal with our handcrafted pickles. Made with the finest ingredients
              and traditional recipes passed down through generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-accent">
              <img
                src="/traditional-nepali-mango-pickle-in-glass-jar-with-.jpg"
                alt="Traditional Nepali Pickles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Natural Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
