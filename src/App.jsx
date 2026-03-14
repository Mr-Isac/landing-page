import { motion } from 'motion/react';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Stethoscope, 
  Shield, 
  Smile,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-teal-900 text-teal-50 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +34 900 123 456</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Av. Principal 123, Madrid</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" /> Lunes - Viernes: 9:00 - 20:00
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Smile className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-2xl font-bold text-slate-800 tracking-tight">Dental<span className="text-teal-600">Pro</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Inicio</a>
              <a href="#servicios" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Servicios</a>
              <a href="#nosotros" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Nosotros</a>
              <a href="#testimonios" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Testimonios</a>
              <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Cita
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-teal-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#inicio" className="block px-3 py-2 text-slate-600 font-medium">Inicio</a>
              <a href="#servicios" className="block px-3 py-2 text-slate-600 font-medium">Servicios</a>
              <a href="#nosotros" className="block px-3 py-2 text-slate-600 font-medium">Nosotros</a>
              <a href="#testimonios" className="block px-3 py-2 text-slate-600 font-medium">Testimonios</a>
              <button className="w-full text-left bg-teal-600 text-white px-3 py-3 rounded-md font-medium mt-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Cita
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="sm:text-center lg:text-left"
            >
              <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Odontología de Excelencia</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl leading-tight">
                <span className="block xl:inline">Tu mejor sonrisa</span>{' '}
                <span className="block text-teal-600 xl:inline">comienza aquí</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Brindamos atención dental integral con tecnología de vanguardia y un equipo de especialistas dedicados a tu salud y bienestar bucal.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 transition-all">
                    Reserva tu consulta
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all">
                    Ver servicios
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Dentista atendiendo a un paciente"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
                title: "Especialistas Expertos",
                desc: "Equipo médico altamente cualificado y en constante formación."
              },
              {
                icon: <Shield className="w-8 h-8 text-teal-600" />,
                title: "Tecnología Avanzada",
                desc: "Equipamiento de última generación para diagnósticos precisos."
              },
              {
                icon: <Smile className="w-8 h-8 text-teal-600" />,
                title: "Atención sin Dolor",
                desc: "Técnicas modernas para garantizar tu máxima comodidad."
              }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Nuestros Tratamientos</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cuidado dental completo para toda la familia
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Ofrecemos una amplia gama de servicios odontológicos para cubrir todas tus necesidades de salud y estética dental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Odontología General",
                desc: "Limpiezas, empastes y prevención para mantener tu boca sana.",
                img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Ortodoncia Invisible",
                desc: "Alinea tus dientes de forma discreta y cómoda con alineadores transparentes.",
                img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Implantes Dentales",
                desc: "Recupera la funcionalidad y estética de tu sonrisa con implantes de titanio.",
                img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Blanqueamiento",
                desc: "Luce una sonrisa más blanca y brillante en una sola sesión.",
                img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Endodoncia",
                desc: "Tratamiento de conductos sin dolor para salvar tus piezas dentales.",
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Odontopediatría",
                desc: "Cuidado especializado y amable para los más pequeños de la casa.",
                img: "https://images.unsplash.com/photo-1536365481498-f29e31d05b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <a href="#" className="text-teal-600 font-medium flex items-center hover:text-teal-700">
                    Saber más <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                Más de 15 años creando sonrisas saludables
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                En DentalPro, no solo tratamos dientes; cuidamos personas. Nuestro enfoque se centra en la prevención, la educación y el tratamiento personalizado para cada paciente, en un ambiente relajado y profesional.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Primera consulta y diagnóstico gratuito",
                  "Financiación a medida sin intereses",
                  "Urgencias dentales 24/7",
                  "Materiales de máxima calidad garantizada"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-400 transition-colors">
                Conoce a nuestro equipo
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-10 lg:mt-0 relative"
            >
              <div className="absolute inset-0 bg-teal-500 rounded-3xl transform translate-x-4 translate-y-4 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipo médico" 
                className="relative rounded-3xl shadow-2xl z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Lo que dicen nuestros pacientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María García",
                text: "Excelente trato y profesionalidad. Perdí el miedo al dentista gracias a la paciencia de la Dra. Martínez. Las instalaciones son impecables.",
                rating: 5
              },
              {
                name: "Carlos Rodríguez",
                text: "Me hice un tratamiento de implantes y el resultado ha sido espectacular. El proceso fue indoloro y el seguimiento inmejorable. Totalmente recomendados.",
                rating: 5
              },
              {
                name: "Laura Fernández",
                text: "Llevo a mis hijos desde hace años y están encantados. Tienen un tacto especial con los niños. Es nuestra clínica familiar de confianza.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">Paciente verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            ¿Listo para mejorar tu salud dental?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Agenda tu primera consulta gratuita y descubre cómo podemos ayudarte a conseguir la sonrisa que deseas.
          </p>
          <button className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg flex items-center mx-auto">
            <Calendar className="w-5 h-5 mr-2" />
            Solicitar Cita Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <Smile className="h-8 w-8 text-teal-500" />
                <span className="ml-2 text-2xl font-bold text-white tracking-tight">Dental<span className="text-teal-500">Pro</span></span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Tu clínica dental de confianza. Innovación, experiencia y trato humano para cuidar de tu sonrisa.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#inicio" className="hover:text-teal-400 transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#testimonios" className="hover:text-teal-400 transition-colors">Testimonios</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Odontología General</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Ortodoncia</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Implantes</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Estética Dental</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contacto</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-500 mr-2 shrink-0" />
                  <span>Av. Principal 123, 28001<br/>Madrid, España</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-500 mr-2 shrink-0" />
                  <span>+34 900 123 456</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-teal-500 mr-2 shrink-0" />
                  <span>Lunes a Viernes<br/>9:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Clínica DentalPro. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
