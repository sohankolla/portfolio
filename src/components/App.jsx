import Project from "./Project.jsx"
import Experience from "./Experience.jsx"
import Navigation from "./Navigation.jsx"
import { useState, useEffect } from 'react'

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false)

  const openResumeModal = () => setShowResumeModal(true)
  const closeResumeModal = () => setShowResumeModal(false)

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
    <div className="flex flex-col min-h-screen relative" id="container">
      {/* Animated Starry Background */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="clouds2"></div>
      
      {/* Navigation */}
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="landing relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sohan Kolla
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full-Stack Software Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            Computer Science student at Queen's University with experience in full-stack development, 
            specializing in modern web technologies and secure, scalable applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="mailto:sohan.kolla03@gmail.com" className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg transition-colors duration-200">
              Contact Me
            </a>
            <button 
              onClick={openResumeModal}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View Resume
            </button>
            <a href="https://linkedin.com/in/sohan-kolla" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black px-6 py-3 rounded-lg transition-colors duration-200">
              LinkedIn
            </a>
            <a href="https://github.com/sohankolla" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black px-6 py-3 rounded-lg transition-colors duration-200">
              GitHub
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="aboutMe" className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-transparent border-2 border-blue-400 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white">Queen's University</h4>
                <p className="text-gray-300">Bachelor of Computer Science (Honours)</p>
                <p className="text-gray-400">Sept 2022 – Apr 2026 | Kingston, Ontario</p>
              </div>
            </div>
            
            <div className="bg-transparent border-2 border-purple-400 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 sohan.kolla03@gmail.com</p>
                <p>📱 647-550-3760</p>
                <p>🌍 Kingston, Ontario</p>
              </div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="mt-12 bg-transparent border-2 border-green-400 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'C', 'C++', 'HTML', 'CSS'].map((skill) => (
                    <span key={skill} className="bg-blue-600 text-white text-sm px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue', 'Spring Boot', 'Flask', 'Git', 'Azure', 'PostgreSQL', 'MySQL', 'Tailwind'].map((skill) => (
                    <span key={skill} className="bg-purple-600 text-white text-sm px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {['Full-Stack Development', 'Database Design', 'API Development', 'Testing', 'Security'].map((skill) => (
                    <span key={skill} className="bg-green-600 text-white text-sm px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
          <Experience 
            title="Full-Stack Software Developer"
            company="Elara Global Taiko Server"
            startDate="May 2024"
            endDate="Aug 2024"
            description="Developed a full-stack web application using Vue, TypeScript, Go, and SQLite for a game development team. Enhanced performance by reducing first-load file size by 89% and load time by 92%. Implemented secure RESTful APIs and optimized SQL queries, reducing execution time by 45% while maintaining 100% data integrity for 125,000+ records."
            technologies="Vue, TypeScript, Go, SQLite, Tailwind CSS, Git, RESTful APIs"
          />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          
          <Project 
            name="Password Manager Chrome Extension"
            description="Full-stack password manager with Chrome extension featuring secure authentication, AES encryption for 100+ passwords, and auto-fill functionality. Built with React frontend and Java Spring Boot backend, deployed on Azure with 99.9% uptime."
            technologies="TypeScript, React, Java, Spring Boot, PostgreSQL, Azure, AES Encryption"
            demoLink=""
            repoLink=""
          />
          
          <Project 
            name="Pharmacy Management System"
            description="Comprehensive pharmacy management system for prescription and inventory management. Achieved 100% code coverage with Pytest, reduced task completion times by 40%, and validated 50+ test cases with Selenium integration testing."
            technologies="Python, Flask, SQLite, Pytest, Selenium, HTML, CSS"
            demoLink=""
            repoLink=""
          />
        </section>
      </main>

      <footer className="relative z-10 py-12 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Sohan Kolla</h3>
              <p className="text-gray-400">Full-Stack Software Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="mailto:sohan.kolla03@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                Email
              </a>
              <a href="https://linkedin.com/in/sohan-kolla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="https://github.com/sohankolla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                GitHub
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 Sohan Kolla. All rights reserved.
          </div>
        </div>
      </footer>

      {/* resume modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Resume - Sohan Kolla</h2>
              <button 
                onClick={closeResumeModal}
                className="text-gray-600 hover:text-gray-800 text-2xl font-bold"
              >
                x
              </button>
            </div>
            <div className="flex-1 p-4">
              <iframe 
                src="https://docs.google.com/gview?url=https://github.com/sohankolla/portfolio/raw/resume/Sohan%20Kolla%20-%20Resume.pdf&embedded=true" 
                className="w-full h-full border-0 rounded"
                title="Sohan Kolla Resume"
              />
            </div>
          </div>
        </div>
      )}

      {/* motorcycle/road scrollbar css logic */}
      <div className="custom-scrollbar">
        <div className="road-track">
          <div 
            className={`motorcycle ${scrollDirection === 'up' ? 'motorcycle-up' : 'motorcycle-down'}`}
            style={{
              top: `${Math.min(Math.max(scrollPercentage, 2.5), 97.5)}%`,
              left: scrollDirection === 'up' ? '67.5%' : '32.5%'
            }}
          />
        </div>
      </div>
    </div>
  )

}