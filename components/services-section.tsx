"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { AlertCircle, BookOpen, Database, FileText, Globe, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <AlertCircle className="h-10 w-10 text-red-600" />,
      title: "Report Cyber Crime",
      description: "Online platform for citizens to report cyber crimes with 24/7 support and tracking system.",
      link: "#",
      color: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800/30",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#1e3a8a]" />,
      title: "Cyber Awareness",
      description: "Educational resources and campaigns to promote cyber safety and security awareness.",
      link: "#",
      color: "bg-[#1e3a8a]/5 dark:bg-[#1e3a8a]/20",
      borderColor: "border-[#1e3a8a]/20 dark:border-[#1e3a8a]/30",
    },
    {
      icon: <Globe className="h-10 w-10 text-green-600" />,
      title: "National Cybercrime Reporting Portal",
      description: "Centralized platform for reporting cybercrimes online with real-time tracking.",
      link: "#",
      color: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800/30",
    },
    {
      icon: <Database className="h-10 w-10 text-purple-600" />,
      title: "Threat Analytics Unit",
      description: "Advanced analytics to identify patterns and predict cyber threats across the nation.",
      link: "#",
      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800/30",
    },
    {
      icon: <FileText className="h-10 w-10 text-orange-600" />,
      title: "CCTNS",
      description: "Crime and Criminal Tracking Network & Systems for law enforcement agencies.",
      link: "#",
      color: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800/30",
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-teal-600" />,
      title: "Helpline Services",
      description: "Dedicated helpline for reporting and assistance with cyber crime incidents.",
      link: "#",
      color: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800/30",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Key Services</h2>
          <div className="w-20 h-1 bg-[#1e3a8a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to combat cyber crime and enhance digital safety across India.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`h-full border ${service.borderColor} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className={`${service.color} rounded-t-lg`}>
                  <div className="flex items-center mb-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300 min-h-[80px]">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
