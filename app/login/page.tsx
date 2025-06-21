import LoginForm from "@/components/login-form"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_of_i4c-Ew2IUc0uPIPS3LM4rmiD5XWPBkDDfn.png"
              alt="I4C Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl font-bold text-[#1e3a8a]">I4C</h1>
              <p className="text-xs text-gray-600">Ministry of Home Affairs</p>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Access the National Cybercrime Reporting Portal
          </p>
        </div>
        <LoginForm />
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-[#1e3a8a] hover:text-[#1e3a8a]/80">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
