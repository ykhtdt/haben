import type { LinkItem } from "."

import { useState } from "react"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type Props = {
  links: LinkItem[];
  isOpen: boolean;
}

const MotionLink= motion(Link)

const HeaderMenu = ({ links, isOpen }: Props) => {
  const [isCloseAnimationComplete, setIsCloseAnimationComplete] = useState(true)

  const containerMotion = {
    hidden: { y: "-100vh" },
    visible: { y: "0vh" }
  }

  const containerTransition = {
    duration: 0.5,
    ease: "easeInOut"
  }

  const linkMotion = {
    initial: { opacity: 0, x: "75%", y: "-75%", },
    hover: { opacity: 1, x: ["-75%", "0%"], y: ["75%", "0%"] },
  }

  const handleCloseAnimationComplete = (animate: "visible" | "hidden") => {
    if (animate === "hidden") {
      setIsCloseAnimationComplete(true)
    } else {
      setIsCloseAnimationComplete(false)
    }
  }

  return (
    <motion.div
      className={cn("relative inset-0 w-full h-screen bg-[#AAA197]", { "hidden": !isOpen && isCloseAnimationComplete })}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={containerMotion}
      transition={containerTransition}
      onAnimationComplete={handleCloseAnimationComplete}
    >
      <div className="flex flex-col gap-12 items-start sm:items-center justify-between h-full pt-48 pb-16 px-6 sm:px-12">
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.text}>
              <MotionLink
                href={link.href}
                title={link.text}
                initial="initial"
                whileHover="hover"
                whileFocus="hover"
                className="flex gap-4 items-end focus:outline-none [&>span]:focus-visible:ring-2 [&>span]:focus-visible:ring-ring" 
              >
                <motion.span variants={linkMotion} className="pointer-events-none hidden sm:inline-block">
                  <ArrowUpRight className="w-7 h-7" strokeWidth={2.5} />
                </motion.span>
                <span className="text-2xl sm:text-3xl sm:font-medium capitalize">
                  {link.text}
                </span>
              </MotionLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-end w-full">
          <div className="grid grid-cols-2 items-end gap-6 pr-3 pb-10">
            <Link href="/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <LinkedInLogoIcon className="w-6 h-6 hover:text-zinc-200 transition-colors" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <GitHubLogoIcon className="w-6 h-6 hover:text-zinc-200 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { HeaderMenu }
