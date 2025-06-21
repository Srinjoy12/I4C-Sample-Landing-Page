import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, ArrowLeft, FileText, Phone, Globe } from "lucide-react"

export default function ReportCrimePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_of_i4c-Ew2IUc0uPIPS3LM4rmiD5XWPBkDDfn.png"
                alt="I4C Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <h1 className="text-lg font-bold text-[#1e3a8a]">I4C</h1>
                <p className="text-xs text-gray-600">Ministry of Home Affairs</p>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              National Cybercrime Reporting Portal
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Report cybercrime incidents securely and track your complaint status
            </p>
          </div>

          {/* Security Alert */}
          <Alert className="mb-8 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              You are now logged in to the secure cybercrime reporting portal. Your identity and complaint details are
              protected.
            </AlertDescription>
          </Alert>

          {/* Reporting Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#1e3a8a] mb-2" />
                <CardTitle>File New Complaint</CardTitle>
                <CardDescription>Report a new cybercrime incident with detailed information</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">Start New Report</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Globe className="h-8 w-8 text-[#1e3a8a] mb-2" />
                <CardTitle>Track Complaint</CardTitle>
                <CardDescription>Check the status of your previously filed complaints</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
                  Track Status
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Phone className="h-8 w-8 text-[#1e3a8a] mb-2" />
                <CardTitle>Emergency Helpline</CardTitle>
                <CardDescription>Call our 24/7 helpline for immediate assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700">
                  Call 1930
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Important Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Types of Cybercrime We Handle:</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Financial fraud and online banking fraud</li>
                    <li>• Identity theft and impersonation</li>
                    <li>• Cyberbullying and harassment</li>
                    <li>• Phishing and email scams</li>
                    <li>• Social media crimes</li>
                    <li>• Ransomware and malware attacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What You'll Need:</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Detailed description of the incident</li>
                    <li>• Screenshots or evidence (if available)</li>
                    <li>• Transaction details (for financial crimes)</li>
                    <li>• Contact information of suspects (if known)</li>
                    <li>• Any communication records</li>
                    <li>• Your contact details for follow-up</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
              File Complaint Now
            </Button>
            <Button size="lg" variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/5">
              Download Mobile App
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
