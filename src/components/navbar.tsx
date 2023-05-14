import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white border-b-2 border-gray-100 p-4 mb-8">
      <ul className="flex list-none">
        <li className="mr-4">
          <Link href="/">
          Home
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/about">
          About
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/contact">
          Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
