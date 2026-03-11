const services = [
  {
    icon: '🗄️',
    title: 'Gestión de Bases de Datos',
    desc: 'Diseño, implementación y optimización de bases de datos SQL/NoSQL con alta disponibilidad y seguridad.',
    benefits: ['Consultas optimizadas', 'Backups automáticos', 'Escalabilidad garantizada']
  },
  {
    icon: '💻',
    title: 'Desarrollo de Software',
    desc: 'Aplicaciones web y de escritorio personalizadas con tecnologías modernas como Java, C++, Python y más.',
    benefits: ['Automatización completa', 'Código limpio y escalable', 'Arquitectura robusta']
  },
  {
    icon: '📊',
    title: 'Análisis de Datos',
    desc: 'Transformamos datos en insights accionables con visualizaciones interactivas y reportes detallados.',
    benefits: ['Dashboards interactivos', 'Predicción con IA', 'Reportes en tiempo real']
  },
  {
    icon: '⚙️',
    title: 'Automatización Inteligente',
    desc: 'Optimiza procesos repetitivos con RPA y flujos de trabajo automatizados que ahorran tiempo y dinero.',
    benefits: ['Reducción de costos 60%', 'Procesos 24/7', 'Error humano minimizado']
  },
  {
    icon: '🤖',
    title: 'Chatbots & IA',
    desc: 'Asistentes virtuales inteligentes que mejoran la atención al cliente y automatizan consultas frecuentes.',
    benefits: ['Disponibilidad 24/7', 'Respuestas instantáneas', 'Integración omnicanal']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-gradient-to-b from-dark to-dark-light relative">
      <div className="container mx-auto px-5">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            ⚡ Servicios Premium
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Soluciones Tecnológicas Completas</h2>
          <p className="text-xl text-gray">Potenciamos tu negocio con herramientas digitales de última generación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/5 p-10 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-[0_8px_20px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <span className="text-secondary">✓</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
