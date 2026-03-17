'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Maximize, Wind, Phone, MapPin, Mail, MessageCircle, X, Play } from 'lucide-react';

export default function EnvidraceLanding() {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const galleryImages = [
    { src: "/998655_447387588712736_1834583057_n.jpg", title: "Vista Panorâmica", desc: "Integração total com o ambiente externo." },
    { src: "/20160212_084128.jpg", title: "Acabamento Premium", desc: "Trilhos discretos e alta segurança." },
    { src: "/20160216_124707(1).jpg", title: "Abertura Fluida", desc: "Recolhimento inteligente em 90 graus." },
    { src: "/69025_466985623419599_48346177_n.jpg", title: "Proteção UV", desc: "Conforto térmico sem perder a claridade." }
  ];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500 selection:text-white relative scroll-smooth">
      
      {/* HEADER BRANCO E MAIS ALTO */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Image 
            src="/envidrace-logo.png" 
            alt="Envidrace Logo" 
            width={160} 
            height={60} 
            className="object-contain mix-blend-multiply" 
          />
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#sistemas" className="text-slate-700 hover:text-blue-600 transition">Sistemas</a>
            <a href="#video-demonstrativo" className="text-slate-700 hover:text-blue-600 transition">Tecnologia</a>
            <a href="#galeria" className="text-slate-700 hover:text-blue-600 transition">Galeria</a>
            <a href="#contato" className="text-slate-700 hover:text-blue-600 transition">Contato</a>
          </nav>
          <a href="#contato" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
            Orçamento
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/Untitle4d.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Redefina o conceito de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Liberdade</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 mb-10 font-light"
          >
            Representante exclusivo HS Envidraçamento em Londrina, Cambé e região. Sistemas manuais e automatizados de alto padrão.
          </motion.p>
          <a href="#video-demonstrativo">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition flex items-center justify-center gap-2 mx-auto"
            >
              Descubra a Tecnologia
              <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </motion.button>
          </a>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="sistemas" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Tecnologia que transforma espaços</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Com o sistema HAutomatic e HS Gold, sua sacada se adapta ao clima em segundos, com um simples toque.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Maximize, title: "Ampliação de Espaço", desc: "Integre a sacada à sala de estar de forma elegante e contínua." },
            { icon: ShieldCheck, title: "Qualidade Blindex", desc: "Vidros de alta resistência, enquadrados na norma ABNT NBR 16259." },
            { icon: Wind, title: "Isolamento Acústico", desc: "Proteção contra chuvas, ventos e o ruído da cidade." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VÍDEO DEMONSTRATIVO */}
      <section id="video-demonstrativo" className="py-24 bg-slate-900 relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Veja a Tecnologia na Prática</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Conheça os detalhes de engenharia, testes de segurança e a suavidade dos nossos sistemas automatizados e manuais.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.2)] border border-white/10 bg-black aspect-video group cursor-pointer"
            onClick={handlePlayVideo}
          >
            <AnimatePresence>
              {!isVideoPlaying && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-white/10 border border-white/20 text-blue-400 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm shadow-xl"
                  >
                    <Play size={48} className="fill-blue-400 translate-x-1" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Clique aqui e assista!</h3>
                  <p className="text-slate-200 max-w-md">Descubra em 2 minutos por que a Envidrace é referência em alto padrão.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <video 
              ref={videoRef}
              controls={isVideoPlaying}
              preload="metadata"
              className="w-full h-full object-cover z-10"
              poster="/20160212_084128.jpg"
              onPlay={() => setIsVideoPlaying(true)}
            >
              <source src="/Untitle4d.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </motion.div>
        </div>
      </section>

      {/* GALERIA INTERATIVA */}
      <section id="galeria" className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Projetos em Destaque</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Interaja com nossa galeria e descubra os detalhes que fazem da Envidrace a melhor escolha. <span className="text-blue-400 font-semibold">Clique na imagem para ampliar.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full h-[600px] gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                layout
                onHoverStart={() => setActiveImg(index)}
                onClick={() => setSelectedImage(img.src)}
                className={`relative rounded-3xl overflow-hidden cursor-zoom-in transition-all duration-500 ease-in-out ${
                  activeImg === index ? 'md:flex-[4] flex-[4]' : 'md:flex-[1] flex-[1]'
                }`}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${activeImg === index ? 'opacity-100' : 'opacity-0 md:opacity-40'}`}></div>
                <motion.div 
                  className="absolute bottom-0 left-0 p-8 pointer-events-none"
                  animate={{ opacity: activeImg === index ? 1 : 0, y: activeImg === index ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: activeImg === index ? 0.2 : 0 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 whitespace-nowrap">{img.title}</h3>
                  <p className="text-slate-200 whitespace-nowrap opacity-0 md:opacity-100">{img.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO */}
      <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Solicite seu Orçamento</h2>
              <p className="text-slate-400 text-lg">
                Transforme sua sacada com a segurança e o design que seu imóvel merece. Fale com nossos especialistas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-blue-400 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Telefone / WhatsApp</p>
                  <p className="text-lg">(43) 3062-3733</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-blue-400 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Atendimento Local</p>
                  <p className="text-lg">Londrina, Cambé e Região</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-blue-400 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">E-mail</p>
                  <p className="text-lg">contato@envidrace.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULÁRIO COM FORMSPREE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <form action="https://formspree.io/f/SEU_CODIGO_AQUI" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="nome"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                  placeholder="Como podemos te chamar?" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="telefone"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                  placeholder="(43) 99999-9999" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem (Opcional)</label>
                <textarea 
                  rows={4} 
                  name="mensagem"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:bg-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none" 
                  placeholder="Conte-nos um pouco sobre o seu projeto..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <Image 
            src="/envidrace-logo.png" 
            alt="Envidrace Logo" 
            width={120} 
            height={40} 
            className="object-contain opacity-40 hover:opacity-100 transition duration-300 mix-blend-screen grayscale invert" 
          />
          <p>© {new Date().getFullYear()} Envidrace. Todos os direitos reservados. Desenvolvido por Sonus Prime Agencia</p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <motion.a 
        href="https://wa.me/554330623733?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20envidraçamento."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-16 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Fale conosco!
        </span>
      </motion.a>

      {/* MODAL LIGHTBOX PARA A GALERIA */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition bg-white/10 rounded-full p-2 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-default border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Projeto Ampliado" fill className="object-contain bg-black" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}