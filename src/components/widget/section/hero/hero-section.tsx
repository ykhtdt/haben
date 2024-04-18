"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"
import { easeOut } from "@/lib/animate-times"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

type Content = {
  key: string;
  children: string;
  image: string;
}

type Props = {
  contents: Content[];
  duration?: number;
}

const HeroSection = ({
  contents,
  duration = 10000,
}: Props) => {
  const [currentTab, setCurrentTab] = useState<Content>(contents[0])
  const [progress, setProgress] = useState<number>(0)

  const handleChange = useCallback((value: string) => {
    setCurrentTab(prev => {
      if (prev.key !== value) {
        return contents.find(current => current.key === value)!
      }

      return prev
    })
  }, [contents])

  useEffect(() => {
    const autoRotateTab = setInterval(() => {
      setCurrentTab(prev => {
        const prevTabIndex = contents.findIndex(current => current.key === prev.key)
        const nextTabIndex = (prevTabIndex + 1) % contents.length

        return contents[nextTabIndex]
      })
    }, duration)

    return () => clearInterval(autoRotateTab)
  }, [contents, currentTab, duration])  

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    const startProgressUpdate = () => {
      const startTime = Date.now()

      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progressRatio = elapsed / duration

        if (progressRatio >= 1) {
          if (interval) {
            clearInterval(interval)
          }
          setProgress(0)
        } else {
          setProgress(easeOut(progressRatio))
        }
      }, duration / 1000)
    }

    setProgress(0)
    startProgressUpdate()

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [currentTab, duration])

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
    <div className="relative overflow-hidden">
      <Tabs defaultValue={currentTab.key} value={currentTab.key} className="w-full" onValueChange={handleChange}>
        <div className="h-screen min-h-[750px] flex flex-col items-center flex-1">
          {contents.map((content) => (
            <div key={content.key} className={cn("w-full", { "hidden": content.key !== currentTab.key })}>
              <TabsContent value={content.key} className="relative flex flex-col items-center justify-center w-full h-screen min-h-[750px] m-0 z-40">
                {content.children}
              </TabsContent>
              <motion.div
                animate={controls}
                className={cn("absolute inset-0 bg-cover bg-center", { "hidden": content.key !== currentTab.key })}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)), url(${content.image})` }}
              />
            </div>
          ))}
        </div>
        <TabsList loop className="absolute right-0 bottom-0 left-0 w-full flex gap-[5%] px-8 pt-4 pb-16 z-50">
          {contents.map((content) => {
            return (
              <div key={content.key} className="w-full">
                <TabsTrigger value={content.key} key={content.key}
                  className={cn("p-0 text-lg text-[#b1b1b1] capitalize justify-start font-normal w-full pt-2 pb-4",
                    {
                      "text-white": content.key === currentTab.key
                    }
                  )}
                >
                  {content.key}
                </TabsTrigger>
                <Progress value={content.key !== currentTab.key ? 0 : progress * 100} className="w-full h-[1px]" />
              </div>
            )
          })}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default HeroSection
