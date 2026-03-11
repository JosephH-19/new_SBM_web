const projects = [
  {
    title: 'Chatbot Inteligente para Ventas',
    tech: 'Java • Access • NLP',
    result: '📈 40% reducción en tiempo de respuesta',
    desc: 'Sistema de chatbot con procesamiento de lenguaje natural que automatiza cotizaciones y consultas, mejorando significativamente la experiencia del cliente.'
  },
  {
    title: 'Plataforma de Gestión Streaming',
    tech: 'Apache NetBeans • MySQL • API REST',
    result: '✅ 100% control centralizado',
    desc: 'Sistema completo para administración de cuentas de streaming con panel de control, gestión de usuarios y reportes analíticos en tiempo real.'
  },
  {
    title: 'Motor de Búsqueda Optimizado',
    tech: 'C++ • Estructuras de Datos • Algoritmos',
    result: '⚡ De 5 min a 30 seg (90% mejora)',
    desc: 'Implementación de árboles binarios para búsqueda ultra-rápida en grandes volúmenes de datos, con aplicación potencial en seguridad y analytics.'
  },
  {
    title: 'Sistema de Análisis Empresarial',
    tech: 'Bizagi • Excel • PowerBI • CMI',
    result: '📋 Procesos estandarizados',
    desc: 'Mapeo completo de procesos con identificación de cuellos de botella y recomendaciones estratégicas para optimización operativa.'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 bg-dark-light">
      <div className="container mx-auto px-5">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            🏆 Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Proyectos que Generan Impacto</h2>
          <p className="text-xl text-gray">Casos de éxito con resultados medibles y clientes satisfechos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-primary/50"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-8 relative overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[pulse_3s_ease-in-out_infinite]"></div>
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{project.title}</h3>
                <div className="text-sm text-white/90 relative z-10 font-medium tracking-wide">{project.tech}</div>
              </div>
              
              <div className="p-8">
                <p className="text-white font-semibold text-lg mb-4">{project.result}</p>
                <p className="text-gray leading-relaxed text-lg">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
