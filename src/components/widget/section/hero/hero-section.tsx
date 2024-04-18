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
  const [currentTab, setCurrentTab] = useState<SectionContentType>(contents[0])

  const handleChange = useCallback((selectedTabKey: string) => {
    if (currentTab.key !== selectedTabKey) {
      setCurrentTab(contents.find(current => current.key === selectedTabKey)!)
    }
  }, [contents, currentTab.key])

  useEffect(() => {
    const autoRotateContent = setInterval(() => {
      setCurrentTab(prev => {
        const prevTabIndex = contents.findIndex(current => current.key === prev.key)
        const nextTabIndex = (prevTabIndex + 1) % contents.length

        return contents[nextTabIndex]
      })
    }, duration)

    return () => clearInterval(autoRotateContent)
  }, [contents, currentTab, duration])  

  return (
    <div className="relative overflow-hidden">
      <Tabs defaultValue={currentTab.key} value={currentTab.key} className="w-full" onValueChange={handleChange}>
        <div className="h-screen min-h-[750px] flex flex-col items-center flex-1">
          {contents.map((content) => (
            <HeroContent
              key={content.key}
              text={content.key}
              currentTab={currentTab}
              content={content.children}
              duration={duration}
              imageUrl={content.image}
            />
          ))}
        </div>
        <TabsList loop className="absolute right-0 bottom-0 left-0 w-full flex gap-[5%] px-8 pt-4 pb-16 z-50">
          {contents.map((content) => (
            <HeroTabTrigger
              key={content.key}
              text={content.key}
              currentTab={currentTab}
              duration={duration}
            />
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export { HeroSection }
