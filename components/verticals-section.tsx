"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, BarChart2, Network, Users, Microscope, GraduationCap, Lightbulb } from "lucide-react"

const VerticalsSection = () => {
  const [ref, setRef] = useState(null)

  const verticals = [
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: "National Cybercrime Reporting Portal (NCRP)",
      description:
        "A citizen-centric initiative enabling citizens to report cybercrimes online with a special focus on crimes against women and children. Complaints are handled by law enforcement agencies based on the information provided.",
      color: "bg-[#1e3a8a]",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-white" />,
      title: "National Cybercrime Threat Analytics Unit (NCTAU)",
      description:
        "Monitors and analyzes cybercrime trends, creates threat intelligence, and issues alerts and advisories to law enforcement agencies and vulnerable entities to prevent and counter cybercrime.",
      color: "bg-[#1e3a8a]/90",
    },
    {
      icon: <Network className="h-10 w-10 text-white" />,
      title: "National Cybercrime Ecosystem Management Unit (NCEMU)",
      description:
        "Coordinates with various stakeholders including service providers, industry associations, and regulators to create a comprehensive ecosystem for addressing cybercrime challenges.",
      color: "bg-[#1e3a8a]/80",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Joint Cybercrime Coordination Teams (JCCT)",
      description:
        "Facilitates coordination among law enforcement agencies, domain experts, and other stakeholders to address complex and multi-jurisdictional cybercrime cases effectively.",
      color: "bg-[#1e3a8a]/90",
    },
    {
      icon: <Microscope className="h-10 w-10 text-white" />,
      title: "National Cyber Forensic Laboratory (NCFL)",
      description:
        "Provides advanced forensic tools, techniques, and expertise to assist law enforcement agencies in the investigation of cybercrimes and collection of digital evidence.",
      color: "bg-[#1e3a8a]",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      title: "National Cybercrime Training Centre (NCTC)",
      description:
        "Builds capacity among law enforcement personnel, prosecutors, and judicial officers through specialized training programs on cybercrime investigation, digital evidence handling, and legal frameworks.",
      color: "bg-[#1e3a8a]/80",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "National Cybercrime Research & Innovation Centre (NCR&IC)",
      description:
        "Undertakes research on emerging cybercrime trends, develops innovative solutions, and creates tools and technologies to enhance cybercrime prevention and investigation capabilities.",
      color: "bg-[#1e3a8a]/90",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" ref={setRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Verticals of I4C</h2>
          <div className="w-20 h-1 bg-[#1e3a8a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Indian Cyber Crime Coordination Centre operates through seven specialized verticals, each focusing on
            different aspects of cybercrime prevention, investigation, and capacity building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <div key={index} className="h-full">
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-none overflow-hidden">
                <CardHeader className={`${vertical.color} text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-white/10 p-3 rounded-lg">{vertical.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-white">{vertical.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-grow bg-white dark:bg-gray-800">
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {vertical.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VerticalsSection
