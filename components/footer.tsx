"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "About I4C", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "News & Alerts", href: "#news" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ]

  const importantLinks = [
    { name: "Ministry of Home Affairs", href: "https://mha.gov.in", external: true },
    { name: "Government of India", href: "https://india.gov.in", external: true },
    { name: "National Portal of India", href: "https://india.gov.in", external: true },
    { name: "Digital India", href: "https://digitalindia.gov.in", external: true },
    { name: "MyGov", href: "https://mygov.in", external: true },
    { name: "CERT-In", href: "https://cert-in.org.in", external: true },
  ]

  const services = [
    { name: "Report Cyber Crime", href: "#" },
    { name: "Cyber Awareness", href: "#" },
    { name: "National Cybercrime Portal", href: "#" },
    { name: "Helpline Services", href: "#" },
    { name: "Training Programs", href: "#" },
    { name: "Research & Development", href: "#" },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-[#1e3a8a] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">Subscribe to receive the latest cyber security alerts and updates.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-0 rounded-r-none w-full md:w-80"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 rounded-l-none px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_of_i4c-Ew2IUc0uPIPS3LM4rmiD5XWPBkDDfn.png"
                    alt="I4C Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">I4C</h3>
                  <p className="text-sm text-gray-300">Ministry of Home Affairs</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Indian Cyber Crime Coordination Centre - Securing India's cyberspace through coordination, capacity
                building, and citizen awareness.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Ministry of Home Affairs
                      <br />
                      North Block, Central Secretariat
                      <br />
                      New Delhi - 110001
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300">+91-11-23092000</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-300">info@i4c.gov.in</p>
                </div>
              </div>

              {/* Emergency Helpline */}
              <div className="mt-6 p-4 bg-red-600 rounded-lg">
                <h5 className="font-semibold mb-2">Emergency Helpline</h5>
                <p className="text-2xl font-bold">1930</p>
                <p className="text-sm text-red-100">24/7 Cyber Crime Helpline</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {importantLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center text-sm"
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.name}
                  {link.external && <ExternalLink className="h-3 w-3 ml-1" />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="relative h-12 w-auto">
                <img
                  src="https://blobs.vusercontent.net/blob/Ministry_of_Home_Affairs_India-IEsDnqBCUuvsi3LdQPfkIOScSYCEVt.svg"
                  alt="Ministry of Home Affairs"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-300 text-sm">
                © 2023 Indian Cyber Crime Coordination Centre. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Accessibility
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
