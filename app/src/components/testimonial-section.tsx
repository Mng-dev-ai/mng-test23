import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    quote: "This platform transformed my business website in hours. Incredibly intuitive!",
    image: `https://picsum.photos/seed/user1/200/200`
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    quote: "The AI-driven design capabilities are light-years ahead of traditional website builders.",
    image: `https://picsum.photos/seed/user2/200/200`
  },
  {
    name: "Emma Rodriguez",
    role: "Freelance Designer",
    quote: "I was skeptical, but the level of customization and speed is truly impressive.",
    image: `https://picsum.photos/seed/user3/200/200`
  }
]

export function TestimonialSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Users Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real experiences from creators who have revolutionized their online presence
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="p-6 flex flex-col space-y-4 hover:shadow-lg transition-all duration-300"
          >
            <Quote className="text-primary w-8 h-8 mb-4" />
            <p className="text-muted-foreground flex-grow italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Avatar>
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.slice(0,2)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}