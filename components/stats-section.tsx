"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView) {
      setHasAnimated(true)
    }
  }, [inView])

  const stats = [
    {
      value: 15000,
      label: "Cyber Crime Cases Resolved",
      suffix: "+",
      duration: 2.5,
    },
    {
      value: 500,
      label: "Law Enforcement Agencies Connected",
      suffix: "+",
      duration: 2,
    },
    {
      value: 2,
      label: "Million Citizens Trained",
      suffix: "+",
      duration: 3,
    },
    {
      value: 98,
      label: "Success Rate",
      suffix: "%",
      duration: 2,
    },
  ]

  return (
    <section
      className="py-16 md:py-24 relative bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1e3a8a] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1e3a8a]/70 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Statistics & Impact</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Our nationwide efforts have made significant progress in combating cyber crime and creating a safer digital
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {hasAnimated ? (
                  <CountUp end={stat.value} suffix={stat.suffix} duration={stat.duration} separator="," />
                ) : (
                  "0" + stat.suffix
                )}
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Year-on-Year Progress</h3>
              <p className="text-blue-100 mb-6">
                Our continuous efforts have shown significant improvement in cyber crime prevention and resolution
                across the country.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-blue-100">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  42% increase in cyber crime reporting
                </li>
                <li className="flex items-center text-blue-100">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  65% improvement in case resolution time
                </li>
                <li className="flex items-center text-blue-100">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  28% reduction in financial fraud cases
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="space-y-4">
                {[
                  { year: "2023", value: 85, color: "bg-green-500" },
                  { year: "2022", value: 70, color: "bg-blue-500" },
                  { year: "2021", value: 55, color: "bg-yellow-500" },
                  { year: "2020", value: 40, color: "bg-orange-500" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm text-blue-100">
                      <span>{item.year}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color}`}
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${item.value}%` } : { width: "0%" }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
