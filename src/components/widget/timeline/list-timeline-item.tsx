"use client"

import type { ListTimeLineItemType } from "."

import { useEffect, useRef } from "react"
import Link from "next/link"

import { motion, useMotionValue, useAnimation } from "framer-motion"

type Props = {
  index: number
  item: ListTimeLineItemType
}

const initialTranslateY = "-100%"

const ListTimeLineItem = ({
  index,
  item,
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
        translateY.set(y <= 50 ? "-100%" : "100%")
        controls.start({ translateY: "0%" })
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const rect = currentLinkRef?.getBoundingClientRect()

      if (rect) {
        const y = ((e.clientY - rect.top) / rect.height) * 100
        controls.start({ translateY: y <= 50 ? "-100%" : "100%" })
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
      <Link href="/" ref={linkRef} className="relative overflow-hidden block w-full py-4 lg:py-8 px-6 lg:px-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
        <motion.div
          style={{ translateY }}
          animate={controls}
          transition={transition}
          className={`absolute top-0 left-0 w-full h-full ${background}`}
        />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
          <div className="w-full lg:w-1/4 font-bold text-xl lg:text-3xl">
            {item.children[0]}
          </div>
          <div className="w-full lg:w-1/4 font-normal text-base lg:text-lg">
            {item.children[1]}
          </div>
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-between flex-grow font-medium text-xs lg:text-sm gap-2">
            <div>
              {item.children[2]}
            </div>
            <span className="border border-black rounded-full py-1 px-2 whitespace-nowrap">
              {item.date}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export { ListTimeLineItem }
