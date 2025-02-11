import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TestimonialSection } from "@/components/testimonial-section"
import { AIFeaturesSection } from "@/components/ai-features"
import { 
  Rocket, 
  Zap, 
  Shield, 
  ArrowRight 
} from "lucide-react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <section className="text-center space-y-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Transform Your Ideas into Stunning Websites
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Effortlessly create beautiful, responsive websites with our AI-powered platform. 
              No coding skills required.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 mt-24 grid md:grid-cols-3 gap-8">
        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <div className="flex justify-center">
            <Rocket className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Rapid Development</h3>
          <p className="text-muted-foreground">
            Create websites in minutes with our intuitive AI-driven interface.
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <div className="flex justify-center">
            <Zap className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Lightning Fast</h3>
          <p className="text-muted-foreground">
            Optimized performance and instant deployment for your websites.
          </p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <div className="flex justify-center">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Secure & Reliable</h3>
          <p className="text-muted-foreground">
            Enterprise-grade security and 99.9% uptime guarantee.
          </p>
        </Card>
      </section>

      {/* AI Features Section */}
      <AIFeaturesSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-24 bg-accent/10 rounded-xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your Dream Website?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of creators who have transformed their online presence 
          with our AI-powered website builder.
        </p>
        <Button size="lg" className="group">
          Start Your Project
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>
    </div>
  )
}

export default LandingPage