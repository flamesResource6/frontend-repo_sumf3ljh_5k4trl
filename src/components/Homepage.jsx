import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Shield, DollarSign, Quote } from 'lucide-react'

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-300">{subtitle}</p>}
    </div>
  )
}

export default function Homepage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-500/10"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold leading-tight">
                Premium Embroidery & Patch Digitizing for Global Brands
              </motion.h1>
              <p className="mt-5 text-gray-300 text-lg">
                High-accuracy digitizing, fast delivery, and custom patches manufactured to perfection.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-sm">Get a Free Quote</Link>
                <Link to="/portfolio" className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 text-white px-6 py-3 font-semibold">See Portfolio</Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2"><Zap className="text-yellow-400" size={18}/> Same day or 24h delivery</div>
                <div className="flex items-center gap-2"><Shield className="text-emerald-400" size={18}/> Precision for all machines</div>
                <div className="flex items-center gap-2"><DollarSign className="text-blue-400" size={18}/> Affordable global pricing</div>
                <div className="flex items-center gap-2"><CheckCircle className="text-purple-400" size={18}/> Complex, high-detail artwork</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-2xl"/>
              <p className="text-xs text-gray-400 mt-3">Showcase your best stitched samples and patch photos here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Services" subtitle="Everything you need from digitizing to high-quality patch manufacturing." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title:'Embroidery Digitizing', points:['Left chest, caps, jackets','3D puff, appliqué','DST, PES, EMB, VP3']},
              {title:'Custom Patches', points:['Embroidered, PVC, Woven, Chenille','Iron-on & Velcro backings','Any size, shape, finishing']},
              {title:'Vector Art & Logo Cleanup', points:['Pixel to vector conversion','Screen print & DTF ready','Logo redraw & cleanup']},
            ].map((card)=> (
              <div key={card.title} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {card.points.map(p => (
                    <li key={p} className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400"/> {p}</li>
                  ))}
                </ul>
                <Link to="/services" className="mt-6 inline-flex text-blue-400 hover:text-blue-300">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why choose Embrovia" subtitle="Speed, precision, affordability, and professional communication." />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {icon: Zap, title:'Fast Delivery', desc:'Same day or 24-hour turnaround for most orders.'},
              {icon: Shield, title:'High Precision', desc:'Machine-friendly files with premium stitch quality.'},
              {icon: DollarSign, title:'Great Pricing', desc:'Competitive rates compared to Western markets.'},
              {icon: CheckCircle, title:'Detail Experts', desc:'We handle complex artwork with care.'},
            ].map((f)=> (
              <div key={f.title} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
                <f.icon className="text-blue-400" />
                <h4 className="mt-3 font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Loved by brands worldwide" subtitle="Trusted by clients in the USA, UK, Germany and beyond." />
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=>(
              <div key={i} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
                <Quote className="text-gray-400"/>
                <p className="mt-3 text-gray-300">“Embrovia delivered perfect stitch files in just a few hours. Our caps look incredible.”</p>
                <p className="mt-4 text-sm text-gray-400">— Streetwear Brand, UK</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get a Free Quote" subtitle="Send your artwork and details. We reply in minutes." />
          <QuoteForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="FAQs" subtitle="Common questions about turnaround, pricing, and formats." />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {q:'How fast is delivery?', a:'Most digitizing orders are delivered same day or within 24 hours.'},
              {q:'Which formats do you provide?', a:'DST, PES, EMB, VP3 and more, compatible with popular machines.'},
              {q:'Do you offer vector artwork?', a:'Yes. We convert low-res images into clean, print-ready vectors.'},
              {q:'Can you make custom patches?', a:'Yes. We produce embroidered, PVC, woven, chenille, iron-on, and velcro patches.'},
            ].map((item)=> (
              <div key={item.q} className="rounded-xl border border-white/10 p-6 bg-neutral-900">
                <p className="font-semibold">{item.q}</p>
                <p className="text-sm text-gray-300 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function QuoteForm() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(`${backend}/api/inquiry`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        alert('Thanks! We\'ll reply in minutes.')
        form.reset()
      } else {
        alert('Submission failed: ' + (data.detail || 'Unknown error'))
      }
    } catch (err) {
      alert('Network error: ' + err.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Your name" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
        <input name="email" required type="email" placeholder="Email" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="company" placeholder="Company / Brand (optional)" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
        <input name="whatsapp" placeholder="WhatsApp (optional)" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <select name="service" required className="bg-neutral-900 border border-white/10 rounded px-4 py-3">
          <option value="">Select service</option>
          <option>Embroidery Digitizing</option>
          <option>Custom Patches</option>
          <option>Vector Art Conversion</option>
          <option>Logo Redraw / Cleanup</option>
        </select>
        <input name="country" placeholder="Country" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="quantity" type="number" min="1" placeholder="Quantity (for patches)" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
        <input name="turnaround" placeholder="Turnaround (e.g., 24h)" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
      </div>
      <textarea name="message" rows="4" placeholder="Describe your artwork / requirements" className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
      <input name="files" type="file" multiple className="bg-neutral-900 border border-white/10 rounded px-4 py-3" />
      <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-sm">Send Request</button>
      <p className="text-sm text-gray-400">We reply in minutes. Business hours: Mon–Sat</p>
    </form>
  )
}
