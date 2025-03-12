'use client'
import { useState, useEffect, useRef } from 'react';
import logo from '../../../../public/img/nacar(recortado).png';
import Image from 'next/image';
import person from '../../../../public/img/person-sharp.svg';
import chevronDown from '../../../../public/img/chevron-down-sharp.svg';

const NavbarDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userButtonRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && userButtonRef.current) {
        if (
          !dropdownRef.current.contains(event.target) &&
          !userButtonRef.current.contains(event.target)
        ) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white z-10 shadow-sm w-full h-16 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4">
      <div className='logo'>
        <Image 
          src={logo} 
          alt='logo' 
          width={120} 
          height={120}
          className='cursor-pointer'
        />
      </div>
      
      <div className="relative" ref={userButtonRef}>
        <div 
          className='userBoton cursor-pointer flex items-center gap-2'
          onClick={toggleDropdown}
        >
          <Image 
            src={person} 
            alt='person' 
            width={35} 
            height={35}
            className="rounded-full"
          />
          <Image 
            src={chevronDown}
            alt='chevronDown'
            width={15}
            height={15}
            className={`transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div
          ref={dropdownRef}
          className={`absolute right-0 mt-2 bg-white shadow-lg w-44 rounded-lg transition-all duration-200 ${
            isDropdownOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <ul className='py-2 text-black font-bold text-base 2xl:text-lg'>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors'>
              Nombre usuario
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors'>
              Cerrar sesión
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavbarDashboard;