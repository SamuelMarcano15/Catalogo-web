"use client";
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { orders } from '../../data/orders';

const DatatableOrders = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(7);

  
  const productsBodyTemplate = (rowData) => {
    return rowData.productos.map(p => p.nombre).join(', ');
  };

  
  const totalBodyTemplate = (rowData) => {
    return `$${rowData.total.toFixed(2)}`;
  };

 
  const header = (
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">Pedidos</span>
      <InputText
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Buscar pedidos..."
        className="p-2 border rounded"
      />
    </div>
  );

  return (
    <div className="card">
      <DataTable
        value={orders}
        globalFilter={globalFilter}
        header={header}
        paginator
        rows={rows}
        first={first}
        onPage={(e) => setFirst(e.first)}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        tableStyle={{ minWidth: '60rem' }}
        emptyMessage="No se encontraron pedidos"
      >
        <Column field="usuario" header="Cliente" sortable></Column>
        <Column 
          header="Productos" 
          body={productsBodyTemplate}
          style={{ minWidth: '300px' }}
        ></Column>
        <Column 
          header="Total" 
          body={totalBodyTemplate}
          sortable
        ></Column>
      </DataTable>
    </div>
  );
};

export default DatatableOrders;