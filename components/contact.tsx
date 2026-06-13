import { Mail, Code2, Code, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            CONECTEMOS
          </p>
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Siempre estoy disponible para nuevas oportunidades y colaboraciones interesantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 my-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-black mb-4">
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:contacto@ejemplo.com" className="text-black font-light hover:text-gray-600 transition-colors">
                      contacto@ejemplo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">LinkedIn</p>
                    <a href="https://linkedin.com" className="text-black font-light hover:text-gray-600 transition-colors">
                      /in/luisalfredo
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 size={20} className="text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">GitHub</p>
                    <a href="https://github.com" className="text-black font-light hover:text-gray-600 transition-colors">
                      /luisalfredo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-black transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-gray-500 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-black text-white text-sm tracking-widest hover:bg-gray-800 transition-colors duration-300"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-sm tracking-widest text-gray-500 mb-2">
                REDES SOCIALES
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Code size={20} />
                </a>
                <a
                  href="https://github.com"
                  className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Code2 size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Send size={20} />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center md:text-right">
              © 2024 Luis Alfredo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
