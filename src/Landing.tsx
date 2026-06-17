import React from 'react';
import { 
  Camera, 
  ShieldCheck, 
  BellRing, 
  BarChart3, 
  ChevronRight, 
  Users, 
  EyeOff, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: { opacity: 0 },
    viewport: { once: false, amount: 0.2 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src="/Spotcheck_logo_grande.png" alt="SpotCheck Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Características</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Cómo funciona</a>
              <a href="#privacy" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Privacidad</a>
              <a 
                href="https://spot-check-eight.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Desarrollado para la PUCV</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent"
          >
            Monitoreo de Aforo Inteligente <br className="hidden md:block" /> y en Tiempo Real
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
          >
            Optimiza la gestión de espacios universitarios con visión artificial avanzada. 
            Seguridad y cumplimiento de aforos sin comprometer la privacidad.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://spot-check-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 group text-lg"
            >
              Ingresar al Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/frame.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all text-lg text-center"
            >
              Ver Demo
            </a>
          </motion.div>

          {/* Visual Placeholder / Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.9 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2rem] blur-2xl opacity-50 -z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden group cursor-default">
              <img 
                src="/SpotchekPreview.png" 
                alt="Dashboard SpotCheck Preview" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tecnología al servicio del campus</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Potenciamos la infraestructura universitaria con herramientas de última generación para una gestión eficiente.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Camera className="w-6 h-6 text-blue-600" />,
                title: "Visión Artificial",
                desc: "Conteo preciso de personas utilizando YOLOv8, detectando flujos en tiempo real con alta fidelidad."
              },
              {
                icon: <EyeOff className="w-6 h-6 text-blue-600" />,
                title: "Privacidad Total",
                desc: "Procesamiento local de imágenes. No guardamos fotos ni videos, solo extraemos datos numéricos."
              },
              {
                icon: <BellRing className="w-6 h-6 text-blue-600" />,
                title: "Alertas Automáticas",
                desc: "Notificaciones por email instantáneas al alcanzar zonas ámbar o críticas de aforo."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                title: "Dashboard Analítico",
                desc: "Visualiza el estado actual e histórico de tus salas con gráficos intuitivos y KPIs clave."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">¿Cómo funciona SpotCheck?</h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    step: "01",
                    title: "Captura de Flujo",
                    desc: "Las cámaras de seguridad o webcams capturan el flujo de personas en los accesos."
                  },
                  {
                    step: "02",
                    title: "Procesamiento IA",
                    desc: "El motor YOLOv8 procesa los cuadros localmente para extraer solo el conteo numérico."
                  },
                  {
                    step: "03",
                    title: "Actualización y Alerta",
                    desc: "El dashboard se actualiza en segundos y envía alertas si hay riesgos de sobre-aforo."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: i * 0.3 }}
                    className="relative group"
                  >
                    <div className="text-5xl font-black text-white/10 mb-6 group-hover:text-blue-500/20 transition-colors">{item.step}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    {i < 2 && (
                      <div className="hidden lg:block absolute top-12 -right-6 text-slate-700">
                        <ChevronRight className="w-8 h-8" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy and Trust */}
      <section id="privacy" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center"
          >
            <motion.div 
              initial={{ rotate: -15, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -15, scale: 0.8 }}
              viewport={{ once: false }}
              transition={{ duration: 1.0 }}
              className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <ShieldCheck className="w-10 h-10" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Privacidad y Confianza</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              SpotCheck ha sido diseñado bajo el principio de <strong>Privacy by Design</strong>. 
              Cumplimos estrictamente con la Ley N° 19.628 sobre Protección de la Vida Privada.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { icon: <EyeOff className="w-5 h-5 text-blue-600 mt-1" />, text: "Sin almacenamiento de imágenes o grabaciones." },
                { icon: <Users className="w-5 h-5 text-blue-600 mt-1" />, text: "Cero recolección de datos biométricos." },
                { icon: <Lock className="w-5 h-5 text-blue-600 mt-1" />, text: "Autenticación segura vía Google @mail.pucv.cl." },
                { icon: <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />, text: "Cumplimiento de normativas institucionales." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl"
                >
                  {item.icon}
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <img src="/Spotcheck_logo_grande.png" alt="SpotCheck Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Pontificia Universidad Católica de Valparaíso.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
