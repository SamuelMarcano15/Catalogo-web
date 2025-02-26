'use client';
import Image from "next/image";
import Link from "next/link";
import pulseraflyer1 from '../../public/img/imgpulsera1.png'
import pulseraflyer2 from '../../public/img/imgpulsera2.png'
import pulseraflyer3 from '../../public/img/imgpulsera3.png'
import pulseraAdv1 from '../../public/img/imgpulsera4.png'
import pulseraAdv2 from '../../public/img/imgpulsera5.png'
import pulseraAdv3 from '../../public/img/pulseracompartida.png'
import Carousel from "@/components/Carousel";
import imgAdv4 from "../../public/img/marina.jpeg"
import imgAdv5 from "../../public/img/marina2.jpeg"
import imgAdv6 from "../../public/img/marina3.jpeg"




const images =[
  '/img/pulserahombre.jpeg',
  '/img/bff.jpg',
  '/img/Cerise.jpeg',
  '/img/PULSERA.jpeg',
  '/img/perlas.jpeg',
  '/img/compartir estrellas.jpg',

]


export default function Home() {
  return (
    <>
    <section className="flyer w-screen h-[75hv] grid grid-cols-1 text-center sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:justify-center ">
        <div className="textFlyer content-center">
            <p className="text-black font-bold text-2xl pl-7 mt-10 sm:mt-10 md:mt-10 lg:mt-0 sm:text-3xl sm:pl-7 md:text-3xl md:pl-7 lg:text-2xl lg:pl-7 xl:text-2xl xl:pl-7 2xl:text-2xl ">PRODUCTOS CON LOS MÁS<br/>FINOS DETALLES</p>
        </div>
        <div className="imgFlyer grid grid-cols-3">
            <Image 
            src={pulseraflyer1} 
            className="rotate-90 hidden sm:hidden md:hidden lg:hidden xl:block mt-10 sm:mt-10 md:mt-10 lg:mt-0 sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[280px] relative bottom-4 xl:row-span-2 "
            />

            <Image 
            src={pulseraflyer2} 
            className="col-start-3 mt-10 sm:mt-10 md:mt-10 lg:mt-0 min-w-[150px] min-h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[245px] "
            />

            <Image 
            src={pulseraflyer3} 
            width={350} 
            height={300} 
            className=" w-[220px] h-[190px] row-start-1 col-start-1 sm:row-start-1 sm:col-start-1 md:col-start-1 md:row-start-1 lg:row-start-1 lg:col-start-1 sm:w-[280px] sm:h-[240px] md:w-[300px] md:h-[260px] lg:top-0 xl:row-start-2 xl:col-start-2 xl:top-28"
            />

        </div>
    </section>
    <section className="giveAgift w-screen h-[80vh] flex justify-between mt-52">
        <Image src={pulseraAdv3} alt="pulsera" className="imgGaG rounded-r-2xl h-[85%] w-[49%]"/>
        <div className="advertisement bg-bgpage h-[85%] w-[49%] rounded-l-2xl text-center content-center">
          <p className="text-black font-bold text-2xl sm:text-3xl lg:text-2xl mt-20">COMPARTE UN REGALO ESPECIAL,<br/>CON UNA PERSONA ESPECIAL</p>
          <p className="text-black text-lg sm:text-xl lg:text-lg mt-7 mb-6">Aprovecha las ofertas y comparte detalles<br/>hechos con amor</p>
          <div className="flex justify-center">
            <Image src={pulseraAdv1}  alt="pulsera" className="hidden sm:hidden lg:hidden xl:block w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
            <Image src={pulseraAdv2} alt="pulsera" className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"/>
          </div>
        </div>
    </section>
    <section className="carousel text-center w-screen ">
      <p className="text-black font-bold text-4xl mb-10">Visita el catálogo</p>
      <div className="carouselContainer">
          <Carousel images={images}/>
      </div>
    </section>
    <section className="callAction w-screen h-[80vh] flex justify-between">
        <div className="advertisement bg-bgpage h-3/4 w-[49%] rounded-r-2xl text-center content-center">
          <p className="text-black font-bold text-2xl sm:text-3xl lg:text-2xl  mt-20">SI TE REGISTRAS PUEDES ARMAR<br/>UN PEDIDO</p>
          <p className="text-black text-lg sm:text-xl lg:text-lg mt-7 mb-6">¿QUÉ ESPERAS PARA HACER EL TUYO?</p>
          <button className='btnLogin mx-auto rounded-xl bg-white w-24 h-8 xl:w-48 xl:h-14 text-black flex items-center justify-center transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-600  hover:text-white'>
                <Link className='btnText font-bold text-base xl:text-xl ' href={"#"}>Regístrate</Link>
            </button>
        </div>
        <div className="grid grid-cols-2 gap-5 w-[45%] h-3/4">
          <Image src={imgAdv4}  alt="collar" className="h-[250px] w-[250px] rounded-2xl hidden sm:hidden md:block "/>
          <Image src={imgAdv5}  alt="collar" className="h-[250px] w-[290px] rounded-2xl "/>
          <Image src={imgAdv6}  alt="collar" className="h-[250px] w-[340px] rounded-2xl col-start-2 md:rotate-12 row-start-2 sm:col-start-2 sm:row-start-2 md:col-start-1"/>
        </div>
    </section>
    </>
  );
}
