
import Link from 'next/link'

function Header() {
  return (
    <header>
        <strong>Maga</strong>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    </header>
  )
}

export default Header