'use client'

import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { useLanguage } from '@/components/language-provider'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: t('header_inicio') },
    { id: 'about', label: t('header_acerca') },
    { id: 'projects', label: t('header_proyectos') },
    { id: 'skills', label: t('header_habilidades') },
    { id: 'contact', label: t('header_contacto') },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-gray-200 dark:border-zinc-700 px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <p className="text-xl font-light tracking-widest text-black dark:text-white">
              LUIS ALFREDO
            </p>
            <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 mt-1">
              {t('header_subtitle')}
            </p>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-widest transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-black dark:text-white font-medium'
                      : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="flex items-center ml-8">
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-7 h-7 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  title={theme === 'light' ? t('header_theme_light') : t('header_theme_dark')}
                >
                  {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
                </button>
                <button
                  onClick={toggleLang}
                  className="text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 border border-gray-300 dark:border-zinc-600 px-2 py-1 rounded"
                  title={lang === 'es' ? 'English' : 'Español'}
                >
                  {lang === 'es' ? '🇪🇸' : '🇺🇸'} {t('header_lang')}
                </button>
              </div>
            </li>
          </ul>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              title={theme === 'light' ? t('header_theme_light') : t('header_theme_dark')}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={toggleLang}
              className="text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors border border-gray-300 dark:border-zinc-600 px-2 py-1 rounded"
            >
              {lang === 'es' ? '🇪🇸' : '🇺🇸'} {t('header_lang')}
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
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
