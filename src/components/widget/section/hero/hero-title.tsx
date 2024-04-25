import { motion } from "framer-motion"

type Props = {
  index: number
  text: string
  isAnimate: boolean
}

const HeroTitle = ({
  index,
  text,
  isAnimate,
}: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: "50px",
    },
    visible: {
      opacity: 1,
      y: "0"
    },
  }

  const transition = {
    duration: 0.75,
    ease: "easeIn",
  }

  const animate = isAnimate ? "visible" : "hidden"

  const Component = index === 0 ? motion.h1 : motion.div

  return (
    <Component
      initial="initial" 
      animate={animate}
      variants={variants}
      transition={transition}
      className="text-3xl 2xl:text-5xl mb-6 sm:mb-12 leading-snug 2xl:leading-normal capitalize"
    >
      {text}
    </Component>
  )
}

export { HeroTitle }
