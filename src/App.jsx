import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PreviewBanner from './components/PreviewBanner.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'

const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))
const AiChatbot = lazy(() => import('./pages/AiChatbot.jsx'))
const FiltersOnRepeater = lazy(() => import('./pages/FiltersOnRepeater.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <>
      {/* Mandatory: first element rendered, before the router outlet */}
      <PreviewBanner />
      <BrowserRouter basename="/wixcrafters">
        <ScrollManager />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[10000] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <Navbar />
        <main id="main" className="min-h-[60vh]">
          <Suspense fallback={<div className="page-top min-h-[70vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/ai-chatbot" element={<AiChatbot />} />
              <Route path="/filters-on-repeater" element={<FiltersOnRepeater />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
