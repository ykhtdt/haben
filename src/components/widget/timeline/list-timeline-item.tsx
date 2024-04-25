"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

import { motion, useMotionValue, useAnimation } from "framer-motion"

type Props = {
  index: number
}

const initialTranslateY = -100

const ListTimeLineItem = ({
  index,
}: Props) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null)

  const translateY = useMotionValue(initialTranslateY)
  const controls = useAnimation()

  useEffect(() => {
    const currentLinkRef = linkRef.current

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = currentLinkRef?.getBoundingClientRect()

      if (rect) {
        const y = ((e.clientY - rect.top) / rect.height) * 100
        translateY.set(y <= 50 ? -100 : 100)
        controls.start({ translateY: 0 })
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const rect = currentLinkRef?.getBoundingClientRect()

      if (rect) {
        const y = ((e.clientY - rect.top) / rect.height) * 100
        controls.start({ translateY: y <= 50 ? -100 : 100 })
      }
    }

    if (currentLinkRef) {
      currentLinkRef.addEventListener("mouseenter", handleMouseEnter)
      currentLinkRef.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (currentLinkRef) {
        currentLinkRef.removeEventListener("mouseenter", handleMouseEnter)
        currentLinkRef.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [controls, translateY])

  const transition = {
    duration: 0.25,
    ease: "easeOut",
  }

  let background

  switch (index % 4) {
  case 0:
    background = "bg-[#B5C0D0]"
    break
  case 1:
    background = "bg-[#CCD3CA]"
    break
  case 2:
    background = "bg-[#F5E8DD]"
    break
  case 3:
    background = "bg-[#EED3D9]"
    break
  }

  return (
    <li className="bg-white text-black first:border-t border-b border-black">
      <Link href="/" ref={linkRef} className="relative overflow-hidden block w-full py-8 px-6 sm:px-12">
        <motion.div
          style={{ translateY }}
          animate={controls}
          transition={transition}
          className={`absolute top-0 left-0 w-full h-full ${background}`}
        />
        <div className="relative flex flex-row items-center gap-4">
          <div className="w-1/4 font-bold text-3xl">
            Sed nunc
          </div>
          <div className="w-1/4 font-normal text-lg">
            Pellentesque efficitur eros
          </div>
          <div className="flex flex-row items-center justify-between flex-grow font-medium text-sm">
            <div>
              Mauris lectus nunc, dapibus vitae ipsum et, mollis cursus turpis
            </div>
            <span className="border border-black rounded-full py-1 px-2">
              2024
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export { ListTimeLineItem }
