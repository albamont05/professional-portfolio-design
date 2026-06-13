'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const projects = [
  {
    id: 1,
    titleKey: 'projects_1_titulo' as const,
    descriptionKey: 'projects_1_desc' as const,
    category: 'Enterprise',
    year: '2024',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'active',
  },
  {
    id: 2,
    titleKey: 'projects_2_titulo' as const,
    descriptionKey: 'projects_2_desc' as const,
    category: 'Infrastructure',
    year: '2023',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS'],
    status: 'completed',
  },
  {
    id: 3,
    titleKey: 'projects_3_titulo' as const,
    descriptionKey: 'projects_3_desc' as const,
    category: 'Full Stack',
    year: '2023',
    technologies: ['Next.js', 'Python', 'MongoDB', 'Redis'],
    status: 'completed',
  },
  {
    id: 4,
    titleKey: 'projects_4_titulo' as const,
    descriptionKey: 'projects_4_desc' as const,
    category: 'Data & Analytics',
    year: '2022',
    technologies: ['React', 'Go', 'InfluxDB', 'Grafana'],
    status: 'completed',
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
            {t('projects_titulo')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black dark:text-white">
            {t('projects_subtitulo')}
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`border border-gray-200 dark:border-zinc-700 transition-all duration-300 hover:border-gray-400 dark:hover:border-zinc-500 hover:shadow-lg dark:hover:shadow-zinc-800/50 ${
                index !== projects.length - 1 ? '' : ''
              }`}
            >
              <div className="p-8 lg:p-10 bg-white dark:bg-zinc-800">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-light text-black dark:text-white tracking-tight">
                          {t(project.titleKey)}
                        </h3>
                      </div>
                      <ArrowUpRight className="text-gray-400 dark:text-gray-500 mt-1 flex-shrink-0" size={20} />
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 font-light mb-6 leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-xs tracking-widest font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                        {t('projects_ano')}
                      </p>
                      <p className="text-lg font-light text-black dark:text-white">
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                        {t('projects_estado')}
                      </p>
                      <p className={`text-sm font-medium tracking-widest ${
                        project.status === 'active'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {project.status === 'active' ? t('projects_activo') : t('projects_completado')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">
            {t('projects_btn')}
          </button>
        </div>
      </div>
    </section>
  )
}
