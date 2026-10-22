import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Gargi Food Industry</span>
            </div>
            <p className="text-sm text-background/70 text-pretty">
              Bringing authentic Nepali pickle flavors to your table since our establishment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Mango Pickle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Dalla (Tama) Pickle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Mixed Pickle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Chili Pickle
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-background transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Gauradha-7, Jhapa</li>
              <li>Nepal</li>
              <li>info@gargifood.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Gargi Food Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
