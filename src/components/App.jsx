import Project from "./Project.jsx"
import Experience from "./Experience.jsx"
import { useState, useEffect } from 'react'

export default function App() {
  // Custom scrollbar state
  const [scrollDirection, setScrollDirection] = useState('down')
  const [scrollPercentage, setScrollPercentage] = useState(10)

  // Motorcycle lane switching based on scroll direction
  useEffect(() => {
    let lastScrollY = 0
    let ticking = false

    const updateScrollbar = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      
      // Calculate scroll percentage
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )
      const windowHeight = window.innerHeight
      const maxScroll = documentHeight - windowHeight
      const percentage = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0
      
      setScrollDirection(direction)
      setScrollPercentage(Math.min(Math.max(percentage, 0), 100))
      
      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollbar)
        ticking = true
      }
    }

    // Force an initial update after DOM is ready
    setTimeout(updateScrollbar, 100)

    // Add scroll listeners for better compatibility
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true })
    document.body.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll)
      document.body.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden relative" id="container">
      {/* starry night background */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="clouds2"></div>

      <main className="flex-1 flex items-center justify-center">
        <section id="home" className="landing relative z-10 flex flex-col justify-center items-center text-center px-4 w-full">
          <h1 className="text-8xl md:text-8xl font-bold mb-4 transparent-text">
            Sohan Kolla
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Software Developer | DevOps Engineer | Motorcycle Enthusiast
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            Final year Computer Science student at Queen's University.<br/>
            Strong experience in Full-Stack Development and DevOps Engineering.<br/>
            Passionate for System Design and Architecture.
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <a 
              href="/Sohan Kolla - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Resume
            </a>
            <a
              href="https://github.com/sohankolla"
              target="_blank"
              rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.44.11-3 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.56.23 2.71.11 3 .73.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35 0.5 12 0.5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-4 px-4 max-w-6xl mx-auto text-center text-gray-400">
        © 2026 Sohan Kolla. All rights reserved.
      </footer>

      {/* motorcycle/road scrollbar css logic */}
      {/* <div className="custom-scrollbar">
        <div className="road-track">
          <div 
            className={`motorcycle ${scrollDirection === 'up' ? 'motorcycle-up' : 'motorcycle-down'}`}
            style={{
              top: `${Math.min(Math.max(scrollPercentage, 2.5), 97.5)}%`,
              left: scrollDirection === 'up' ? '67.5%' : '32.5%'
            }}
          />
        </div>
      </div> */}
    </div>
  )

}