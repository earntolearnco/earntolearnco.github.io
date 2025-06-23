import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-blur hero-background">
        {/* Animated Background Elements */}
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Floating Service Icons */}
        <div className="floating-icons">
          <div className="floating-icon text-4xl">❄️</div>
          <div className="floating-icon text-3xl">🌱</div>
          <div className="floating-icon text-4xl">🪟</div>
          <div className="floating-icon text-3xl">🐕</div>
          <div className="floating-icon text-4xl">🚗</div>
          <div className="floating-icon text-3xl">🧹</div>
          <div className="floating-icon text-4xl">🎓</div>
          <div className="floating-icon text-3xl">💼</div>
          <div className="floating-icon text-4xl">⭐</div>
        </div>

        {/* Sparkle Effects */}
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>

        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in hero-content">
            <div className="flex justify-center mb-8">
              <Image src="/e2llogo.png" alt="Earn To Learn Logo" width={122} height={60} className="w-30.5 h-15" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Earn To Learn: <span className="text-[#60A5FA]">Chores for a Cause</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              High school students helping the community and saving for{" "}
              <span className="text-[#60A5FA]">university</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white text-lg px-8 py-4 transition-all duration-200 hover:scale-105"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1E2A44] text-lg px-8 py-4 transition-all duration-200"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 gradient-blur">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional chore services delivered by motivated students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Snow Shoveling", desc: "Clear driveways fast", icon: "❄️" },
              { title: "Lawn Mowing", desc: "Keep grass pristine", icon: "🌱" },
              { title: "Window Washing", desc: "Crystal clear views", icon: "🪟" },
              { title: "Dog Walking", desc: "Happy, healthy pets", icon: "🐕" },
              { title: "Car Detailing", desc: "Spotless vehicles", icon: "🚗" },
              { title: "General Chores", desc: "Various tasks done", icon: "🧹" },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105 animate-fade-in"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-[#1E2A44]">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Hire Us?</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're high school students doing chores like snow shoveling, lawn mowing, window washing, dog walking, and
              car detailing to fund our <span className="text-[#60A5FA]">post-secondary education</span>. Every job we
              complete brings us one step closer to our dreams while helping our community.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white text-lg px-8 py-4 transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
