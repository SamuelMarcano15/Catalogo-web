'use client';
import Image from "next/image";
import { motion } from "motion/react"
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



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
    <header className="header"><Navbar/></header>
    <section className="flyer w-full overflow-x-hidden h-[80hv] grid grid-cols-1 text-center sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:justify-center ">
        <div className="textFlyer content-center">
            <p className="text-black font-bold text-2xl pl-7 mt-10 sm:mt-10 md:mt-10 lg:mt-0 sm:text-3xl sm:pl-7 md:text-3xl md:pl-7 lg:text-3xl lg:pl-7 xl:text-3xl xl:pl-7 2xl:text-3xl ">PRODUCTOS CON LOS MÁS<br/>FINOS DETALLES</p>
        </div>
        <div className="imgFlyer grid grid-cols-3">
            <Image 
            src={pulseraflyer1} 
            className="rotate-90 hidden sm:hidden md:hidden lg:hidden xl:block mt-10 sm:mt-10 md:mt-10 lg:mt-0 sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[300px] relative bottom-5 xl:row-span-2 "
            alt="pulsera6"
            />

            <Image 
            src={pulseraflyer2} 
            className="col-start-3 mt-10 sm:mt-10 md:mt-10 lg:mt-0 min-w-[150px] min-h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[265px] "
            alt="pulsera5"
            />

            <Image 
            src={pulseraflyer3} 
            width={350} 
            height={300}  //a todos las Image le debes poner width
            className=" w-[220px] h-[190px] row-start-1 col-start-1 sm:row-start-1 sm:col-start-1 md:col-start-1 md:row-start-1 lg:row-start-1 lg:col-start-1 sm:w-[280px] sm:h-[240px] md:w-[310px] md:h-[270px] lg:top-0 xl:row-start-2 xl:col-start-2 xl:top-28"
            alt="pulsera4"
            />

        </div>
    </section>
    <section className="giveAgift w-full overflow-x-hidden h-[80vh] flex justify-between mt-52">
    <motion.div
       initial={{ x: -100, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       viewport={{ once: false, margin: "0px 0px -100px 0px" }} 
       transition={{ duration: 0.8, easing: "ease-out" }}
       className="imgGaG rounded-r-2xl h-[85%] w-[49%] overflow-hidden"
    >
      <Image 
        src={pulseraAdv3} 
        alt="pulsera3"
        className="w-full h-full object-cover"
        
      />
    </motion.div>
    <motion.div 
      className="advertisement bg-bgpage h-[85%] w-[49%] rounded-l-2xl text-center content-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <p className="text-black font-bold text-2xl sm:text-3xl lg:text-3xl mt-20">
        COMPARTE UN REGALO ESPECIAL,<br/>CON UNA PERSONA ESPECIAL
      </p>
      <p className="text-black text-lg sm:text-xl lg:text-xl mt-7 mb-6">
        Aprovecha las ofertas y comparte detalles<br/>hechos con amor
      </p>
      
      <motion.div 
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 } 
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <Image 
            src={pulseraAdv1}  
            alt="pulsera1" 
            className="hidden sm:hidden lg:hidden xl:block w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
          />
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <Image 
            src={pulseraAdv2} 
            alt="pulsera2" 
            className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
    <section className="carousel text-center w-full overflow-x-hidden ">
      <p className="text-black font-bold text-4xl mb-10">Visita el catálogo</p>
      <div className="carouselContainer">
          <Carousel images={images}/>
      </div>
    </section>
    <section className="callAction w-full overflow-x-hidden h-[80vh] overflow-y-hidden grid grid-cols-1 gap-y-4 md:flex md:justify-between">
      {/* Contenedor izquierdo - Animación de aparición */}
      <motion.div 
        className="advertisement bg-bgpage md:h-3/4 md:w-[49%] md:rounded-r-2xl text-center content-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
          <p className="text-black font-bold text-2xl sm:text-3xl lg:text-3xl mt-12">
            SI TE REGISTRAS PUEDES ARMAR<br/>UN PEDIDO
          </p>
          <p className="text-black text-lg sm:text-xl lg:text-xl mt-7 mb-6">
            ¿QUÉ ESPERAS PARA HACER EL TUYO?
          </p>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <Link 
              className='btnText font-bold sm:text-base xl:text-xl btnRegister mx-auto rounded-xl bg-white w-28 h-16 sm:w-32 sm:h-14 md:w-48 md:h-14 text-bgpage2 flex items-center justify-center transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 hover:text-white' 
              href={"/auth/register"}
            >
              Regístrate
            </Link>
          </motion.div>
      </motion.div>

      {/* Contenedor derecho - Animaciones de derecha a izquierda */}
      <motion.div 
        className="grid justify-items-center grid-cols-2 gap-5 w-full h-auto md:w-[45%] md:h-3/4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false}}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2
            }
          }
        }}
      >
        {/* Primera imagen */}
        <motion.div
          className="h-[250px] w-[280px] md:h-[300px] md:w-[300px] rounded-2xl "
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 1,
              transition: { type: "spring", stiffness: 60 }
            }
          }}
        >
          <Image 
            src={imgAdv4} 
            alt="collar1" 
            className="w-full h-full rounded-2xl"
          />
        </motion.div>

        {/* Segunda imagen */}
        <motion.div
          className="h-[250px] w-[280px]  md:h-[300px] md:w-[300px] rounded-2xl "
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 1,
              transition: { type: "spring", stiffness: 60, delay: 0.1 }
            }
          }}
        >
          <Image 
            src={imgAdv5} 
            alt="collar2" 
            className="w-full h-full rounded-2xl"
          />
        </motion.div>

        {/* Tercera imagen */}
        <motion.div
          className=" hidden sm:hidden md:block md:h-[300px] md:w-[300px] rounded-2xl  md:rotate-12 sm:col-start-2 sm:row-start-2 md:col-start-1"
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 1,
              transition: { 
                type: "spring", 
                stiffness: 60,
                delay: 0.2
              }
            }
          }}
        >
          <Image 
            src={imgAdv6} 
            alt="collar3" 
            className="w-full h-full rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
    <footer className="footer"><Footer/></footer>
    </>
  );
}
