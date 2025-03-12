"use client";
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Image from 'next/image';
import { data } from '../../data/products'; // Asegúrate de la ruta correcta
import opcions from '../../../../public/img/ellipsis-vertical.svg';

const DatatableProducts = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(7);

  // Plantilla para la imagen
  const imageBodyTemplate = (rowData) => {
    return (
      <Image
        src={rowData.image}
        alt={rowData.name}
        width={50}
        height={50}
        className="rounded shadow"
      />
    );
  };

  // Plantilla para el precio
  const priceBodyTemplate = (rowData) => {
    return `$${rowData.price?.toFixed(2) || '0.00'}`;
  };

  // Plantilla para opciones
  const optionsBodyTemplate = () => {
    return (
      <button className="p-1 hover:bg-gray-100 rounded-full">
        <Image
          src={opcions}
          alt="Opciones"
          width={20}
          height={20}
          className="text-gray-600"
        />
      </button>
    );
  };

  // Header con filtro global
  const header = (
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">Productos</span>
      <InputText
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Buscar..."
        className="p-2 border rounded"
      />
    </div>
  );

  return (
    <div className="card">
      <DataTable
        value={data}
        globalFilter={globalFilter}
        header={header}
        paginator
        rows={rows}
        first={first}
        onPage={(e) => setFirst(e.first)}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        tableStyle={{ minWidth: '60rem' }}
        emptyMessage="No se encontraron productos"
      >
        <Column field="name" header="Nombre" sortable></Column>
        <Column header="Imagen" body={imageBodyTemplate}></Column>
        <Column
          field="price"
          header="Precio"
          body={priceBodyTemplate}
          sortable
        ></Column>
        <Column header="Descripción" field="description"></Column>
        <Column
          header="Opciones"
          body={optionsBodyTemplate}
          style={{ width: '100px' }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default DatatableProducts;