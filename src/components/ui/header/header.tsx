import Link from "next/link"

import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

import Logo from "./logo.svg"

const Header = () => {
  return (
    <header className="fixed top-0 bottom-auto left-0 right-0 overflow-hidden h-20 flex items-center justify-between px-6 sm:px-12 z-50 bg-gradient-to-b from-zinc-950/80 to-zinc-950/0">
      <div className="w-1/3 hidden md:flex items-center justify-start">
        <nav className="flex gap-10 font-normal uppercase tracking-wider">
          <Link href="/">
            About
          </Link>
          <Link href="/">
            Experience
          </Link>
        </nav>
      </div>
      <div className="w-1/2 md:w-1/3 flex items-center justify-start md:justify-center">
        <Link href="/">
          <Logo className="w-24" />
        </Link>
      </div>
      <div className="w-1/2 md:w-1/3 flex items-center justify-end">
        <Button size="icon" className="bg-transparent hover:bg-transparent shadow-none">
          <HamburgerMenuIcon className="w-6 h-6" />
        </Button>
      </div>
    </header>
  )
}

export { Header }
