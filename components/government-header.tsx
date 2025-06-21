"use client"

import Image from "next/image"
import { Accessibility } from "lucide-react"
import { Button } from "@/components/ui/button"

const GovernmentHeader = () => {
  return (
    <div className="w-full">
      {/* Top Blue Bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-sm">
              <span className="font-medium">भारत सरकार</span>
              <span className="mx-2">|</span>
              <span>GOVERNMENT OF INDIA</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">गृह मंत्रालय</span>
              <span className="mx-2">|</span>
              <span>MINISTRY OF HOME AFFAIRS</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-1"
              title="Accessibility Options"
            >
              <Accessibility className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Left - Government Emblem */}
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16">
                <Image
                  src="https://blobs.vusercontent.net/blob/Ministry_of_Home_Affairs_India-IEsDnqBCUuvsi3LdQPfkIOScSYCEVt.svg"
                  alt="Government of India Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
            </div>

            {/* Center - I4C Logo and Title */}
            <div className="flex-1 flex items-center justify-center space-x-6">
              <div className="relative h-16 w-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_of_i4c-Ew2IUc0uPIPS3LM4rmiD5XWPBkDDfn.png"
                  alt="I4C Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-1">भारतीय साइबर अपराध समन्वय केंद्र</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                  Indian Cybercrime Coordination Centre (I4C)
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">सुरक्षित साइबरस्पेस</span>
                  <span className="mx-2">•</span>
                  <span>Working Together With Vigour</span>
                </p>
              </div>
            </div>

            {/* Right - Additional Logos */}
            <div className="flex items-center space-x-4">
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-4">
                {/* Cyber Dost Logo */}
                <div className="relative h-14 w-14">
                  <Image src="/images/cyberdost.png" alt="Cyber Dost" fill className="object-contain" />
                </div>

                {/* Azadi Ka Amrit Mahotsav Logo */}
                <div className="relative h-14 w-20">
                  <Image
                    src="/images/logoAzadi.png"
                    alt="Azadi Ka Amrit Mahotsav - 75 Years of Independence"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GovernmentHeader
