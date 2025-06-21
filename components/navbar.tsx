"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Simplified for secondary navbar */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_of_i4c-Ew2IUc0uPIPS3LM4rmiD5XWPBkDDfn.png"
                  alt="I4C Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block">
                <span className="text-lg font-bold text-[#1e3a8a]">I4C</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#1e3a8a] dark:text-gray-200 dark:hover:text-[#1e3a8a] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Link href="/login">
                <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">
                  Report Cyber Crime
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#1e3a8a] dark:text-gray-200 dark:hover:text-[#1e3a8a] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Link href="/login">
                <Button variant="destructive" size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  Report Cyber Crime
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
