'use client'

import { Mail, Code2, Code, Send } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
            {t('contact_titulo')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black dark:text-white mb-6">
            {t('contact_subtitulo')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            {t('contact_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black dark:text-white mb-4">
                {t('contact_info')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-black dark:text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact_email_label')}</p>
                    <a href="mailto:contacto@ejemplo.com" className="text-black dark:text-white font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                      contacto@ejemplo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code size={20} className="text-black dark:text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact_linkedin')}</p>
                    <a href="https://linkedin.com" className="text-black dark:text-white font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                      /in/luisalfredo
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 size={20} className="text-black dark:text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact_github')}</p>
                    <a href="https://github.com" className="text-black dark:text-white font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                      /luisalfredo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                {t('contact_nombre_label')}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder={t('contact_nombre_placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                {t('contact_email_input_label')}
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder={t('contact_email_placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-2">
                {t('contact_mensaje_label')}
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder={t('contact_mensaje_placeholder')}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              {t('contact_enviar')}
            </button>
          </form>
        </div>

        <div className="border-t border-gray-200 dark:border-zinc-700 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                {t('contact_redes')}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Code size={20} className="text-black dark:text-white" />
                </a>
                <a
                  href="https://github.com"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Code2 size={20} className="text-black dark:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Send size={20} className="text-black dark:text-white" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
              {t('contact_footer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
