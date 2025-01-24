"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Head from "next/head"

export default function Home() {
  const [isJailed, setIsJailed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJailed((prev) => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
    if (favicon) {
      favicon.href = isJailed
        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jail-Qjp6EvP4iiRsI5ScLPRz1LvSQb9Y9j.png"
        : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/153784457-ZnXm6fbzTcrbWygcgDFmn2mZcfqsak.png"
    }
  }, [isJailed])

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/153784457-ZnXm6fbzTcrbWygcgDFmn2mZcfqsak.png"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 text-white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/153784457-ZnXm6fbzTcrbWygcgDFmn2mZcfqsak.png"
              alt="IceCream"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                isJailed ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jail-Qjp6EvP4iiRsI5ScLPRz1LvSQb9Y9j.png"
              alt="Jailed"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                isJailed ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 animate-pulse">
            IceCreamMC Exposed
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Welcome to our website! This is to primarily expose Pancakse, a <b>homophobic, racist, and disrespectful</b> person. Clicking the button below will
            include lots of images. Proceed at your own cost.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 group"
          >
            Enter the site
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </>
  )
}

