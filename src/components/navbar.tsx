"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Link = {
  href: string
  text: string
}

const links: Link[] = [
  { href: "/", text: "Home" },
  { href: "/useState", text: "useState" },
  { href: "/useReducer", text: "useReducer" },
  { href: "/useReducer-global", text: "useReducer-global" },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex items-center gap-4 rounded border-b p-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? "text-blue-500 hover:text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
