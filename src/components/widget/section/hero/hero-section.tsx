"use client"

import type { SectionContentType } from "."

import { useCallback, useEffect, useState } from "react"

import { Tabs, TabsList } from "@/components/ui/tabs"

import { HeroContent } from "./hero-content"
import { HeroTabTrigger } from "./hero-tab-trigger"

type Props = {
  contents: SectionContentType[]
  duration?: number
}

const HeroSection = ({
  contents,
  duration = 10000,
}: Props) => {
  const [currentContent, setCurrentContent] = useState<SectionContentType>(contents[0])

  const handleChange = useCallback((selectedTabKey: string) => {
    if (currentContent.key !== selectedTabKey) {
      setCurrentContent(contents.find(current => current.key === selectedTabKey)!)
    }
  }, [contents, currentContent.key])

  useEffect(() => {
    const autoRotateContent = setInterval(() => {
      setCurrentContent(prev => {
        const prevTabIndex = contents.findIndex(current => current.key === prev.key)
        const nextTabIndex = (prevTabIndex + 1) % contents.length

        return contents[nextTabIndex]
      })
    }, duration)

    return () => clearInterval(autoRotateContent)
  }, [contents, currentContent, duration])  

  return (
    <div className="relative overflow-hidden">
      <Tabs defaultValue={currentContent.key} value={currentContent.key} className="w-full" onValueChange={handleChange}>
        <div className="h-screen min-h-[750px] flex flex-col items-center flex-1">
          {contents.map((content, i) => (
            <HeroContent
              index={i}
              key={content.key}
              content={content}
              currentContent={currentContent}
              duration={duration}
            />
          ))}
        </div>
        <TabsList loop className="absolute right-0 bottom-0 left-0 w-full flex gap-[5%] px-6 sm:px-12 pt-4 pb-16 z-50 rounded-none bg-gradient-to-b from-zinc-950/0 to-zinc-950/80">
          {contents.map((content) => (
            <HeroTabTrigger
              key={content.key}
              text={content.key}
              currentContent={currentContent}
              duration={duration}
            />
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export { HeroSection }
