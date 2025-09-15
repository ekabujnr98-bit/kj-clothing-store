import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-brand-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center bg-white text-black font-bold">KJ</div>
            <span className="text-xl font-semibold">KJ Clothing</span>
          </a>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/shop"><a>Shop</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/cart"><a>Cart</a></Link>
        </nav>
      </div>
    </header>
  )
}
