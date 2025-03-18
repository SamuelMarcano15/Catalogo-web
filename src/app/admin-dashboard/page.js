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
      const [showModal, setShowModal] = useState(false);
      const [newProduct, setNewProduct] = useState({
        nombre: '',
        descripcion: '',
        imagen: '',
        precio: '',
        detalles: ''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el producto a tu API
        console.log('Nuevo producto:', newProduct);
        setShowModal(false);
        // Limpiar el formulario
        setNewProduct({
          nombre: '',
          descripcion: '',
          imagen: '',
          precio: '',
          detalles: ''
        });
      };


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
                onClick={() => setShowModal(true)}
                className="w-48 h-14 rounded-lg text-base font-bold grid grid-cols-1 justify-items-center cursor-pointer content-center text-black bg-white shadow-sm hover:bg-slate-300 transition duration-300">
                Agregar producto
            </button>
            {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={newProduct.nombre}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Descripción</label>
                  <textarea
                    name="descripcion"
                    value={newProduct.descripcion}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">URL de la Imagen</label>
                  <input
                    type="text"
                    name="imagen"
                    value={newProduct.imagen}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Precio</label>
                  <input
                    type="number"
                    name="precio"
                    value={newProduct.precio}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    step="0.01"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Detalles</label>
                  <textarea
                    name="detalles"
                    value={newProduct.detalles}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                  Agregar Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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