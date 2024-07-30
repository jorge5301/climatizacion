import React, { useState } from "react";

const Header = () => {
  const [abrir, setAbrir] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src="/logo.png" className="h-24" alt="Logo" />
          <div className="grid place-items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
              Climatización
            </span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
              Q&D
            </span>
          </div>
        </a>
        <div className="hidden lg:flex lg:items-center lg:space-x-8 text-lg font-medium">
          <a href="#" className="text-gray-900 hover:text-blue-700">
            Inicio
          </a>
          <a href="#" className="text-gray-900 hover:text-blue-700">
            Nosotros
          </a>
          <div className="relative group">
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="text-gray-900 hover:text-blue-700 flex items-center justify-center"
              >
                Servicios
                <svg
                  className="w-4 h-4 mx-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white text-gray-900 text-md rounded-box z-[1] w-36 p-2 shadow"
              >
                <li>
                  <a>Servicio 1</a>
                </li>
                <li>
                  <a>Servicio 2</a>
                </li>
                <li>
                  <a>Servicio 3</a>
                </li>
                <li>
                  <a>Servicio 4</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" className="text-gray-900 hover:text-blue-700">
            Galería
          </a>
          <a href="#" className="text-gray-900 hover:text-blue-700">
            Preguntas frecuentes
          </a>
        </div>
        <button
          onClick={() => setAbrir(true)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-multi-level"
          aria-expanded={abrir ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <button className="  bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full">
          Contacto
        </button>
      </div>
      {abrir && (
        <div id="navbar-multi-level" className="lg:hidden">
          <div className="flex flex-col items-center space-y-2 mt-4">
            <a href="#" className="text-gray-900 hover:text-blue-700">
              Inicio
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-700">
              Nosotros
            </a>
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-900 hover:text-blue-700">
                <span>Servicios</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="flex flex-col items-center mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Servicio 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Servicio 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Servicio 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                >
                  Servicio 4
                </a>
              </div>
            </div>
            <a href="#" className="text-gray-900 hover:text-blue-700">
              Galería
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-700">
              Preguntas frecuentes
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
