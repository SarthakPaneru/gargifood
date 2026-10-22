import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Mango Pickle",
    description: "Sweet and tangy mango pickle made with raw mangoes, mustard oil, and aromatic spices",
    image: "/traditional-mango-pickle-achar-in-bowl.jpg",
    badge: "Best Seller",
  },
  {
    name: "Dalla (Tama) Pickle",
    description: "Traditional bamboo shoot pickle with a unique smoky flavor and authentic Nepali taste",
    image: "/bamboo-shoot-pickle-tama-dalla-in-traditional-bowl.jpg",
    badge: "Traditional",
  },
  {
    name: "Mixed Pickle",
    description: "A delightful blend of seasonal vegetables and fruits pickled to perfection",
    image: "/mixed-vegetable-pickle-achar-assortment.jpg",
    badge: "Popular",
  },
  {
    name: "Chili Pickle",
    description: "Fiery and flavorful green chili pickle for those who love extra heat",
    image: "/green-chili-pickle-spicy-achar.jpg",
    badge: "Spicy",
  },
]

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Premium Pickle Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our range of authentic Nepali pickles, each crafted with care using traditional methods and the
            finest ingredients
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-accent">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    {product.badge}
                  </Badge>
                </div>
                <CardDescription className="text-pretty">{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
