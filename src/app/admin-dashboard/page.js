"use client";
import { useState } from "react";
import Image from 'next/image';
import NavbarDashboard from "./admin-components/NavbarDashboard";
import clipboard from '../../../public/img/clipboard-outline.svg';
import archive from '../../../public/img/archive-outline.svg';
import DatatableProducts from "./admin-components/Datatable";
import DatatableOrders from "./admin-components/DatatableOrders"

export default function AdminDashboard() {
  const [selected, setSelected] = useState("Productos");

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header */}
      <NavbarDashboard/>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Altura completa sin scroll */}
        <aside className="w-64 bg-white p-6 shadow-lg flex flex-col overflow-y-auto">
          <nav className="space-y-4">
            <button
              className={`w-full flex text-black font-bold text-left p-3 rounded-lg transition ${
                selected === "Productos" ? "bg-teal-400" : "hover:bg-slate-300"
              }`}
              onClick={() => setSelected("Productos")}
            >
              <Image src={archive} width={20} height={20} alt="archive" className="mr-1"/>
              Productos
            </button>
            
            <button
              className={`w-full flex text-black font-bold text-left p-3 rounded-lg transition ${
                selected === "Pedidos" ? "bg-teal-400" : "hover:bg-slate-300" // Corregí el typo en bg-bg-slate-300
              }`}
              onClick={() => setSelected("Pedidos")}
            >
              <Image src={clipboard} width={20} height={20} alt="clipboard" className="mr-1"/>
              Pedidos
            </button>
          </nav>
        </aside>

        {/* Contenido principal con scroll independiente */}
        <main className="flex-1 p-6 overflow-y-auto text-black">
          {selected === "Productos" && (
            <>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Gestión de Productos</h2>
              <button 
              className="w-48 h-14 rounded-lg text-base font-bold grid grid-cols-1 justify-items-center cursor-pointer content-center text-black bg-white shadow-sm hover:bg-slate-300 trasition duration-300">
                Agregar producto
              </button>
            </div>
            <div className="datatable mt-7 grid grid-cols-1 justify-items-center">
                <DatatableProducts/>
            </div>
            </>
          )}

          {selected === "Pedidos" && (
            <>
            <div>
              <h2 className="text-3xl font-bold">Pedidos</h2>
            </div>
            <div className="datatable mt-7 grid grid-cols-1 justify-items-center">
                <DatatableOrders/>
            </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}