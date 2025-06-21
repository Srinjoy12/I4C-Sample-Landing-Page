"use client"

import { motion } from "framer-motion"
import { Shield, Users, Zap, Award } from "lucide-react"
import { useInView } from "react-intersection-observer"

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-[#1e3a8a]" />,
      title: "Cyber Security",
      description:
        "Implementing advanced security measures to protect digital infrastructure and data across the nation.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#1e3a8a]" />,
      title: "Coordination",
      description: "Facilitating seamless coordination between various law enforcement agencies and stakeholders.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#1e3a8a]" />,
      title: "Rapid Response",
      description: "Enabling quick response to cyber threats and incidents through specialized teams and tools.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#1e3a8a]" />,
      title: "Capacity Building",
      description: "Developing skills and capabilities of law enforcement agencies to combat cyber crimes effectively.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About I4C</h2>
          <div className="w-20 h-1 bg-[#1e3a8a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Indian Cyber Crime Coordination Centre (I4C) is an initiative of the Ministry of Home Affairs to deal
            with cyber crimes in a coordinated and comprehensive manner.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <div className="bg-[#1e3a8a]/5 dark:bg-[#1e3a8a]/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a] rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-blue-100 mb-6">
                  To create a safe and secure cyber space for citizens, businesses, and government by preventing cyber
                  crimes and building capacity for effective enforcement.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <span className="bg-[#1e3a8a] rounded-full p-1 mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    Coordinate with law enforcement agencies
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#1e3a8a] rounded-full p-1 mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    Provide technical expertise and resources
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#1e3a8a] rounded-full p-1 mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    Create awareness among citizens
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#1e3a8a] rounded-full p-1 mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    Research and develop new technologies
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-[#1e3a8a]/20 rounded-full animate-ping [animation-duration:3s]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://blobs.vusercontent.net/blob/Ministry_of_Home_Affairs_India-IEsDnqBCUuvsi3LdQPfkIOScSYCEVt.svg"
                      alt="Ministry of Home Affairs Logo"
                      className="w-48 h-48 md:w-56 md:h-56 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
