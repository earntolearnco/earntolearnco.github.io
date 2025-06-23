import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, DollarSign, Shield, Clock } from "lucide-react"

export default function PaymentsPage() {
  const paymentMethods = [
    {
      icon: <Mail className="w-12 h-12 text-[#60A5FA]" />,
      title: "Interac e-Transfer",
      description: "Secure and fast payments via email",
      email: "earntolearnco@gmail.com",
      features: [
        "Instant payment confirmation",
        "Secure bank-to-bank transfer",
        "No additional fees",
        "Email receipt provided upon request",
      ],
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#60A5FA]" />,
      title: "Cash Payment",
      description: "Pay in person after service completion",
      features: ["Pay upon completion", "No processing fees", "Receipt provided", "Exact change appreciated"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Payment Methods</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer convenient and secure payment options to make your experience seamless.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <CardTitle className="text-2xl text-white">{method.title}</CardTitle>
                <p className="text-gray-300">{method.description}</p>
                {method.email && (
                  <div className="mt-4 p-3 bg-[#60A5FA]/20 rounded-lg">
                    <p className="text-[#60A5FA] font-semibold">{method.email}</p>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {method.features.map((feature, featureIndex) => (
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

        {/* Security & Trust Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-[#60A5FA] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Secure & Transparent Transactions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-8 h-8 text-[#60A5FA] mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Secure Payments</h4>
              <p className="text-gray-300 text-sm">
                All transactions are processed securely with proper documentation.
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[#60A5FA] mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Timely Processing</h4>
              <p className="text-gray-300 text-sm">Payments are processed quickly with immediate confirmation.</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-[#60A5FA] mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Receipt Provided</h4>
              <p className="text-gray-300 text-sm">You'll receive a receipt for every transaction for your records.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Payment?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions about our payment process? We're here to help make everything clear and simple.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white transition-all duration-200 hover:scale-105"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
