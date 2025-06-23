import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Snowflake, Scissors, Sparkles, Wrench, Dog, Car } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Snowflake className="w-12 h-12 text-[#60A5FA]" />,
      title: "Snow Shoveling",
      description:
        "Clear your driveway and walkways quickly and efficiently. We handle everything from light dustings to heavy snowfalls.",
      features: ["Driveway clearing", "Walkway maintenance", "Salt application", "Emergency service"],
    },
    {
      icon: <Scissors className="w-12 h-12 text-[#60A5FA]" />,
      title: "Lawn Mowing",
      description: "Keep your lawn looking pristine with our professional mowing services. We bring our own equipment.",
      features: ["Grass cutting", "Edge trimming", "Cleanup included", "Regular scheduling"],
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#60A5FA]" />,
      title: "Window Washing",
      description:
        "Get crystal clear windows inside and out. We use professional-grade cleaning supplies for streak-free results.",
      features: ["Interior cleaning", "Exterior washing", "Screen cleaning", "Sill wiping"],
    },
    {
      icon: <Dog className="w-12 h-12 text-[#60A5FA]" />,
      title: "Dog Walking",
      description:
        "Reliable and caring dog walking services for busy pet owners. Your furry friends will get the exercise they need.",
      features: ["Daily walks", "Flexible scheduling", "Pet care updates", "Trusted handlers"],
    },
    {
      icon: <Car className="w-12 h-12 text-[#60A5FA]" />,
      title: "Car Detailing",
      description:
        "Professional car cleaning services to keep your vehicle looking its best. Interior and exterior detailing available.",
      features: ["Interior vacuuming", "Exterior washing", "Wax application", "Tire cleaning"],
    },
    {
      icon: <Wrench className="w-12 h-12 text-[#60A5FA]" />,
      title: "General Chores",
      description: "Various household tasks and maintenance jobs. Contact us to discuss your specific needs.",
      features: ["Garage cleaning", "Leaf raking", "Gutter cleaning", "Custom requests"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional chore services delivered by motivated high school students. Every job helps us save for{" "}
            <span className="text-[#60A5FA]">university</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#60A5FA] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="bg-white/5 rounded-lg p-8 mb-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-4">Competitive Pricing</h3>
          <p className="text-gray-300 mb-4">
            Our rates are competitive and fair. We provide free estimates for all services.
          </p>
          <p className="text-[#60A5FA] font-semibold">
            Contact us for a personalized quote based on your specific needs.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Book a Service?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free estimate. We're here to help with all your chore needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1E2A44] transition-all duration-200"
            >
              <Link href="/testimonials">Read Reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
