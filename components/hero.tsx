'use client'

import { useState } from 'react'
import { ArrowRight, Copy, Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const cvUrls = {
  es: '/cv/cv-es.pdf',
  en: '/cv/cv-en.pdf',
}

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const { t, lang } = useLanguage()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dev.albamont@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                {t('hero_bienvenido')}
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-green-600 dark:text-green-400 leading-tight">
                Luis Báez
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-gray-700 dark:text-gray-300 mt-3 uppercase">
                {t('hero_subtitle1')}
              </h2>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-gray-700 dark:text-gray-300 uppercase">
                {t('hero_subtitle2')}
              </h2>
            </div>

            <div className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-lg space-y-4">
              <p>{t('hero_parrafo1')}</p>
              <p>{t('hero_parrafo2')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2">
                {t('hero_btn_trabajos')}
                <ArrowRight size={16} />
              </button>
              <button className="px-8 py-3 border border-black dark:border-white text-black dark:text-white text-sm tracking-widest hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300">
                {t('hero_btn_contactar')}
              </button>
              <a
                href={cvUrls[lang]}
                download
                className="px-8 py-3 border border-black dark:border-white text-black dark:text-white text-sm tracking-widest hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300 inline-flex items-center justify-center"
              >
                CV
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="max-w-[90%] mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-900 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-xs text-gray-400 font-mono flex-1">terminal — bash</span>
                <button onClick={copyEmail} className="text-gray-500 hover:text-white transition-colors" title={t('hero_terminal_copy')}>
                  {copied ? <Copy size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
                {copied && (
                  <span className="text-xs text-green-400 font-mono animate-pulse"><Check size={12} className="inline mr-0.5 -mt-0.5" />{t('hero_terminal_copied')}</span>
                )}
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-green-400">$ <span className="text-gray-200">whoami</span></p>
                <p className="text-gray-400 mb-1">luis_baez (alias = albamont)</p>
                <p className="text-green-400">$ <span className="text-gray-200">cat ~/.contact</span></p>
                <p className="text-gray-500 mb-3">dev.albamont@gmail.com</p>

                <p className="text-green-400">$ <span className="text-gray-200">cat /etc/profile/role</span></p>
                <p className="text-gray-300 mb-3">Senior Full Stack Developer &amp; Systems Engineer</p>

                <p className="text-green-400">$ <span className="text-gray-200">systemctl status career</span></p>
                <p className="text-green-400">● active (running) — <span className="text-gray-300">6+ years</span></p>
                <p className="text-gray-500 mb-3">  Loaded: loaded (/etc/systemd/system)</p>

                <p className="text-green-400">$ <span className="text-gray-200">./tech-stack.sh --list</span></p>
                <p className="text-green-400 mt-1">Backend:</p>
                <p className="text-gray-400 ml-4">Python · Node.js · FastAPI · Django · PostgreSQL · Redis · Celery</p>
                <p className="text-green-400 mt-1">Frontend:</p>
                <p className="text-gray-400 ml-4">React · Next.js · TypeScript · Tailwind</p>
                <p className="text-green-400 mt-1">Infra:</p>
                <p className="text-gray-400 ml-4">AWS · GCP · Docker · Terraform · CI/CD</p>
                <p className="text-green-400 mt-1">Resiliencia:</p>
                <p className="text-gray-400 ml-4">Testing · Circuit Breaker · Retry Back-off exponencial</p>

                <p className="text-green-400 mt-4">$ <span className="text-gray-200"><span className="inline-block w-2 h-4 bg-gray-300 animate-pulse"></span></span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-zinc-700">
          <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 mb-8">
            {t('hero_especialidades')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black dark:text-white mb-2">
                {t('hero_backend_title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {t('hero_backend_desc')}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black dark:text-white mb-2">
                {t('hero_infra_title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {t('hero_infra_desc')}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black dark:text-white mb-2">
                {t('hero_frontend_title')}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {t('hero_frontend_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
