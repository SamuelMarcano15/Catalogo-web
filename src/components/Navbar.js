'use client';
import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logoNacar from '../../public/img/nacar(recortado)blanco.png'
import hamburgesa from '../../public/img/menu.svg'
import Close from '../../public/img/close.svg'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const logoRef = useRef(null); 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (logoRef.current) { // Verificar si la referencia existe
            logoRef.current.addEventListener('click', () => {
                location.href = '/';
            });
        }
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

   


    return (
        <>
           <header className='navbar flex justify-between items-center w-full min-h-[80px] md:min-h-[130px] px-4 sm:px-6 md:px-8 lg:px-12 py-4'>
                <div className="logoCatalogo cursor-pointer flex-shrink-0" >
                    <Image
                        src={logoNacar}
                        alt="El logo"
                        width={150}
                        height={50}
                        className='w-[100px] md:w-[130px] lg:w-[150px] h-auto cursor-pointer'
                        ref={logoRef}
                    />
                </div>
                
           
                <div className='navLinks hidden lg:flex gap-6 xl:gap-8'>
                    <Link className='navlink' href={"/"}>Inicio</Link>
                    <Link className='navlink' href={"/catalog"}>Catálogo</Link>
                    <Link className='navlink' href={"/contactUs"}>Contácto</Link>
                </div>
                
                <div className='flex items-center gap-4'>
                    <Link className='btnLogin hidden lg:flex lg:items-center lg:justify-center lg:block rounded-xl bg-white w-36 md:w-48 h-10 md:h-12 transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110  font-bold text-base md:text-lg hover:bg' 
                    href={"/auth/login"}>
                    Iniciar Sesión
                    </Link>
    

                    <button 
                        className='p-1 lg:hidden'
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                    >
                        <Image 
                            src={hamburgesa} 
                            width={40} 
                            height={40}
                            alt="Menú hamburguesa" 
                            className='w-7 h-7 md:w-8 md:h-8 fill-white'
                        />
                    </button>
                </div>
            </header>

           <div 
                className={`fixed inset-0  transition-opacity z-40 ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleMenu}
            />
            <div className={`lg:hidden fixed top-0 left-0 w-full  bg-bgpage2 transition-transform duration-500 z-50 ${
                menuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className="relative flex flex-col items-center h-full p-6 overflow-y-auto">
                    <button 
                        className='absolute top-4 right-4 p-2 z-50'
                        onClick={toggleMenu}
                        aria-label="Cerrar menú"
                    >
                        <Image 
                            src={Close} 
                            width={32}
                            height={32}
                            alt="Cerrar menú"
                            className='min-w-[24px] fill-white'
                        />
                    </button>
                    <div className='w-full flex flex-col items-center gap-6 mt-16'>
                        <Link className='navlink-mobile text-3xl' href={"/"}>Inicio</Link>
                        <Link className='navlink-mobile text-3xl' href={"/catalog"}>Catálogo</Link>
                        <Link className='navlink-mobile text-3xl' href={"/contactUs"}>Contácto</Link>

                        
                        <Link href={"/auth/login"} className='text-2xl btnLogin-mobile w-full max-w-[280px] mt-8'>
                        Iniciar Sesión
                        </Link>
    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;