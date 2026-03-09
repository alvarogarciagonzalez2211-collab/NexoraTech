import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
  return (
    <main className="bg-white text-[#2B2B2B] min-h-screen font-sans">
      {/* Navegación Simple */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-gray-100">
        <Link href="/">
          <Image 
            src="/Logo-Nexora.png" 
            alt="Logo NexoraTech" 
            width={150} 
            height={40} 
            className="hover:opacity-80 transition"
          />
        </Link>
        <Link href="/" className="text-[#1E73BE] font-semibold hover:underline">
          ← Volver al inicio
        </Link>
      </nav>

      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Columna Izquierda: Información */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Hablemos de tu <span className="text-[#00D084]">próximo proyecto.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Estamos listos para digitalizar tu negocio. Cuéntanos qué necesitas (CRM, TPV o Web) y te responderemos en menos de 24 horas.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#1E73BE] text-xl">📍</div>
              <p className="font-medium text-gray-700">Valladolid, España (Disponible para todo el mundo)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#1E73BE] text-xl">📧</div>
              <p className="font-medium text-gray-700">contacto@nexoratech.com</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Nombre y Apellidos"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Email de contacto</label>
              <input 
                type="email" 
                placeholder="correo@dominio.com"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">¿En qué podemos ayudarte?</label>
              <select className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#1E73BE] outline-none transition bg-white cursor-pointer">
                <option>Desarrollo de CRM</option>
                <option>Sistema TPV a medida</option>
                <option>Página Web Profesional</option>
                <option>Otro proyecto de software</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-gray-500">Cuéntanos más</label>
              <textarea 
                rows={4}
                placeholder="Describe brevemente tu idea..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 outline-none transition"
              ></textarea>
            </div>
            <button className="w-full bg-[#1E73BE] hover:bg-[#165a96] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/10">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 NexoraTech — Expertos en soluciones digitales.
      </footer>
    </main>
  );
}