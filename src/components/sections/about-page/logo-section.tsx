"use client"

import { LogoCarousel } from "@/components/ui/logo-carosel"
import React, { useState, useEffect } from "react"

export function LogoCarouselDemo() {
  const [columnCount, setColumnCount] = useState(5)

  useEffect(() => {
    const updateColumnCount = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setColumnCount(2) // For mobile screens
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setColumnCount(3) // For tablet screens
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setColumnCount(4) // For small desktop screens
      } else {
        setColumnCount(5) // For large desktop screens
      }
    }

    // Initial check
    updateColumnCount()

    // Add event listener for window resize
    window.addEventListener("resize", updateColumnCount)

    // Cleanup
    return () => window.removeEventListener("resize", updateColumnCount)
  }, [])

  return (
    <div className="space-y-8 py-24">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <LogoCarousel columnCount={columnCount} />
      </div>
    </div>
  )
}
