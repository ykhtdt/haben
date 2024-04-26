import Link from "next/link"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

type Props = {
  href: string
  isAnimate: boolean
}

const MotionButton= motion(Button)

const HeroButton = ({
  href,
  isAnimate,
}: Props) => {
  const variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const transition = {
    delay: 0.5,
    duration: 0.75,
    ease: "easeIn",
  }

  const animate = isAnimate ? "visible" : "hidden"

  return (
    <MotionButton
      initial="initial"
      animate={animate}
      variants={variants}
      transition={transition}
      variant="outline"
      asChild
      className="border-white/25 hover:bg-[#AAA197] rounded-full uppercase focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-1"
    >
      <Link href={href}>
        View details
      </Link>
    </MotionButton>
  )
}

export { HeroButton }
