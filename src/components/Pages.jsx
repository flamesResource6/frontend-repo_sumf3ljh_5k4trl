import { Link } from 'react-router-dom'

export function ServicesPage() {
  const sections = [
    {
      title: 'Embroidery Digitizing',
      items: ['Left chest logos','Cap designs','Jacket backs','3D puff','Satin, tatami, appliqué'],
      formats: 'DST, PES, EMB, VP3, and more',
      price: 'From $10 — $35+',
      delivery: 'Same day or 24 hours',
    },
    {
      title: 'Custom Patches',
      items: ['Embroidered', 'PVC', 'Woven', 'Chenille', 'Iron-on & Velcro'],
      formats: 'Any size, shape, finishing',
      price: 'From $0.50 — $4+ (each, MOQ-based)',
      delivery: '7–14 days production after approval',
    },
    {
      title: 'Vector Art Conversion',
      items: ['Low-res to high-res vector','Illustrator-ready','Screen print & DTF-ready'],
      price: 'From $10 — $30+',
      delivery: '6–24 hours',
    },
    {
      title: 'Logo Redraw / Cleanup',
      items: ['Clean messy logos','Pixel to polished artwork'],
      price: 'From $10 — $25+',
      delivery: '6–24 hours',
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Services</h1>
      <p className="text-gray-300 mt-2">Clear pricing, fast delivery, and premium quality for every service.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {sections.map(sec => (
          <div key={sec.title} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
            <h2 className="text-xl font-semibold">{sec.title}</h2>
            <ul className="mt-3 text-sm text-gray-300 space-y-1">
              {sec.items.map(i => (<li key={i}>• {i}</li>))}
            </ul>
            {sec.formats && <p className="text-sm text-gray-400 mt-3">{sec.formats}</p>}
            <div className="mt-4 flex items-center justify-between">
              <p className="font-semibold">{sec.price}</p>
              <p className="text-sm text-gray-400">{sec.delivery}</p>
            </div>
            <Link to="/contact" className="mt-5 inline-flex rounded-md bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 font-semibold">Order Now</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PortfolioPage() {
  const categories = ['Digitized Designs', 'Stitched Samples', 'Patches: Embroidered', 'Patches: PVC', 'Patches: Woven']
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Portfolio</h1>
      <p className="text-gray-300 mt-2">Before & afters, stitched-out samples, and patch photos.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {categories.map(c => (
          <div key={c} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
            <p className="font-semibold">{c}</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map(i => (<div key={i} className="aspect-square bg-neutral-800 rounded"/>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">About Embrovia</h1>
      <p className="text-gray-300 mt-2 max-w-3xl">We are a modern embroidery solutions provider serving brands worldwide. Our experienced digitizers and designers focus on precision, speed, and clear communication. We offer competitive prices while delivering premium quality that stands out on any machine.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[{t:'Fast Delivery',d:'Same-day or 24-hour turnaround.'},{t:'24/7 Communication',d:'We reply in minutes.'},{t:'Long-term Partners',d:'Trusted by brands in USA, UK, Germany.'}].map(b => (
          <div key={b.t} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
            <p className="font-semibold">{b.t}</p>
            <p className="text-sm text-gray-300 mt-1">{b.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact / Order</h1>
      <p className="text-gray-300 mt-2">We reply in minutes. Share your details and artwork.</p>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="rounded-xl border border-white/10 p-6 bg-neutral-900">
          <form action="#contact-on-home" onSubmit={(e)=>{e.preventDefault(); const anchor=document.querySelector('#contact-on-home'); if(anchor) anchor.scrollIntoView({behavior:'smooth'})}} className="grid gap-4">
            <input placeholder="Name" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
            <input placeholder="Email" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
            <textarea rows="4" placeholder="Message" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold">Get a Free Quote</button>
          </form>
          <p className="text-sm text-gray-400 mt-3">For file uploads, use the form on the homepage below.</p>
        </div>
        <div className="rounded-xl border border-white/10 p-6 bg-neutral-900 space-y-3 text-sm text-gray-300">
          <p>Email: hello@embrovia.com</p>
          <p>WhatsApp: +1 (555) 123-4567</p>
          <p>Business hours: Mon–Sat</p>
          <a href="https://wa.me/15551234567" target="_blank" className="inline-flex rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 font-semibold">Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

export function BlogPage() {
  const posts = [
    {t:'Best fabric for embroidery', s:'Learn which fabrics give the best results for stitch quality.'},
    {t:'How to choose patch type', s:'When to pick embroidered, PVC, woven, or chenille patches.'},
    {t:'3D puff digitizing tips', s:'Settings and techniques for clean 3D puff embroidery.'},
    {t:'Why vector conversion matters', s:'Crisp prints and scalable brand assets.'},
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Blog</h1>
      <p className="text-gray-300 mt-2">Simple, helpful articles to improve your results.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {posts.map(p => (
          <div key={p.t} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
            <p className="font-semibold">{p.t}</p>
            <p className="text-sm text-gray-300 mt-1">{p.s}</p>
            <a className="mt-3 inline-flex text-blue-400" href="#">Read more →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
