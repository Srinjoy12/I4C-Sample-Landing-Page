"use client"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Calendar, ChevronRight } from "lucide-react"

const NewsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const newsItems = [
    {
      title: "National Cybersecurity Reference Framework (NCRF) Launched",
      date: "June 12, 2023",
      category: "Policy",
      description:
        "Lt. Gen Rajesh Pant (Retd.) announces the launch of National Cybersecurity Reference Framework to strengthen India's cyber resilience and security infrastructure.",
      image: "/images/ncrf-launch.jpg",
    },
    {
      title: "I4C Excellence Awards Ceremony Recognizes Outstanding Contributions",
      date: "May 28, 2023",
      category: "Awards",
      description:
        "Annual recognition ceremony honors individuals and organizations for their exceptional contributions to cybersecurity and cybercrime prevention initiatives.",
      image: "/images/i4c-award-ceremony.png",
    },
    {
      title: "Major Cybercrime Network Dismantled in Multi-State Operation",
      date: "August 17, 2023",
      category: "Operations",
      description:
        "Gurugram Police in coordination with I4C successfully arrests cybercrime syndicate involved in large-scale online fraud and financial crimes.",
      image: "/images/cybercrime-operation.jpg",
    },
  ]

  const alerts = [
    {
      title: "Phishing Campaign Targeting Banking Customers",
      date: "June 3, 2023",
      description: "Be aware of emails claiming to be from major banks asking for verification of account details.",
      severity: "high",
    },
    {
      title: "Ransomware Targeting Healthcare Institutions",
      date: "May 28, 2023",
      description:
        "Healthcare institutions should be on high alert for ransomware attacks exploiting outdated systems.",
      severity: "critical",
    },
    {
      title: "Mobile App Scams on the Rise",
      date: "May 20, 2023",
      description:
        "Fraudulent mobile apps mimicking banking and financial services are being distributed through unofficial channels.",
      severity: "medium",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      default:
        return "bg-[#1e3a8a]/10 text-[#1e3a8a] dark:bg-[#1e3a8a]/30 dark:text-[#1e3a8a]/80"
    }
  }

  return (
    <section id="news" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">News & Alerts</h2>
          <div className="w-20 h-1 bg-[#1e3a8a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and security alerts from I4C.
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="alerts">Security Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                      <Badge className="absolute top-3 right-3 bg-[#1e3a8a]">{item.category}</Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 flex-grow">
                      <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="text-[#1e3a8a] dark:text-[#1e3a8a]/80 p-0 hover:bg-[#1e3a8a]/5 hover:text-[#1e3a8a]/90 dark:hover:text-[#1e3a8a]/70"
                      >
                        Read More
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="space-y-6">
              {alerts.map((alert, index) => (
                <div key={index}>
                  <Card
                    className={`border-l-4 ${
                      alert.severity === "critical"
                        ? "border-l-red-600"
                        : alert.severity === "high"
                          ? "border-l-orange-600"
                          : "border-l-yellow-600"
                    }`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <AlertCircle
                            className={`h-5 w-5 mr-2 ${
                              alert.severity === "critical"
                                ? "text-red-600"
                                : alert.severity === "high"
                                  ? "text-orange-600"
                                  : "text-yellow-600"
                            }`}
                          />
                          <CardTitle className="text-lg">{alert.title}</CardTitle>
                        </div>
                        <Badge className={`${getSeverityColor(alert.severity)}`}>
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {alert.date}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{alert.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="text-[#1e3a8a] dark:text-[#1e3a8a]/80 p-0 hover:bg-[#1e3a8a]/5 hover:text-[#1e3a8a]/90 dark:hover:text-[#1e3a8a]/70"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5 dark:border-[#1e3a8a]/80 dark:text-[#1e3a8a]/80 dark:hover:bg-[#1e3a8a]/30"
          >
            View All Updates
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
