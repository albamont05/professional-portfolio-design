'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Acerca de' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <p className="text-xl font-light tracking-widest text-black">
              LUIS ALFREDO
            </p>
            <p className="text-xs tracking-widest text-gray-500 mt-1">
              INGENIERO DE SISTEMAS
            </p>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-widest transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-black font-medium'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
