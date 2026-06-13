'use client'

import { useLanguage } from '@/components/language-provider'

const skillCategories = [
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Web Performance'],
  },
  {
    category: 'Infrastructure & DevOps',
    skills: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform', 'CI/CD', 'Monitoring'],
  },
  {
    category: 'Systems & Architecture',
    skills: ['Microservices', 'System Design', 'Scalability', 'Security', 'Load Balancing', 'Caching'],
  },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4">
            {t('skills_titulo')}
          </p>
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black dark:text-white">
            {t('skills_subtitulo')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-6">
              <div>
                <h3 className="text-lg font-light tracking-widest text-black dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-zinc-700">
                  {category.category.toUpperCase()}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="p-4 bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-500 transition-colors duration-300"
                    >
                      <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200 dark:border-zinc-700 grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-3xl lg:text-4xl font-light text-black dark:text-white mb-2">
              8+
            </p>
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
              {t('skills_anos')}
            </p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-light text-black dark:text-white mb-2">
              50+
            </p>
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
              {t('skills_proyectos')}
            </p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-light text-black dark:text-white mb-2">
              100%
            </p>
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
              {t('skills_satisfaccion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
