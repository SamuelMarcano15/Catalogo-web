import Image from "next/image";
import telefono from "../../../public/img/telefono.png";
import instagram from "../../../public/img/logotipo-de-instagram.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const ContactUs = () =>{
    return (
     <>
     <Navbar/>
        <section className="bg-white" id="contacto">
            <div className="title-contact">
                <p className="text-4xl  font-bold flex justify-center mt-16 mb-5" data-section="Contacto" data-value="titulo">Formulario de Contacto</p>
            </div>
            <form action="https://formsubmit.co/samuelmarcanosalasar@gmail.com" method="POST" className="contact-container bg-bgpage rounded-2xl flex justify-center mx-auto w-2/3 h-[600px] mb-12">
                <div className="inputs mt-6 text-center mb-16">
                    <p className="text-xl text-white mb-6" data-section="Contacto" data-value="texto">Completa el formulario para ponerme en contacto contigo lo mas pronto posible</p>
                    <div className="form-control mb-10"><input className="flex h-16 text-lg w-full rounded-md border border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Nombre | Name" type="text" name="name" />
                    </div>
                    <div className="form-control mb-10"><input className="flex h-16 text-lg w-full rounded-md border border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Email" type="email" name="email" />
                    </div>
                    <div className="form-control mb-10"><input className="flex h-16 text-lg w-full rounded-md border border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Asunto | Subject" type="text" name="subject" />
                    </div>
                    <div className="form-control mb-4"><textarea className="flex h-32 text-lg w-full rounded-md border border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Escribe tu mensaje | Write your message" name="message" ></textarea>
                    </div>
                    <button className="className='btnLogin hidden mx-auto lg:flex lg:items-center lg:justify-center lg:block rounded-xl bg-white w-36 md:w-48 h-10 md:h-12 transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110  font-bold text-base md:text-lg hover:bg-slate-500 hover:text-white" id="btn-enviar" type="submit" data-section="Contacto" data-value="btn-enviar" >Enviar</button>             
                    <input type="hidden" name="_next" value="http://localhost:8080/contactUs"/>
                    <input type="hidden" name="_captcha" value="false"/>
                </div>  
            </form>
            <p className="text-center text-4xl mt-5 mb-5 font-bold">Datos de Contacto</p>
            <div className="DatosContacto flex justify-center mb-16">
                <div className="flex mr-12">
                 <Image src={telefono} alt={"icono"} width={35} height={35} className="mr-3"/> <p className=" text-xl">+58 4141841484</p>
                </div>
                <div className="flex">
                 <Image src={instagram} alt={"icono"} width={35} height={35} className="mr-3"/> <p className="text-xl">@Nacar_bisuteria</p>
                </div>          
            </div>     
        </section>
        <Footer/>
     </>
    )
} 
export default ContactUs;