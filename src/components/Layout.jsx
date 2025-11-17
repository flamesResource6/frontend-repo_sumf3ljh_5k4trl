import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'

function CTAButton({ children = 'Get a Free Quote', to = '/contact' }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 font-semibold shadow-sm transition-colors"
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-emerald-400" />
            <span className="font-bold tracking-wide">Embrovia</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <CTAButton />
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>Services</NavLink>
              <NavLink to="/portfolio" className={navLinkClass} onClick={() => setOpen(false)}>Portfolio</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/blog" className={navLinkClass} onClick={() => setOpen(false)}>Blog</NavLink>
              <CTAButton />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm text-gray-300">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-emerald-400" />
            <span className="font-bold">Embrovia</span>
          </div>
          <p className="text-gray-400">Premium embroidery digitizing and custom patches with fast global delivery.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            <li>Embroidery Digitizing</li>
            <li>Custom Patches</li>
            <li>Vector Art Conversion</li>
            <li>Logo Redraw / Cleanup</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Mail size={16}/> hello@embrovia.com</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MessageSquare size={16}/> Replies in minutes</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-gray-400 text-xs">© {new Date().getFullYear()} Embrovia. All rights reserved.</div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
