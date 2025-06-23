import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0F1419] border-t border-white/5 py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/e2llogo.png" alt="Earn To Learn Logo" width={30} height={15} className="w-7.5 h-3.75" />
              <h3 className="text-xl font-bold text-white">Earn To Learn</h3>
            </div>
            <p className="text-gray-300 mb-4">High school students helping the community and saving for university.</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-[#60A5FA] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#60A5FA] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>earntolearnco@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>(587) 889-1333</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Earn To Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
