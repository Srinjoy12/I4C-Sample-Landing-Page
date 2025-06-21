"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ImageIcon, FileText, ExternalLink } from "lucide-react"

const MediaGallery = () => {
  const [ref, setRef] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const images = [
    {
      src: "/images/cyber-conference-ceremony.jpg",
      title: "National Cyber Conference Ceremony",
      description: "Senior officials and law enforcement personnel at a major cybersecurity policy announcement event",
    },
    {
      src: "/images/ncrf-meeting.jpg",
      title: "NCRF Policy Meeting",
      description: "Lt. Gen Rajesh Pant (Retd.) leading the National Cybersecurity Reference Framework discussion",
    },
    {
      src: "/images/training-group-photo.jpg",
      title: "Cybersecurity Training Program",
      description:
        "Large group of law enforcement officers and cybersecurity professionals during capacity building session",
    },
    {
      src: "/images/operations-center.jpg",
      title: "I4C Operations Center",
      description: "State-of-the-art cybersecurity monitoring and response facility with 24/7 operations capability",
    },
    {
      src: "/images/i4c-award-ceremony.png",
      title: "I4C Excellence Awards",
      description: "Annual recognition ceremony honoring outstanding contributions to cybersecurity initiatives",
    },
    {
      src: "/images/cybercrime-operation.jpg",
      title: "Cybercrime Investigation Success",
      description: "Law enforcement officials showcasing successful cybercrime operation and arrests",
    },
  ]

  const videos = [
    {
      id: "1",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Cyber+Security+Awareness+Video",
      title: "Cyber Security Awareness for Citizens",
      duration: "5:32",
      description: "Learn how to protect yourself from common cyber threats and scams",
    },
    {
      id: "2",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Report+Cyber+Crime+Tutorial",
      title: "How to Report Cyber Crime",
      duration: "3:45",
      description: "Step-by-step guide to reporting cyber crimes through NCRP portal",
    },
    {
      id: "3",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Digital+Payment+Safety+Guide",
      title: "Digital Payment Safety",
      duration: "4:18",
      description: "Best practices for secure online transactions and mobile banking",
    },
    {
      id: "4",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Social+Media+Security+Tips",
      title: "Social Media Security",
      duration: "6:12",
      description: "Protecting your privacy and data on social media platforms",
    },
  ]

  const documents = [
    {
      title: "Cyber Security Guidelines 2023",
      type: "PDF",
      size: "2.4 MB",
      description: "Comprehensive guidelines for organizations to enhance cybersecurity",
    },
    {
      title: "Annual Report 2022",
      type: "PDF",
      size: "8.7 MB",
      description: "Detailed report on I4C activities, achievements, and statistics",
    },
    {
      title: "Digital Forensics Training Manual",
      type: "PDF",
      size: "5.2 MB",
      description: "Training material for law enforcement agencies on digital evidence",
    },
    {
      title: "Citizen Awareness Brochure",
      type: "PDF",
      size: "1.8 MB",
      description: "Educational brochure on cyber safety for general public",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" ref={setRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Media Gallery</h2>
          <div className="w-20 h-1 bg-[#1e3a8a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of images, videos, and documents showcasing I4C's initiatives and activities.
          </p>
        </div>

        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="images">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative group">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <ImageIcon className="h-4 w-4 mr-2" />
                          View Full Size
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{image.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div key={index}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 group-hover:bg-white transition-colors duration-300">
                          <Play className="h-8 w-8 text-[#1e3a8a]" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{video.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{doc.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{doc.type}</span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
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
            View All Media
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MediaGallery
