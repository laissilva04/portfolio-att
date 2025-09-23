import { GraduationCap, BookOpen, Globe } from "lucide-react"

export default function Formacao() {
  return (
    <section className="min-h-screen bg-background text-white relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Formações
            </h2>
          </div>

          <div className="space-y-8">


            {/* Education */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Tecnólogo</span>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-white mb-1">Análise e Desenvolvimento de Sistemas</h3>
                  <p className="text-orange-400 text-sm">5º Semestre</p>
                  <p className="text-gray-400 mt-4">UNIFOR</p>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Cursos</span>
              </div>

              <div className="space-y-3">
                <div className="py-3 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Formação Front-End</span>
                    <span className="text-gray-400 text-sm">23h</span>
                  </div>
                  <span className="text-gray-500 text-sm">Origamid</span>
                </div>

                <div className="py-3 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Universo Robot</span>
                    <span className="text-gray-400 text-sm">14h</span>
                  </div>
                  <span className="text-gray-500 text-sm">Udemy</span>
                </div>
                <div className="py-3 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Oracle Cloud Infrastructure 2023 AI</span>
                    <span className="text-gray-400 text-sm">8h</span>
                  </div>
                  <span className="text-gray-500 text-sm">Oracle University</span>
                </div>
              </div>
              <div className="py-3 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-white">CSS FlexBox</span>
                    <span className="text-gray-400 text-sm">5h</span>
                  </div>
                  <span className="text-gray-500 text-sm">Udemy</span>
                </div>
              <div className="py-3 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Projetos de Sistema de TI</span>
                    <span className="text-gray-400 text-sm">12h</span>
                  </div>
                  <span className="text-gray-500 text-sm">Bradesco</span>
                </div>
                <div className="py-3 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Introdução ao Desenvolvimento Full-Stack</span>
                    <span className="text-gray-400 text-sm">12h</span>
                  </div>
                  <span className="text-gray-500 text-sm">DIO</span>
                </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Idiomas</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">Inglês</span>
                  <span className="text-gray-400">Básico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Espanhol</span>
                  <span className="text-gray-400">Básico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
