'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang, type TranslationKey } from '@/lib/translations'

type LanguageContextType = {
  lang: Lang
  toggleLang: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggleLang: () => {},
  t: (key) => translations.es[key],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'es' || stored === 'en') setLang(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem('lang', lang)
  }, [lang, mounted])

  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es')

  const t = (key: TranslationKey) => translations[lang][key]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
