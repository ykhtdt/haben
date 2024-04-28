"use client"

import { useEffect, useState } from "react"

import { motion, useAnimation } from "framer-motion"
import { ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

const ScrollTop = () => {
  const controls = useAnimation()

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        controls.start({
          opacity: 1,
          transition: {
            duration: 0.25,
          }
        })

        setIsVisible(true)
      } else {
        controls.start({
          opacity: 0,
          transition: {
            duration: 0.25,
          },
        }).then(() => setIsVisible(false))
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [controls])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <motion.div
      animate={controls}
      className={cn("fixed z-[999] bottom-12 right-12", { "hidden": !isVisible })}
    >
      <Button
        onClick={handleScrollToTop}
        className="rounded-full w-12 h-12 p-2 flex justify-center flex-col items-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-8 h-8" />
      </Button>
    </motion.div>
  )
}

export { ScrollTop }
