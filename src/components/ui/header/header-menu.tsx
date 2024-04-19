import type { LinkItem } from "."

import Link from "next/link"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type Props = {
  className: string;
  links: LinkItem[];
}

const MotionLink= motion(Link)

const HeaderMenu = ({ className, links }: Props) => {
  const linkMotion = {
    initial: { opacity: 0, x: "75%", y: "-75%", },
    hover: { opacity: 1, x: ["-75%", "0%"], y: ["75%", "0%"] },
  }

  return (
    <div className={cn("relative inset-0 w-full h-screen bg-[#AAA197]", className)}>
      <div className="flex flex-col gap-12 items-center justify-space-between h-full pt-48">
        <ul className="flex flex-col gap-4 text-3xl font-medium capitalize">
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
                <motion.span variants={linkMotion} className="pointer-events-none">
                  <ArrowUpRight className="w-7 h-7" strokeWidth={2.5} />
                </motion.span>
                <span>
                  {link.text}
                </span>
              </MotionLink>
            </li>
          ))}
        </ul>
        <div className="">
          
        </div>
      </div>
    </div>
  )
}

export { HeaderMenu }