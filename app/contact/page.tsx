"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle, X } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xeokrqbv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
      } else {
        setShowError(true)
      }
    } catch (error) {
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowSuccess(false)
    setShowError(false)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to book a service or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Your full name"
                        aria-label="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="your.email@example.com"
                        aria-label="Your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="(555) 123-4567"
                      aria-label="Your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white">
                      Service Type
                    </Label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
                    >
                      <option value="" className="bg-gray-800 text-white">
                        Select a service
                      </option>
                      <option value="snow-shoveling" className="bg-gray-800 text-white">
                        Snow Shoveling
                      </option>
                      <option value="lawn-mowing" className="bg-gray-800 text-white">
                        Lawn Mowing
                      </option>
                      <option value="window-washing" className="bg-gray-800 text-white">
                        Window Washing
                      </option>
                      <option value="dog-walking" className="bg-gray-800 text-white">
                        Dog Walking
                      </option>
                      <option value="car-detailing" className="bg-gray-800 text-white">
                        Car Detailing
                      </option>
                      <option value="general-chores" className="bg-gray-800 text-white">
                        General Chores
                      </option>
                      <option value="other" className="bg-gray-800 text-white">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tell us about your project, preferred timing, and any specific requirements..."
                      aria-label="Your message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#60A5FA]" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">earntolearnco@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#60A5FA]" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">(587) 889-1333</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#60A5FA]" />
                  <div>
                    <p className="text-white font-semibold">Service Area</p>
                    <p className="text-gray-300">Greater Calgary Area</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-[#60A5FA]" />
                  <div>
                    <p className="text-white font-semibold">Response Time</p>
                    <p className="text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2"></span>
                    <span className="text-gray-300">Reliable and punctual service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2"></span>
                    <span className="text-gray-300">Competitive pricing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2"></span>
                    <span className="text-gray-300">Supporting student education</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2"></span>
                    <span className="text-gray-300">Fully insured and bonded</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#60A5FA] rounded-full mt-2"></span>
                    <span className="text-gray-300">100% satisfaction guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-[#60A5FA]/20 to-[#8B5CF6]/20 border border-white/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Emergency Services</h3>
              <p className="text-gray-300 mb-4">
                Need urgent snow removal or emergency chores? We offer same-day service when available.
              </p>
              <p className="text-[#60A5FA] font-semibold">Call us for immediate assistance!</p>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 border border-white/20 rounded-lg p-8 max-w-md w-full mx-4 animate-fade-in">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your message! We will review it and get back to you as soon as possible.
                </p>
                <Button
                  onClick={closeModal}
                  className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105"
                >
                  Close
                </Button>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showError && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 border border-white/20 rounded-lg p-8 max-w-md w-full mx-4 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Oops!</h3>
                <p className="text-gray-300 mb-6">
                  There was an error sending your message. Please try again or contact us directly.
                </p>
                <Button
                  onClick={closeModal}
                  className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105"
                >
                  Try Again
                </Button>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
