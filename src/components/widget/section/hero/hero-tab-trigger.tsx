import type { SectionContentType } from "."

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { easeOut } from "@/lib/animate-times"

import { TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

type Props = {
  text: string
  currentTab: SectionContentType
  duration: number
}

const HeroTabTrigger = ({
  text,
  currentTab,
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

  return (
    <TabsTrigger value={text}
      className={cn("flex-col p-0 text-lg text-[#b1b1b1] capitalize justify-start font-normal w-full data-[state=active]:shadow-none",
        {
          "text-white": text === currentTab.key
        }
      )}
    >
      <div className="w-full text-left pt-2 pb-4">
        {text}
      </div>
      <Progress value={text !== currentTab.key ? 0 : progress * 100} className="w-full h-[1px]" />
    </TabsTrigger>
  )
}

export { HeroTabTrigger }
