"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"
import { easeOut } from "@/lib/animate-times"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface Value {
  key: string;
  text: string;
  image: string;
}

const values: Value[] = [
  {
    key: "tab1",
    text: "tab1",
    image: "animals1.jpg",
  }, {
    key: "tab2",
    text: "tab2",
    image: "animals2.jpg",
  }, {
    key: "tab3",
    text: "tab3",
    image: "animals3.jpg",
  }, {
    key: "tab4",
    text: "tab4",
    image: "animals4.jpg",
  },
]

export default function Home() {
  const [currentTab, setCurrentTab] = useState(values[0])

  const duration = 10000

  const handleValueChange = useCallback((value: string) => {
    setCurrentTab(prev => {
      if (prev.key !== value) {
        return values.find(current => current.key === value)!
      }
      return prev
    })
  }, [])

  useEffect(() => {
    let changeTabs = setInterval(() => {
      setCurrentTab(prev => {
        const prevIndex = values.findIndex(current => current.key === prev.key)
        const nextIndex = (prevIndex + 1) % values.length

        return values[nextIndex]
      })
    }, duration)

    return () => clearInterval(changeTabs)
  }, [currentTab])

  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    const startInterval = () => {
      const startTime = Date.now()
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progressRatio = elapsed / duration
        if (progressRatio >= 1) {
          if (interval) {
            clearInterval(interval)
          }
          setProgress(1)
        } else {
          setProgress(easeOut(progressRatio))
        }
      }, duration / 1000)
    }

    setProgress(0)
    startInterval()

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [currentTab])

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.25],
      transition: { duration: duration / 1000, repeat: Infinity }
    })
  }, [controls, currentTab])

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 1 }
    })
  }, [controls, currentTab])

  return (
    <div className="relative overflow-hidden">
      <Tabs defaultValue={currentTab.key} value={currentTab.key} className="w-full" onValueChange={handleValueChange}>
        <div className="h-screen min-h-[750px] flex flex-col items-center flex-1">
          {values.map((value) => (
            <div key={value.key} className={cn("w-full", { "hidden": value.key !== currentTab.key })}>
              <TabsContent value={value.key} className="relative flex flex-col items-center justify-center w-full h-screen min-h-[750px] m-0 z-40">
                {value.text}
              </TabsContent>
              <motion.div
                animate={controls}
                className={cn("absolute inset-0 bg-cover bg-center", { "hidden": value.key !== currentTab.key })}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .55), rgba(0, 0, 0, .45)), url(${value.image})` }}
              />
            </div>
          ))}
        </div>
        <TabsList loop className="absolute right-0 bottom-0 left-0 w-full flex gap-[5%] px-8 pt-4 pb-16 z-50">
          {values.map((value) => {
            return (
              <div key={value.key} className="w-full">
                <TabsTrigger value={value.key} key={value.key}
                  className={cn("p-0 text-lg text-[#b1b1b1] capitalize justify-start font-normal w-full pt-2 pb-4",
                    {
                      "text-white": value.key === currentTab.key
                    }
                  )}
                >
                  {value.text}
                </TabsTrigger>
                <Progress value={value.key !== currentTab.key ? 0 : progress * 100} className="w-full h-[1px]" />
              </div>
            )
          })}
        </TabsList>
      </Tabs>
    </div>
  )
}
