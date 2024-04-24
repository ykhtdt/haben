import type { SectionContentType } from "."

import { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"

type Props = {
  duration: number
  imageUrl: string
  currentContent: SectionContentType
}

const HeroBackground = ({
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
    <motion.div
      animate={imageControls}
      className="absolute inset-0 bg-cover bg-center will-change-transform"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)), url(${imageUrl})` }}
    />
  )
}

export { HeroBackground }
