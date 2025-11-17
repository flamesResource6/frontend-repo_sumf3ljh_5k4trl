import Layout from './components/Layout'
import Homepage from './components/Homepage'
import { ServicesPage, PortfolioPage, AboutPage, ContactPage, BlogPage } from './components/Pages'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        className="fixed bottom-6 right-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg"
        aria-label="WhatsApp"
      >WA</a>

      {/* Global CTA */}
      <a
        href="/contact"
        className="fixed bottom-6 left-6 inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 font-semibold shadow-lg"
      >Get a Free Quote</a>
    </Layout>
  )
}
