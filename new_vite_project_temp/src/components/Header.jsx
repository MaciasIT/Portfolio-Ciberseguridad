import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-300">Michel Macías - Portafolio de Ciberseguridad</a>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#" className="hover:text-gray-300">Currículum</a></li>
            <li><a href="#" className="hover:text-gray-300">Documentos</a></li>
            <li><a href="#" className="hover:text-gray-300">Programación</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;