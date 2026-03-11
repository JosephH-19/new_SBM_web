import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-8 border-t border-white/10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 inline-block">
              SOFT & BUSINESS MANAGEMENT
            </h3>
            <p className="text-gray mb-6 leading-relaxed max-w-sm">
              Soluciones tecnológicas innovadoras y accesibles para microempresas. Transformamos ideas en realidad digital con interfaces modernas y excelente experiencia de usuario.
            </p>
            <div className="text-gray space-y-2 font-medium">
              <p>📍 Huancayo, Perú</p>
              <p>🕐 Lun - Sáb: 8:00 AM - 10:00 PM</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li><Link href="#servicios" className="text-gray hover:text-white transition-colors">Desarrollo Software</Link></li>
              <li><Link href="#servicios" className="text-gray hover:text-white transition-colors">Análisis de Datos</Link></li>
              <li><Link href="#servicios" className="text-gray hover:text-white transition-colors">Automatización</Link></li>
              <li><Link href="#servicios" className="text-gray hover:text-white transition-colors">Chatbots & IA</Link></li>
              <li><Link href="#servicios" className="text-gray hover:text-white transition-colors">Bases de Datos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link href="#inicio" className="text-gray hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="#proyectos" className="text-gray hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link href="#chatbot-demo" className="text-gray hover:text-white transition-colors">Demo Chatbot</Link></li>
              <li><Link href="#contacto" className="text-gray hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray text-sm text-center md:text-left">
            © {new Date().getFullYear()} SOFT & BUSINESS MANAGEMENT. Todos los derechos reservados.
          </p>
          <p className="text-gray text-xs font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Hecho con 💜 por estudiantes de Ingeniería de Sistemas
          </p>
        </div>
      </div>
    </footer>
  );
}
