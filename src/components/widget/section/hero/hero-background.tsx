import type { SectionContentType } from "."

import { useEffect } from "react"
import Image from "next/image"

import { motion, useAnimation } from "framer-motion"

const MotionImage = motion(Image)

type Props = {
  index: number
  text: string
  duration: number
  imageUrl: string
  currentContent: SectionContentType
}

const HeroBackground = ({
  index,
  text,
  duration,
  imageUrl,
  currentContent,
}: Props) => {
  const imageControls = useAnimation()

  useEffect(() => {
    imageControls.start({
      scale: [1, 1.25],
      transition: { duration: duration / 1000, repeat: Infinity }
    })
  }, [imageControls, currentContent, duration])

  useEffect(() => {
    imageControls.start({
      opacity: [0, 1],
      transition: { duration: 1 }
    })
  }, [imageControls, currentContent])

  return (
    <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5))" }}>
      <MotionImage
        src={`/${imageUrl}`}
        alt={`${text} Tab Background Image`}
        animate={imageControls}
        className="will-change-transform object-cover -z-100"
        sizes="100vw"
        priority={index === 0}
        fill
      />
    </div>
  )
}

export { HeroBackground }
