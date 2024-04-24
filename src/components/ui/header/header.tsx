"use client"

import { useState } from "react"
import Link from "next/link"

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { HeaderMenu } from "@/components/ui/header/header-menu"

import Logo from "./logo.svg"

const Links = [
  {
    href: "/",
    text: "about",
  }, {
    href: "/",
    text: "experience",
  }, {
    href: "/",
    text: "projects",
  }, {
    href: "/",
    text: "skills",
  }, {
    href: "/",
    text: "contact",
  },
]

const Header = () => {
  const [isOpenMenu, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpenMenu)
  }

  return (
    <div className="z-100 w-full fixed top-0 bottom-auto right-0 left-0 h-0">
      <header className="fixed top-0 bottom-auto left-0 right-0 overflow-hidden h-20 flex items-center justify-between px-6 sm:px-12 z-50 bg-gradient-to-b from-zinc-900/80 to-zinc-900/0">
        <div className="w-1/3 hidden md:flex items-center justify-start">
          <div className="flex gap-10 font-normal uppercase tracking-wider">
            {Links.slice(0, 2).map((link) => 
              <Link href={link.href} key={link.text}>
                {link.text}
              </Link>
            )}
          </div>
        </div>
        <div className="w-1/2 md:w-1/3 flex items-center justify-start md:justify-center">
          <Link href="/">
            <Logo className="w-24" />
          </Link>
        </div>
        <div className="w-1/2 md:w-1/3 flex items-center justify-end">
          <Button size="icon" onClick={handleOpenMenu} className="bg-transparent hover:bg-transparent shadow-none">
            <HamburgerMenuIcon className={cn("w-6 h-6", { "hidden": isOpenMenu })} />
            <Cross1Icon className={cn("w-6 h-6", { "hidden": !isOpenMenu })} />
          </Button>
        </div>
      </header>
      <HeaderMenu links={Links} isOpen={isOpenMenu} />
    </div>
  )
}

export { Header }
