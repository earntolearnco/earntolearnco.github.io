"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "These kids did an amazing job shoveling my driveway! They were punctual, thorough, and so polite. It's wonderful to see young people working hard for their education.",
      name: "Jane D.",
      location: "Sherwood",
      service: "Snow Shoveling",
      rating: 5,
    },
    {
      quote:
        "My lawn has never looked better! The team was professional and efficient. I love supporting students who are working towards their future.",
      name: "Michael R.",
      location: "Evanston",
      service: "Lawn Mowing",
      rating: 5,
    },
    {
      quote:
        "Excellent window cleaning service! They were careful with my plants and left everything spotless. I'll definitely be booking them again.",
      name: "Sarah L.",
      location: "Nolan Hill",
      service: "Window Washing",
      rating: 5,
    },
    {
      quote:
        "The students helped me clean out my garage and were incredibly hardworking. It's great to know I'm helping them save for university while getting quality service.",
      name: "Robert K.",
      location: "Nolan Hill",
      service: "General Chores",
      rating: 5,
    },
    {
      quote:
        "Fast, reliable, and affordable! They cleared my driveway after the big snowstorm and even salted it. Highly recommend these dedicated students.",
      name: "Linda M.",
      location: "Sherwood",
      service: "Snow Shoveling",
      rating: 5,
    },
    {
      quote:
        "Professional service with a personal touch. The team was friendly and did an excellent job on my windows. Supporting their education goals feels great!",
      name: "David T.",
      location: "Tuscany",
      service: "Window Washing",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
    ))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <blockquote className="text-gray-300 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <p className="text-sm text-[#60A5FA] mt-1">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden mb-16">
          <Card className="bg-white/10 border-white/20 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
              <blockquote className="text-gray-300 mb-4 italic text-lg">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].location}</p>
                <p className="text-sm text-[#60A5FA] mt-1">{testimonials[currentIndex].service}</p>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-white">
              {currentIndex + 1} of {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#60A5FA] mb-2">10+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#60A5FA] mb-2">30+</div>
              <p className="text-gray-300">Jobs Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#60A5FA] mb-2">4.9</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#60A5FA] mb-2">$1K+</div>
              <p className="text-gray-300">Saved for University</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6">Share Your Feedback</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Have you used our services? We'd love to hear about your experience and share your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact">Leave a Review</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1E2A44] transition-all duration-200"
            >
              <Link href="/services">Book a Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
