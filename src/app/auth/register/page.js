'use client'
import Link from "next/link"
import Image from "next/image"
import person from "../../../../public/img/person.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const Register =  () => {
    const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('sexo')
    const data = {
      name:'daniel',
      password:''
    }
    const response = await fetch(`http://localhost/api/register`, {
        method: 'POST',
        cache: "no-cache",
        headers: {
          "Content-Type": 'application/json',
          Authorization: "Bearer " + window.localStorage.getItem("token"),
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
     console.log(await response.json());
  }
    return (
        <>
        <Navbar/>
        <div className="w-full h-full"> 
            <form onSubmit={handleSubmit} className="formContainer relative mx-auto mt-[10%] mb-[10%] bg-bgpage w-[90%] sm:w-[65%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] h-3/4 rounded-2xl">
                <div className="imglogin absolute hidden lg:block bg-bgpage border-8 border-white rounded-full w-32 h-32 left-[39%] -top-[13%]">
                    <Image src={person}
                    width={90}
                    height={97}
                    className="relative left-3 top-2"
                    />
                </div>
                <p className="text-center text-black font-bold text-2xl pt-16">¡REGISTRATE!</p>
                <div className="inputContainer text-center mt-12 flex items-center flex-col ">
                    <input type="email" placeholder="Correo Electrónico" className="bg-white text-black w-[80%] h-16 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none hover:shadow-lg hover:border-blue-300 text-lg pl-4"/>
                    <input type="password" placeholder="Contraseña" className="bg-white text-black w-[80%] h-16 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none hover:shadow-lg hover:border-blue-300 mt-8 text-lg pl-4"/>
                    <input type="password" placeholder="Repetir Contraseña" className="bg-white text-black w-[80%] h-16 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none hover:shadow-lg hover:border-blue-300 mt-8 text-lg pl-4"/>
                    {/* <Link className='rounded-lg mt-16 flex justify-center items-center bg-white w-[80%] h-16  transition delay-150 duration-700 ease-in-out hover:-translate-y-1  hover:bg-slate-600 hover:text-white font-bold text-xl md:text-lg' href={"/"}>
                        Regístrate
                    </Link>   */}
                    <button
                        type="submit"
                        className="rounded-lg mt-16 flex justify-center items-center bg-white w-[80%] h-16  transition delay-150 duration-700 ease-in-out hover:-translate-y-1  hover:bg-slate-600 hover:text-white font-bold text-xl md:text-lg"
                        >
              Regístrate
            </button>
                </div>
                <div className="text-center mt-2 pb-10">
                <Link href={"/auth/login"} className=" text-black text-base cursor-pointer transition delay-100 duration-500 ease-in-out hover:text-white">¿Tienes una cuenta? Inicia Sesión</Link>
                </div>
               
                
            </form>
        </div>
        <Footer/>
        </>
    )
}
export default Register