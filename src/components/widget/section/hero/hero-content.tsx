import type { SectionContentType } from "."

import { ReactNode, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

import { TabsContent } from "@/components/ui/tabs"

type Props = {
  text: string
  content: ReactNode
  imageUrl: string
  currentTab: SectionContentType
  duration: number
}

const HeroContent = ({
  text,
  content,
  imageUrl,
  currentTab,
  duration,
}: Props) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.25],
      transition: { duration: duration / 1000, repeat: Infinity }
    })
  }, [controls, currentTab, duration])

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 1 }
    })
  }, [controls, currentTab])

  return (
    <div key={text} className={cn("w-full", { "hidden": text !== currentTab.key })}>
      <TabsContent value={text} className="relative flex flex-col items-center justify-center w-full h-screen min-h-[750px] m-0 z-40">
        {content}
      </TabsContent>
      <motion.div
        animate={controls}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)), url(${imageUrl})` }}
      />
    </div>
  )
}

export { HeroContent }
