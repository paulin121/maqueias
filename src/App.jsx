import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Process from './components/Process.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active')
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-body w-full">
      <Navbar />
      <main className="w-full">
        {/* Deixando os próprios componentes controlarem suas tags section e IDs */}
        <Hero />
        <About />
        <Portfolio />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App