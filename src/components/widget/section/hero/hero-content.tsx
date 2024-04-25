import type { SectionContentType } from "."

import { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"

import { TabsContent } from "@/components/ui/tabs"

import { HeroTitle } from "./hero-title"
import { HeroButton } from "./hero-button"
import { HeroBackground } from "./hero-background"

type Props = {
  index: number
  content: SectionContentType
  currentContent: SectionContentType
  duration: number
}

const HeroContent = ({
  index,
  content,
  currentContent,
  duration,
}: Props) => {
  const { key, imageUrl, href, title } = content

  const isCurrentContent = key === currentContent.key

  return (
    <div className={cn("w-full px-6 sm:px-12", { "hidden": key !== currentContent.key })}>
      <TabsContent value={key} className="relative flex flex-col items-center justify-center w-full h-screen min-h-[750px] m-0 z-40">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.25fr] 2xl:grid-cols-[1fr_0.5fr] gap-8 overflow-hidden">
          <div>
            <HeroTitle text={title} isAnimate={isCurrentContent} />
            <HeroButton href={href} isAnimate={isCurrentContent} />
          </div>
        </div>
      </TabsContent>
      <HeroBackground index={index} text={key} duration={duration} imageUrl={imageUrl} currentContent={currentContent} />
    </div>
  )
}

export { HeroContent }
