import type { SectionContentType } from "."

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

import { TabsContent } from "@/components/ui/tabs"

type Props = {
  content: SectionContentType
  currentContent: SectionContentType
  duration: number
}

const HeroContent = ({
  content,
  currentContent,
  duration,
}: Props) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.25],
      transition: { duration: duration / 1000, repeat: Infinity }
    })
  }, [controls, currentContent, duration])

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 1 }
    })
  }, [controls, currentContent])

  const { key, imageUrl, children } = content

  return (
    <div className={cn("w-full", { "hidden": key !== currentContent.key })}>
      <TabsContent value={key} className="relative flex flex-col items-center justify-center w-full h-screen min-h-[750px] m-0 z-40">
        {children}
      </TabsContent>
      <motion.div
        animate={controls}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)), url(${imageUrl})` }}
      />
    </div>
  )
}

export { HeroContent }
