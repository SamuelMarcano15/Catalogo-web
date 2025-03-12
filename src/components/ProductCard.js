import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ productName, imageSrc, productId }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image 
        className="w-full h-48 object-cover rounded-t-lg" 
        alt={productName}
        src={imageSrc}
        width={256}  
        height={192}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{productName}</h2>
        <div className="flex justify-between items-center mt-4">
          <Link href={`/catalog/${productId}`}>
            <button className="bg-bgpage2 hover:bg-gray-400 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
              Más información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;