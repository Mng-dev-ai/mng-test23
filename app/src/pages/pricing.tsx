import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pricingTiers = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for personal projects and small websites",
    features: [
      "1 Website",
      "Basic AI Templates",
      "Mobile Responsive",
      "Limited Support"
    ],
    unavailable: [
      "Custom Domain",
      "Advanced Analytics",
      "Priority Support"
    ]
  },
  {
    name: "Pro",
    price: 29,
    description: "Ideal for professionals and growing businesses",
    badge: "Most Popular",
    features: [
      "5 Websites",
      "Advanced AI Templates",
      "Mobile Responsive",
      "Custom Domain",
      "Basic Analytics",
      "Standard Support"
    ],
    unavailable: [
      "Enterprise Features",
      "Dedicated Account Manager"
    ]
  },
  {
    name: "Enterprise",
    price: 99,
    description: "Comprehensive solution for large organizations",
    features: [
      "Unlimited Websites",
      "Premium AI Templates",
      "Mobile Responsive",
      "Custom Domain",
      "Advanced Analytics",
      "Priority Support",
      "Dedicated Account Manager",
      "Custom Integrations"
    ],
    unavailable: []
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <Card 
            key={tier.name} 
            className={`p-6 flex flex-col relative ${
              tier.name === "Pro" ? "border-2 border-primary" : ""
            }`}
          >
            {tier.badge && (
              <Badge variant="default" className="absolute top-4 right-4">
                {tier.badge}
              </Badge>
            )}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
              <p className="text-muted-foreground">{tier.description}</p>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">
                ${tier.price}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">What's Included</h3>
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
              {tier.unavailable.map((feature) => (
                <div key={feature} className="flex items-center text-muted-foreground">
                  <X className="w-4 h-4 text-red-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant={tier.name === "Pro" ? "default" : "outline"}
              className="w-full mt-auto"
            >
              {tier.price === 0 ? "Get Started" : `Choose ${tier.name}`}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}