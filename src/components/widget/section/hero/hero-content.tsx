import type { SectionContentType } from "."

import { useEffect } from "react"
import Link from "next/link"

import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

import { TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

type Props = {
  content: SectionContentType
  currentContent: SectionContentType
  duration: number
}

const MotionButton= motion(Button)

const HeroContent = ({
  content,
  currentContent,
  duration,
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

  const titleMotion = {
    initial: { opacity: 0,  y: "50px", },
    visible: { opacity: 1,  y: "0" },
  }

  const buttonMotion = {
    initial: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const { key, imageUrl, href, title } = content
  const isCurrentContent = key === currentContent.key

  return (
    <div className={cn("w-full px-6 sm:px-12", { "hidden": key !== currentContent.key })}>
      <TabsContent value={key} className="relative flex flex-col items-center justify-center w-full h-screen min-h-[750px] m-0 z-40">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.25fr] 2xl:grid-cols-[1fr_0.5fr] gap-8 overflow-hidden">
          <div>
            <motion.div
              initial="initial" 
              animate={isCurrentContent ? "visible" : "hidden"}
              variants={titleMotion}
              transition={{ duration: 0.75, ease: "easeIn"}}
              className="text-3xl 2xl:text-5xl mb-6 sm:mb-12 leading-snug 2xl:leading-normal capitalize"
            >
              {title}
            </motion.div>
            <MotionButton
              initial="initial"
              animate={isCurrentContent ? "visible" : "hidden"}
              variants={buttonMotion}
              variant="outline"
              transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
              asChild
              className="border-white hover:bg-[#AAA197] rounded-full uppercase"
            >
              <Link href={href}>
                View details
              </Link>
            </MotionButton>
          </div>
        </div>
      </TabsContent>
      <motion.div
        animate={imageControls}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)), url(${imageUrl})` }}
      />
    </div>
  )
}

export { HeroContent }
