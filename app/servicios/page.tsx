import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Servicios() {
  return (
    <main className="bg-white text-[#2B2B2B] min-h-screen font-sans">
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
        <div className="flex items-center gap-6">
          <Link href="/" className="text-[#1E73BE] font-semibold hover:underline">
            ← Inicio
          </Link>
          <Link href="/contacto" className="bg-[#1E73BE] hover:bg-[#165a96] text-white px-5 py-2 rounded-full transition shadow-md">
            Presupuesto
          </Link>
        </div>
      </nav>

      <header className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Servicios NexoraTech
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Diseñamos y desarrollamos soluciones digitales hechas a medida para tu negocio. Desde páginas web modernas, pasando por sistemas TPV y CRMs inteligentes, hasta ayudarte a encontrar el equipo ideal para tu proyecto.
        </p>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <h2 className="text-2xl font-bold text-[#1E73BE] mb-4">Diseño y desarrollo de Páginas Web</h2>
            <p className="text-gray-600 mb-4">
              Creamos sitios web profesionales que se adaptan a cualquier dispositivo, cargan rápido y están optimizados para aparecer en buscadores. Cada proyecto incluye:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Diseño personalizado según tu identidad de marca.</li>
              <li>Integración con formularios, chat en vivo y herramientas de marketing.</li>
              <li>Optimización SEO básica para ayudarte a ser visible desde el primer día.</li>
              <li>Opciones de mantenimiento y actualizaciones continuas.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <h2 className="text-2xl font-bold text-[#1E73BE] mb-4">Sistemas TPV a medida</h2>
            <p className="text-gray-600 mb-4">
              Desarrollamos terminales de punto de venta (TPV) que gestionan ventas, inventario y cobro en un único lugar. Con nuestras soluciones puedes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Registrar ventas rápido y sin errores con pantallas táctiles optimizadas.</li>
              <li>Sincronizar inventario en tiempo real con control de stock y alertas.</li>
              <li>Integrar múltiples métodos de pago y generar tickets/facturas.</li>
              <li>Obtener informes detallados de ventas y márgenes para tomar decisiones.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <h2 className="text-2xl font-bold text-[#1E73BE] mb-4">CRMs personalizados</h2>
            <p className="text-gray-600 mb-4">
              Construimos sistemas de gestión de clientes (CRM) que se adaptan a tus procesos comerciales reales. Nuestros CRM te permiten:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Rastrear oportunidades y embudos de venta con seguimiento automatizado.</li>
              <li>Centralizar la información de clientes, tickets y comunicaciones.</li>
              <li>Automatizar tareas repetitivas y enviar recordatorios de seguimiento.</li>
              <li>Generar informes personalizados para medir el rendimiento comercial.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
            <h2 className="text-2xl font-bold text-[#1E73BE] mb-4">Buscar ordenador / portátil</h2>
            <p className="text-gray-600 mb-6">
              Si necesitas hardware para tu proyecto, te ayudamos a encontrar el equipo adecuado según tu presupuesto y necesidades técnicas.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-700">¿Qué tipo de equipo buscas?</label>
                <select className="w-full p-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 transition">
                  <option>Ordenador de sobremesa</option>
                  <option>Portátil</option>
                  <option>Estación de trabajo</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-700">Presupuesto aproximado</label>
                <input
                  type="text"
                  placeholder="Ej. 800€ - 1200€"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 transition"
                />
              </div>
              <button className="w-full bg-[#1E73BE] hover:bg-[#165a96] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-900/10">
                Buscar recomendaciones
              </button>
              <p className="text-sm text-gray-500">
                Nota: Esta búsqueda es una guía. Te enviaremos opciones actualizadas según disponibilidad real y tus prioridades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 NexoraTech — Experiencia en soluciones digitales.
      </footer>
    </main>
  );
}
