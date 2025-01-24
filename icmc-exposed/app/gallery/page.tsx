"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageItem {
  id: number
  src: string
  alt: string
}

export default function Gallery() {
  const [images] = useState<ImageItem[]>([
    { id: 1, src: "https://i.imgur.com/ds4YBvR.png", alt: "Evidence 1" },
    { id: 2, src: "https://i.imgur.com/aX0kz1n.png", alt: "Evidence 2" },
    { id: 3, src: "https://i.imgur.com/X56gDtT.png", alt: "Evidence 3" },
    { id: 4, src: "https://i.imgur.com/da5knGm.png", alt: "Evidence 4" },
    { id: 5, src: "https://i.imgur.com/cp2i04V.png", alt: "Evidence 5" },
    { id: 6, src: "https://i.imgur.com/c05RLww.png", alt: "Evidence 6" },
    { id: 7, src: "https://i.imgur.com/7Avn11e.png", alt: "Evidence 7" },
    { id: 8, src: "https://i.imgur.com/BZf6Kcf.png", alt: "Evidence 8" },
    { id: 9, src: "https://i.imgur.com/5zBTgGH.png", alt: "Evidence 9" },
    { id: 10, src: "https://i.imgur.com/rf2QQkv.png", alt: "Evidence 10" },
    { id: 11, src: "https://i.imgur.com/q1yEJ7A.png", alt: "Evidence 11" },
    { id: 12, src: "https://i.imgur.com/xxpLG3u.png", alt: "Evidence 12" },
    { id: 13, src: "https://i.imgur.com/LQsZOFD.png", alt: "Evidence 13" },
    { id: 14, src: "https://i.imgur.com/9NxpF16.png", alt: "Evidence 14" },
    { id: 15, src: "https://i.imgur.com/8utW813.png", alt: "Evidence 15" },
    { id: 16, src: "https://i.imgur.com/6Brjs9A.png", alt: "Evidence 16" },
    { id: 17, src: "https://i.imgur.com/o8XWNGC.png", alt: "Evidence 17" },
    { id: 18, src: "https://i.imgur.com/IeXSRnZ.png", alt: "Evidence 18" },
    { id: 19, src: "https://i.imgur.com/MJzTlUh.png", alt: "Evidence 19" },
    { id: 20, src: "https://i.imgur.com/eCXegWf.png", alt: "Evidence 20" },
    { id: 21, src: "https://i.imgur.com/Jy7dVkv.png", alt: "Evidence 21" },
    { id: 22, src: "https://i.imgur.com/1HxlSMT.png", alt: "Evidence 22" },
    { id: 23, src: "https://i.imgur.com/cA6AozM.png", alt: "Evidence 23" },
    { id: 24, src: "https://i.imgur.com/UTrPWNt.png", alt: "Evidence 24" },
    { id: 25, src: "https://i.imgur.com/fgwIWr1.png", alt: "Evidence 25" },
    { id: 26, src: "https://i.imgur.com/mxuWjeo.png", alt: "Evidence 26" },
    { id: 27, src: "https://i.imgur.com/O9PG2Sh.png", alt: "Evidence 27" },
  ])

  const [unblurredImages, setUnblurredImages] = useState<Set<number>>(new Set())

  const handleImageClick = (image: ImageItem, event: React.MouseEvent) => {
    if (unblurredImages.has(image.id)) {
      event.preventDefault()
      window.open(image.src, "_blank")
    } else {
      setUnblurredImages((prev) => {
        const newSet = new Set(prev)
        newSet.add(image.id)
        return newSet
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Evidence Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={(e) => handleImageClick(image, e)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={image.id === 1}
                className={`object-cover transition-all duration-500 ${
                  !unblurredImages.has(image.id) ? "blur-xl" : "blur-0"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  unblurredImages.has(image.id) ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-white text-lg font-medium">
                  {unblurredImages.has(image.id) ? "Click to view full size" : "Click to reveal"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

