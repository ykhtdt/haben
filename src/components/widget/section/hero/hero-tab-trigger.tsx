import type { SectionContentType } from "."

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { easeOut } from "@/lib/animate-times"

import { TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

type Props = {
  text: string
  currentContent: SectionContentType
  duration: number
}

const updateFrequency = 300

const HeroTabTrigger = ({
  text,
  currentContent,
  duration,
}: Props) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    const startProgressUpdate = () => {
      setProgress(0)

      const startTime = Date.now()

      interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progressRatio = elapsed / duration

        setProgress(easeOut(progressRatio))
      }, duration / updateFrequency)
    }

    setProgress(0)
    startProgressUpdate()

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [currentContent, duration])

  const isActive = text === currentContent.key
  const progressValue = text !== currentContent.key ? 0 : progress * 100

  return (
    <TabsTrigger value={text} className="flex-col p-0 capitalize font-normal w-full data-[state=active]:shadow-none">
      <div className={cn("w-full text-[#B1B1B1] text-left text-xs sm:text-lg pt-2 pb-4", { "text-white": isActive })}>
        {text}
      </div>
      <Progress value={progressValue} aria-label={`${text} loading progress`} className="w-full h-[1px]" />
    </TabsTrigger>
  )
}

export { HeroTabTrigger }
