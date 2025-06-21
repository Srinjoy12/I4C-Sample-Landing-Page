"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  ArrowRight,
  Phone,
  Shield,
  Users,
  Clock,
  FileText,
  Globe,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const quickServices = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "File Complaint",
      description: "Report cybercrime incidents",
      href: "/login",
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Track Status",
      description: "Check complaint progress",
      href: "/login",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Helpline 1930",
      description: "24/7 emergency support",
      href: "tel:1930",
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cyber Safety",
      description: "Learn protection tips",
      href: "#resources",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  const recentAlerts = [
    {
      title: "Banking Phishing Alert",
      type: "High Priority",
      time: "2 hours ago",
      severity: "high",
    },
    {
      title: "Mobile App Scam Warning",
      type: "Medium Priority",
      time: "6 hours ago",
      severity: "medium",
    },
    {
      title: "Social Media Security Update",
      type: "Information",
      time: "1 day ago",
      severity: "low",
    },
  ]

  const achievements = [
    {
      icon: <Users className="h-8 w-8 text-[#1e3a8a]" />,
      number: "15,000+",
      label: "Cases Resolved",
      description: "Successfully investigated and resolved cybercrime cases",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#1e3a8a]" />,
      number: "500+",
      label: "Agencies Connected",
      description: "Law enforcement agencies in our network",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#1e3a8a]" />,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance and monitoring",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#1e3a8a]" />,
      number: "98%",
      label: "Success Rate",
      description: "High resolution rate for reported cases",
    },
  ]

  return (
    <section className="relative pb-16 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24 bg-white dark:bg-gray-900 rounded-lg">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Logo and Title */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-32 h-32 mb-6 lg:w-40 lg:h-40">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_of_i4c-Ew2IUc0uPIPS3LM4rmiD5XWPBkDDfn.png"
                    alt="I4C Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] dark:text-white mb-4 leading-tight">
                  Indian Cybercrime Coordination Centre
                </h1>

                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                  <Badge variant="outline" className="bg-[#1e3a8a]/10 text-[#1e3a8a] border-[#1e3a8a]/20">
                    Ministry of Home Affairs
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Government of India
                  </Badge>
                </div>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Strengthening India's cyber security through coordinated efforts, advanced technology, and
                  comprehensive citizen protection. Your trusted partner in fighting cybercrime.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium shadow-lg"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Report Cyber Crime
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 px-8 py-4 text-lg font-medium"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Secure & Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Government Verified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Quick Services & Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Quick Services */}
              <Card className="shadow-lg border bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1e3a8a]">Quick Services</CardTitle>
                  <CardDescription>Fast access to essential cybercrime services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {quickServices.map((service, index) => (
                      <Link key={index} href={service.href}>
                        <Card className={`${service.color} border transition-all duration-200 cursor-pointer h-full`}>
                          <CardContent className="p-4 text-center">
                            <div className={`${service.iconColor} mb-2 flex justify-center`}>{service.icon}</div>
                            <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                            <p className="text-xs text-gray-600">{service.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Security Alerts */}
              <Card className="shadow-lg border bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-[#1e3a8a]">Security Alerts</CardTitle>
                    <Link href="#news" className="text-sm text-[#1e3a8a] hover:underline flex items-center">
                      View All <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  <CardDescription>Latest cybersecurity warnings and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <AlertCircle
                        className={`h-4 w-4 mt-0.5 ${
                          alert.severity === "high"
                            ? "text-red-500"
                            : alert.severity === "medium"
                              ? "text-orange-500"
                              : "text-blue-500"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{alert.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              alert.severity === "high"
                                ? "border-red-200 text-red-700"
                                : alert.severity === "medium"
                                  ? "border-orange-200 text-orange-700"
                                  : "border-blue-200 text-blue-700"
                            }`}
                          >
                            {alert.type}
                          </Badge>
                          <span className="text-xs text-gray-500">{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-red-600 to-red-700 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Emergency Helpline</h3>
                  <p className="text-3xl font-bold mb-2">1930</p>
                  <p className="text-red-100 text-sm mb-4">24/7 Cybercrime Helpline</p>
                  <Button variant="secondary" size="sm" className="bg-white text-red-600 hover:bg-gray-100">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Impact & Achievements
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Protecting India's digital landscape through coordinated efforts and advanced technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border">
                    <CardContent className="p-6">
                      <div className="bg-[#1e3a8a]/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        {achievement.icon}
                      </div>
                      <div className="text-3xl font-bold text-[#1e3a8a] mb-2">{achievement.number}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.label}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Important Security Notice
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 mb-4">
                      Beware of phishing attempts claiming to be from government agencies. I4C will never ask for
                      personal information, passwords, or financial details via email or phone calls. Always verify
                      through official channels before sharing any sensitive information.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                        Verify Before Sharing
                      </Badge>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                        Official Channels Only
                      </Badge>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                        Report Suspicious Activity
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
