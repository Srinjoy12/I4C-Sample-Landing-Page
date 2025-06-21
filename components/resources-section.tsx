"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, ExternalLink, BookOpen, FileCheck, FileWarning } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ResourcesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const resources = {
    publications: [
      {
        title: "Annual Cyber Crime Report 2022",
        description: "Comprehensive analysis of cyber crime trends, statistics, and case studies from across India.",
        icon: <FileText className="h-6 w-6" />,
        type: "PDF",
        size: "4.2 MB",
      },
      {
        title: "Cyber Security Best Practices for Citizens",
        description: "A guide for citizens to protect themselves from common cyber threats and scams.",
        icon: <BookOpen className="h-6 w-6" />,
        type: "PDF",
        size: "2.8 MB",
      },
      {
        title: "Digital Evidence Handling Manual",
        description: "Technical guidelines for law enforcement agencies on handling digital evidence.",
        icon: <FileCheck className="h-6 w-6" />,
        type: "PDF",
        size: "5.6 MB",
      },
    ],
    circulars: [
      {
        title: "Advisory on Ransomware Prevention",
        description: "Guidelines for organizations to prevent and respond to ransomware attacks.",
        date: "May 15, 2023",
        reference: "I4C/ADV/2023/05",
      },
      {
        title: "SOP for Cyber Crime Investigation",
        description: "Standard Operating Procedure for investigating various types of cyber crimes.",
        date: "April 10, 2023",
        reference: "I4C/SOP/2023/04",
      },
      {
        title: "Guidelines for Social Media Security",
        description: "Recommendations for secure usage of social media platforms by government departments.",
        date: "March 22, 2023",
        reference: "I4C/GL/2023/03",
      },
    ],
    advisories: [
      {
        title: "Critical Vulnerability in Popular Web Browsers",
        description: "Advisory regarding zero-day vulnerabilities affecting multiple web browsers.",
        date: "June 2, 2023",
        severity: "Critical",
      },
      {
        title: "Precautions for Online Financial Transactions",
        description: "Security measures to be followed while conducting online financial transactions.",
        date: "May 25, 2023",
        severity: "High",
      },
      {
        title: "Secure Configuration for Cloud Services",
        description: "Guidelines for secure configuration of commonly used cloud services.",
        date: "May 10, 2023",
        severity: "Medium",
      },
    ],
  }

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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "text-red-600 dark:text-red-400"
      case "High":
        return "text-orange-600 dark:text-orange-400"
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400"
      default:
        return "text-blue-600 dark:text-blue-400"
    }
  }

  return (
    <section id="resources" className="py-16 md:py-24 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resources</h2>
          <div className="w-20 h-1 bg-[#1e3a8a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access publications, circulars, advisories, and other resources to enhance cyber security awareness and
            knowledge.
          </p>
        </div>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="circulars">Circulars</TabsTrigger>
            <TabsTrigger value="advisories">Advisories</TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {resources.publications.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="bg-[#1e3a8a]/5 dark:bg-[#1e3a8a]/20 p-3 rounded-lg">{item.icon}</div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mr-2">{item.type}</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                      <CardTitle className="mt-4">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center justify-center bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="circulars">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {resources.circulars.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                          {item.reference}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.date}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        className="flex items-center border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 dark:border-[#1e3a8a]/80 dark:text-[#1e3a8a]/80 dark:hover:bg-[#1e3a8a]/30"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View Document
                      </Button>
                      <Button variant="ghost" className="flex items-center text-gray-600 dark:text-gray-300">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="advisories">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {resources.advisories.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FileWarning className={`h-5 w-5 mr-2 ${getSeverityColor(item.severity)}`} />
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </div>
                        <div
                          className={`text-sm px-3 py-1 rounded font-medium ${
                            item.severity === "Critical"
                              ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                              : item.severity === "High"
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                          }`}
                        >
                          {item.severity}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.date}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="flex items-center bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Advisory
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 dark:border-[#1e3a8a]/80 dark:text-[#1e3a8a]/80 dark:hover:bg-[#1e3a8a]/30"
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection
