export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-dark flex items-center relative overflow-hidden pt-20">
      <div className="absolute w-full h-full overflow-hidden top-0 left-0">
        <div className="absolute bg-primary rounded-full opacity-10 blur-3xl w-64 h-64 top-[10%] left-[10%] animate-[pulse_8s_infinite]"></div>
        <div className="absolute bg-secondary rounded-full opacity-10 blur-3xl w-96 h-96 top-[50%] right-[10%] animate-[pulse_10s_infinite_1s]"></div>
        <div className="absolute bg-accent rounded-full opacity-10 blur-3xl w-48 h-48 bottom-[20%] left-[40%] animate-[pulse_6s_infinite_2s]"></div>
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in-up">
            🚀 Innovación & Tecnología
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight hero-text-gradient animate-fade-in-up animation-delay-200">
            Transformamos Ideas en Soluciones Digitales
          </h1>
          
          <p className="text-xl text-gray mb-8 animate-fade-in-up animation-delay-400">
            Desarrollo de software personalizado para impulsar tu microempresa al siguiente nivel
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-600">
            <a 
              href="#chatbot-demo" 
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_4px_15px_rgba(99,102,241,0.4)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.5)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              💬 Prueba nuestro Chatbot
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-4 rounded-xl font-semibold border-2 border-primary/50 text-white bg-primary/10 hover:bg-primary hover:border-primary transition-all duration-300 inline-flex items-center gap-2"
            >
              📧 Contactar
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
            <div className="text-center md:text-left p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-gray text-sm md:text-base">Reducción en tiempos</div>
            </div>
            <div className="text-center md:text-left p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray text-sm md:text-base">Proyectos completados</div>
            </div>
            <div className="text-center md:text-left p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm col-span-2 md:col-span-1">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray text-sm md:text-base">Satisfacción cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
