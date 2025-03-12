import Image from 'next/image';
import Link from 'next/link';
import imgflyer from '../../../public/img/imgflyer.png';
import { data } from '../data/products';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Catalog = () => {
  return (
    <>
    <Navbar/>
      <section className="flyerCatalog">
        <Image
          src={imgflyer}
          className='w-full h-[300px]'
          alt="Flyer del catálogo"
        />            
      </section> 
      
      <p className='text-bg font-bold text-3xl text-center mt-16'>
        ¡Explora las últimas tendencias!
      </p> 

      <section className='catalog grid grid-cols-4 justify-items-center gap-y-12 mt-16 mb-16'>
        {data.map((data) => (
          <ProductCard
            key={data.id}
            productName={data.name}
            imageSrc={data.image}
            productId={data.id}
          />
        ))}
      </section>
      <Footer/>
    </>
  );
}

export default Catalog;