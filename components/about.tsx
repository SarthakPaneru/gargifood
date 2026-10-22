import { Award, Heart, Leaf, Users } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only the finest, locally-sourced ingredients with no artificial preservatives",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each batch is carefully prepared following traditional family recipes",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Strict quality control ensures every jar meets our high standards",
  },
  {
    icon: Users,
    title: "Family Tradition",
    description: "Recipes passed down through generations of pickle-making expertise",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-accent">
              <img
                src="/traditional-nepali-kitchen-making-pickles-with-spi.jpg"
                alt="Traditional Pickle Making"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Preserving Tradition, One Jar at a Time
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              At Gargi Food Industry, we take pride in creating authentic Nepali pickles that bring the taste of home to
              your table. Our commitment to quality and tradition has made us a trusted name in Jhapa and beyond.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Every pickle we make is a labor of love, combining time-honored techniques with the freshest ingredients
              to deliver flavors that transport you to the heart of Nepal.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
