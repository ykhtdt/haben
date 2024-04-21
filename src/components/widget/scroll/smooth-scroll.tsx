"use client"

import { PropsWithChildren } from "react"

import { ReactLenis } from "@studio-freight/react-lenis"

const SmoothScroll =({ children }: PropsWithChildren) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  )
}

export { SmoothScroll }
