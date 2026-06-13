'use client'

import { useLanguage } from '@/components/language-provider'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
              {t('about_titulo')}
            </p>
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black dark:text-white mb-8">
              {t('about_subtitulo')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {t('about_parrafo1')}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {t('about_parrafo2')}
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="text-sm font-semibold tracking-widest text-black dark:text-white">
                {t('about_formacion')}
              </h3>
              <div>
                <p className="text-sm font-medium text-black dark:text-white">
                  {t('about_carrera1')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('about_universidad')}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-black dark:text-white">
                  {t('about_carrera2')}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('about_cloud')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-zinc-700">
          <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-8">
            {t('about_experiencia')}
          </p>
          <div className="space-y-8">
            <div className="pb-8 border-b border-gray-200 dark:border-zinc-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-light text-black dark:text-white">
                    {t('about_exp1_titulo')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('about_exp1_empresa')}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {t('about_exp1_periodo')}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {t('about_exp1_desc')}
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200 dark:border-zinc-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-light text-black dark:text-white">
                    {t('about_exp2_titulo')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('about_exp2_empresa')}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {t('about_exp2_periodo')}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {t('about_exp2_desc')}
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-light text-black dark:text-white">
                    {t('about_exp3_titulo')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('about_exp3_empresa')}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {t('about_exp3_periodo')}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                {t('about_exp3_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
