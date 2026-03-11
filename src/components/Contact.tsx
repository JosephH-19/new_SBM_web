export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-dark-light border-b border-white/5">
      <div className="container mx-auto px-5">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            📞 Conecta con nosotros
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Comienza tu Transformación Digital</h2>
          <p className="text-xl text-gray">Estamos listos para convertir tus ideas en realidad</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Info Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:translate-x-2 hover:border-primary">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                📧
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Correo Electrónico</h3>
              <p className="text-gray leading-relaxed">softandbusinessmanagement@gmail.com</p>
              <p className="text-gray leading-relaxed mt-1">Numero de contacto: 973012326 - Joseph Huatuco Buendia (Gerente)</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:translate-x-2 hover:border-primary">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                ⏰
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Disponibilidad</h3>
              <p className="text-gray leading-relaxed">
                Lunes a Sábado<br/>
                Mañanas: 8:00 AM - 12:00 PM<br/>
                Noches: 6:30 PM - 10:00 PM
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:translate-x-2 hover:border-primary">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                📍
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
              <p className="text-gray leading-relaxed">
                Huancayo, Junín, Perú<br/>
                Servicio remoto a nivel nacional
              </p>
            </div>
          </div>

          {/* CTA Column */}
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10 flex flex-col justify-center h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                💡 ¿Listo para comenzar?
              </h3>
              
              <p className="text-gray mb-10 text-lg leading-relaxed">
                Ofrecemos una consulta gratuita donde analizamos tus necesidades y te presentamos una propuesta personalizada sin ningún compromiso. Solo cubrimos gastos operativos, garantizando soluciones accesibles para tu microempresa.
              </p>
              
              <a 
                href="#chatbot-demo" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_4px_15px_rgba(99,102,241,0.4)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.5)] hover:-translate-y-1 transition-all duration-300 w-fit"
              >
                🚀 Solicitar Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
