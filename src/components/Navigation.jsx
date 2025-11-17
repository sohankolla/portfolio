import { useState, useEffect } from 'react'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-gray-900 bg-opacity-95 backdrop-blur-md' : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-white">
                        Sohan Kolla
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white hover:text-blue-400 transition-colors duration-200">
                            Home
                        </a>
                        <a href="#aboutMe" className="text-white hover:text-blue-400 transition-colors duration-200">
                            About
                        </a>
                        <a href="#experience" className="text-white hover:text-blue-400 transition-colors duration-200">
                            Experience
                        </a>
                        <a href="#projects" className="text-white hover:text-blue-400 transition-colors duration-200">
                            Projects
                        </a>
                        <a href="mailto:sohan.kolla03@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200">
                            Contact
                        </a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}