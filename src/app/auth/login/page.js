'use client'
import Link from "next/link"
import Image from "next/image"
import person from "../../../../public/img/person.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import {useState} from 'react'
import { useRouter } from 'next/navigation' 

const Login = () => {
    const [user,setUser] = useState()
    const [password,setPassword] = useState()
    const router = useRouter() // 2. Inicializar router

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
          email: user,
          password: password
        }
        
        try {
            const response = await fetch(`http://localhost/api/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json()

            if (response.ok) {
                // 3. Almacenar token y redirigir
                window.localStorage.setItem("token", responseData.token)
                router.push('/admin-dashboard')
            } else {
                // Manejar errores (opcional)
                console.error("Error de autenticación:", responseData.message)
            }
        } catch (error) {
            console.error("Error de red:", error)
        }
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
                <p className="text-center text-black font-bold text-2xl pt-16">¡BiENVENIDO!</p>
                <div className="inputContainer text-center mt-12 flex items-center flex-col">
                    <input onChange={(e)=>{setUser(e.target.value)}} type="email" placeholder="Correo Electrónico" className="bg-white text-black w-[80%] h-16 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none hover:shadow-lg hover:border-blue-300 text-lg pl-4"/>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Contraseña" className="bg-white text-black w-[80%] h-16 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-none hover:shadow-lg hover:border-blue-300 mt-8 text-lg pl-4"/>
                   {/*  <Link className='rounded-lg mt-16 flex justify-center items-center bg-white w-[80%] h-16  transition delay-150 duration-700 ease-in-out hover:-translate-y-1  hover:bg-slate-600 hover:text-white font-bold text-xl md:text-lg' href={"/"}>
                        Inicia Sesión
                    </Link> */}    
                    <button
                        type="submit"
                        className="rounded-lg mt-16 flex justify-center items-center bg-white w-[80%] h-16  transition delay-150 duration-700 ease-in-out hover:-translate-y-1  hover:bg-slate-600 hover:text-white font-bold text-xl md:text-lg"
                        >Iniciar Sesión </button> 
                </div>
                <div className="text-center flex flex-col mt-2 pb-10">
                <Link href={"/auth/register"} className=" text-black text-base cursor-pointer transition delay-100 duration-500 ease-in-out hover:text-white">¿Aun no tienes una cuenta? Registrate</Link>
                <Link href={"#"} className=" text-black text-base cursor-pointer transition delay-100 duration-500 ease-in-out hover:text-white">He olvidado mi contraseña</Link>
                </div>   
            </form>
        </div>
        <Footer/>
        </>
    )
}
export default Login