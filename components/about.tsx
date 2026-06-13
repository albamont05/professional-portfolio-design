export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm tracking-widest text-gray-500 mb-4">
              SOBRE MÍ
            </p>
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8">
              Ingeniero apasionado por soluciones de alto impacto
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Con más de 8 años de experiencia en desarrollo full stack e ingeniería de sistemas, he liderado la construcción de arquitecturas escalables que procesan millones de transacciones diarias. Mi enfoque combina excelencia técnica con pensamiento estratégico para resolver desafíos empresariales complejos.
            </p>

            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Especializado en diseño de infraestructura cloud, optimización de performance y transformación digital. He trabajado con equipos multinacionales en startups de rápido crecimiento y empresas Fortune 500, siempre enfocado en entregar valor tangible y sostenible.
            </p>

            <div className="space-y-4 pt-6">
              <h3 className="text-sm font-semibold tracking-widest text-black">
                FORMACIÓN
              </h3>
              <div>
                <p className="text-sm font-medium text-black">
                  Ingeniería de Sistemas
                </p>
                <p className="text-sm text-gray-600">
                  Universidad Nacional de Colombia
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-black">
                  Especialización en Cloud Architecture
                </p>
                <p className="text-sm text-gray-600">
                  AWS Solutions Architect Associate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-gray-200">
          <p className="text-sm tracking-widest text-gray-500 mb-8">
            EXPERIENCIA LABORAL
          </p>
          <div className="space-y-8">
            <div className="pb-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-light text-black">
                    Senior Full Stack Engineer
                  </h4>
                  <p className="text-sm text-gray-600">
                    TechCorp Solutions
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  2021 - Presente
                </p>
              </div>
              <p className="text-sm text-gray-600 font-light">
                Liderazgo técnico en arquitectura de microservicios, reducción del 40% en latencia de APIs y mentoring de 5+ desarrolladores junior.
              </p>
            </div>

            <div className="pb-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-light text-black">
                    Full Stack Developer
                  </h4>
                  <p className="text-sm text-gray-600">
                    InnovateLabs
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  2018 - 2021
                </p>
              </div>
              <p className="text-sm text-gray-600 font-light">
                Desarrollo de plataforma de e-commerce que procesaba 1M+ transacciones diarias, implementación de CI/CD pipeline completo.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-light text-black">
                    Junior Developer
                  </h4>
                  <p className="text-sm text-gray-600">
                    Digital First Agency
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  2016 - 2018
                </p>
              </div>
              <p className="text-sm text-gray-600 font-light">
                Desarrollo de aplicaciones web responsivas, APIs REST y mantenimiento de infraestructura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
