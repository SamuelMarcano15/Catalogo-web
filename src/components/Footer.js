import Image from "next/image"
import svg1 from "../../public/img/logo-tiktok.svg";
import svg2 from "../../public/img/logo-instagram.svg";
import svg3 from "../../public/img/logo-facebook.svg";
import logoNacar from '../../public/img/nacar(recortado).png'
import Link from "next/link";


const Footer = () =>{
    return(
        <>
            <footer className="footer bg-bgpage flex justify-between h-[20vh]">
                <div className="iconsBrands flex ml-12">
                    <Image src={svg1} width={36} height={40} className="mr-3 cursor-pointer"/>
                    <Image src={svg2} width={40} height={40} className="mr-3 cursor-pointer"/>
                    <Image src={svg3} width={40} height={40} className="mr-3 cursor-pointer"/>
                </div>
                <div className="logoNacar grid justify-items-end  md:mx-auto md:my-auto md:grid md:grid-cols-1 my-auto">
                    <Image src={logoNacar} width={150} height={59} className="grid justify-items-end md:mx-auto"/>
                    <p className="text-black font-normal mt-4 ">Copyright © Nacar_bisuteria 2025</p>
                </div>
                <div className="navLinks mr-12 my-auto hidden sm:hidden md:block">
                    <ul>
                        <li><Link className="navlink text-black mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white" href={"#"}>Inicio</Link></li>
                        <li><Link className="navlink text-black mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white" href={"#"}>Catálogo</Link></li>
                        <li><Link className="navlink text-black mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white" href={"#"}>Contácto</Link></li>
                        <li><Link className="navlink text-black mr-5 font-normal text-2xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white" href={"#"}>Acerca de</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer