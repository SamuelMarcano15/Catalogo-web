import Image from "next/image";
import { data } from '../../data/products';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = ({ params }) => {
  // Buscar el producto por ID
  const product = data.find(p => p.id.toString() === params.id);

  if (!product) {
    return <div className="text-center py-20">Producto no encontrado</div>;
  }

  return (
    <>
    <Navbar />
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover rounded-lg h-[450px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="text-2xl font-semibold">${product.price}</div>
          <p className="text-gray-500">{product.details}</p>
          
          <button className="bg-bgpage2 text-white px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

// Generación de rutas estáticas
export async function generateStaticParams() {
  return data.map(product => ({
    id: product.id.toString(),
  }));
}

export default ProductDetail;