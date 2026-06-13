import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Plataforma de Gestión Empresarial',
    description: 'Sistema integral de gestión empresarial con módulos de ERP, CRM y análisis de datos en tiempo real.',
    category: 'Enterprise',
    year: '2024',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'Activo',
  },
  {
    id: 2,
    title: 'Infraestructura Cloud Escalable',
    description: 'Arquitectura cloud nativa con Kubernetes, soportando millones de transacciones por día.',
    category: 'Infrastructure',
    year: '2023',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS'],
    status: 'Completado',
  },
  {
    id: 3,
    title: 'Marketplace Digital',
    description: 'Plataforma de e-commerce de alto rendimiento con búsqueda avanzada y recomendaciones ML.',
    category: 'Full Stack',
    year: '2023',
    technologies: ['Next.js', 'Python', 'MongoDB', 'Redis'],
    status: 'Completado',
  },
  {
    id: 4,
    title: 'Sistema de Monitoreo & Analytics',
    description: 'Dashboard de monitoreo en tiempo real con análisis predictivo y alertas inteligentes.',
    category: 'Data & Analytics',
    year: '2022',
    technologies: ['React', 'Go', 'InfluxDB', 'Grafana'],
    status: 'Completado',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            PORTAFOLIO
          </p>
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:shadow-lg ${
                index !== projects.length - 1 ? '' : ''
              }`}
            >
              <div className="p-8 lg:p-10 bg-white">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs tracking-widest text-gray-500 mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-light text-black tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                    </div>

                    <p className="text-gray-600 font-light mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs tracking-widest font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs tracking-widest text-gray-500 mb-1">
                        AÑO
                      </p>
                      <p className="text-lg font-light text-black">
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest text-gray-500 mb-1">
                        ESTADO
                      </p>
                      <p className={`text-sm font-medium tracking-widest ${
                        project.status === 'Activo'
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }`}>
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors duration-300">
            VER TODOS LOS PROYECTOS
          </button>
        </div>
      </div>
    </section>
  )
}
