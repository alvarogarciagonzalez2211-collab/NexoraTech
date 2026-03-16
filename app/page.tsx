import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    // Fondo principal: Blanco #FFFFFF | Texto principal: Gris oscuro #2B2B2B
    <main className="bg-[#FFFFFF] text-[#2B2B2B] min-h-screen font-sans selection:bg-[#00D084] selection:text-white">
      
      {/* Navegación */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex items-center">
          <Image 
            src="/Logo-Nexora.png" 
            alt="Logo NexoraTech" 
            width={180} 
            height={50} 
            priority 
            className="hover:opacity-80 transition"
          />
        </div>
        <div className="hidden md:flex space-x-8 text-[#2B2B2B] items-center font-semibold">
          <Link href="/servicios" className="hover:text-[#1E73BE] transition">
            Servicios
          </Link>
          <a href="#tecnologia" className="hover:text-[#1E73BE] transition">Tecnología</a>
          <Link href="/contacto" className="bg-[#1E73BE] hover:bg-[#165a96] text-white px-6 py-2 rounded-full transition shadow-md">
            Presupuesto
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-[#2B2B2B]">
          Software que impulsa tu <br/>
          <span className="text-[#1E73BE]">visión tecnológica.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Especialistas en CRMs, TPVs y soluciones digitales a medida con el sello de calidad de <span className="text-[#2B2B2B] font-bold">NexoraTech</span>.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/contacto" className="bg-[#00D084] text-white hover:scale-105 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#00D084]/20 text-center">
            Empezar proyecto
          </Link>
          <Link href="/servicios" className="border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all text-center">
            Ver servicios
          </Link>
        </div>
      </header>

      {/* Sección Servicios con Tarjetas */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-l-4 border-[#00D084] pl-6">
            <div>
              <h2 className="text-[#1E73BE] font-bold tracking-widest uppercase text-sm mb-2">Nuestras Soluciones</h2>
              <h3 className="text-4xl font-bold text-[#2B2B2B]">Desarrollo de alto nivel</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard 
              icon="⚡" 
              title="CRMs a Medida" 
              desc="Sistemas de gestión de clientes diseñados para optimizar tu flujo de ventas real."
              accentColor="#00D084"
            />
            <ServiceCard 
              icon="🖥️" 
              title="Sistemas TPV" 
              desc="Terminales de punto de venta robustos con sincronización en la nube e inventarios."
              accentColor="#1E73BE"
            />
            <ServiceCard 
              icon="🌐" 
              title="Webs Corporativas" 
              desc="Presencia digital de alto impacto optimizada para buscadores y conversión."
              accentColor="#2B2B2B"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-gray-100 bg-white">
        <div className="mb-8 opacity-80 inline-block">
          <Image 
            src="/Logo-Nexora.png" 
            alt="Logo NexoraTech" 
            width={140} 
            height={40} 
          />
        </div>
        <p className="text-gray-400 text-sm">
          © 2026 NexoraTech — Transformando ideas en herramientas digitales.
        </p>
      </footer>
    </main>
  );
}

function ServiceCard({ icon, title, desc, accentColor }: any) {
  return (
    <div className="group p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 relative overflow-hidden">
      <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-[#2B2B2B]">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
      
      {/* Línea de acento inferior */}
      <div 
        className="mt-8 h-1.5 w-12 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  );
}