import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest text-gray-500 mb-4">
                BIENVENIDO
              </p>
              <h1 className="text-6xl lg:text-7xl font-light tracking-tight text-black leading-tight">
                Ingeniero de Sistemas & Desarrollador Full Stack
              </h1>
            </div>

            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
              Especializado en arquitectura de sistemas escalables, desarrollo full stack moderno y soluciones empresariales robustas. Con experiencia en diseño de infraestructura, optimización de performance y liderazgo técnico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
                VER TRABAJOS
                <ArrowRight size={16} />
              </button>
              <button className="px-8 py-3 border border-black text-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                CONTACTAR
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative aspect-square bg-gray-100 border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-20"></div>
                  <p className="text-gray-400 text-sm tracking-widest">PORTFOLIO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-gray-200">
          <p className="text-xs tracking-widest text-gray-500 mb-8">
            ESPECIALIDADES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black mb-2">
                BACKEND & APIS
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Arquitectura de microservicios, APIs REST/GraphQL, bases de datos distribuidas y optimización de performance
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black mb-2">
                INFRAESTRUCTURA
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Cloud computing, containerización, CI/CD pipelines, monitoreo y escalabilidad horizontal
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black mb-2">
                FRONTEND MODERNO
              </h3>
              <p className="text-sm text-gray-600 font-light">
                React, TypeScript, diseño responsive y experiencias de usuario optimizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
