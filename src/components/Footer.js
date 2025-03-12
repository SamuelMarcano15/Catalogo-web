import Image from "next/image"
import svg1 from "../../public/img/logo-tiktok.png";
import svg2 from "../../public/img/logo-instagram.png";
import svg3 from "../../public/img/logo-facebook.png";
import logoNacar from '../../public/img/nacar(recortado)blanco.png'
import Link from "next/link";


const Footer = () =>{
    return(
        <>
            <footer className="footer bg-bgpage2 flex justify-center sm:justify-between h-[15vh] ">
                <div className="iconsBrands flex items-center sm:ml-12 ">
                    <Image alt='1' src={svg1} width={46} height={46} className="mr-3 cursor-pointer sm:w-[36px] sm:h-[36px]"/>
                    <Image alt='2' src={svg2} width={46} height={46} className="mr-3 cursor-pointer sm:w-[36px] sm:h-[36px]"/>
                    <Image alt='3' src={svg3} width={46} height={46} className="mr-3 cursor-pointer sm:w-[36px] sm:h-[36px]"/>
                </div>
                <div className="logoNacar hidden sm:grid justify-items-end  md:mx-auto md:my-auto md:grid md:grid-cols-1 my-auto">
                    <Image alt='4' src={logoNacar} width={150} height={59} className="grid justify-items-end md:mx-auto"/>
                    <p className="text-white font-normal mt-4 ">Copyright © Nacar_bisuteria 2025</p>
                </div>
                <div className="navLinks mr-12 my-auto hidden sm:hidden md:block">
                    <ul>
                        <li><Link className="navlink text-white mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-400" href={"/"}>Inicio</Link></li>
                        <li><Link className="navlink text-white mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-400" href={"/catalog"}>Catálogo</Link></li>
                        <li><Link className="navlink text-white mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-400" href={"/contactUs"}>Contácto</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer