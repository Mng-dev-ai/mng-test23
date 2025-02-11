import { 
  Wand2, 
  Palette, 
  Layout, 
  Zap, 
  Globe, 
  Rocket 
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const aiFeatures = [
  {
    icon: Wand2,
    title: "Smart Design Generation",
    description: "AI generates custom website designs based on your content and preferences.",
    badge: "New"
  },
  {
    icon: Palette,
    title: "Intelligent Color Schemes",
    description: "Automatically create harmonious color palettes that match your brand.",
    badge: null
  },
  {
    icon: Layout,
    title: "Adaptive Layouts",
    description: "Dynamic layout adjustments for optimal user experience across devices.",
    badge: null
  },
  {
    icon: Zap,
    title: "Content Optimization",
    description: "AI-powered content suggestions and SEO recommendations.",
    badge: "Beta"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Automatic translation and localization of website content.",
    badge: null
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Automatic image compression and code optimization.",
    badge: "Pro"
  }
]

export function AIFeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24 bg-accent/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI-Powered Website Creation
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Leverage cutting-edge AI technology to create stunning, high-performing websites
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {aiFeatures.map((feature) => (
          <Card 
            key={feature.title} 
            className="p-6 flex flex-col space-y-4 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex justify-between items-center">
              <feature.icon className="w-10 h-10 text-primary group-hover:rotate-12 transition-transform" />
              {feature.badge && (
                <Badge variant={feature.badge === "New" ? "default" : "secondary"}>
                  {feature.badge}
                </Badge>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}