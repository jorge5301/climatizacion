"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const Menu = () => {
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    asunto: "",
    descripcion: "",
    servicio: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const toggleModal = () => setModalAbierto(!modalAbierto);
  const toggleMenu = () => setAbrirMenu(!abrirMenu);

  const validateForm = () => {
    const newErrors = {};
    const regexNombre = /^[a-zA-Z\s]+$/;
    const regexApellidos = /^[a-zA-Z\s]+$/;
    const regexAsunto = /^.+$/;
    const regexDescripcion = /^.+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexNombre.test(formData.nombre)) {
      newErrors.nombre = "El nombre es inválido.";
    }
    if (!regexApellidos.test(formData.apellidos)) {
      newErrors.apellidos = "Los apellidos son inválidos.";
    }
    if (!regexAsunto.test(formData.asunto)) {
      newErrors.asunto = "El asunto es requerido.";
    }
    if (!regexDescripcion.test(formData.descripcion)) {
      newErrors.descripcion = "La descripción es requerida.";
    }
    if (!formData.servicio) {
      newErrors.servicio = "Seleccione un servicio.";
    }
    if (!regexEmail.test(formData.email)) {
      newErrors.email = "El correo electrónico es inválido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          toast.success("Formulario enviado con éxito!");
          setFormData({
            nombre: "",
            apellidos: "",
            asunto: "",
            descripcion: "",
            servicio: "",
            email: "",
          });
          toggleModal();
        } else {
          toast.error("Error al enviar el correo.");
        }
      } catch (error) {
        toast.error("Error de conexión.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src="/logo.png" className="h-24" alt="Logo" />
          <div className="hidden sm:grid place-items-center">
            <span className="self-center text-2xl font-bold text-gray-800">
              Climatización
            </span>
            <span className="self-center text-2xl font-bold text-gray-800">
              P&D
            </span>
          </div>
        </a>
        <div className="hidden lg:flex lg:items-center lg:space-x-8 text-lg font-medium">
          <a href="#" className="text-gray-800 hover:text-blue-600">
            Inicio
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600">
            Nosotros
          </a>
          <div className="relative group">
            <button
              type="button"
              className="text-gray-800 hover:text-blue-600 flex items-center"
              onClick={toggleMenu}
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
            </button>
            {abrirMenu && (
              <ul className="absolute left-0 mt-2 w-36 bg-white text-gray-800 text-sm rounded-lg shadow-lg z-50">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Servicio 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Servicio 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Servicio 3
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Servicio 4
                  </a>
                </li>
              </ul>
            )}
          </div>
          <a href="#" className="text-gray-800 hover:text-blue-600">
            Galería
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-600">
            Preguntas frecuentes
          </a>
        </div>
        <button
          onClick={toggleModal}
          type="button"
          className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-full"
        >
          Contacto
        </button>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50"
          aria-controls="navbar-multi-level"
          aria-expanded={abrirMenu ? "true" : "false"}
        >
          <span className="sr-only">Abrir menú principal</span>
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
      </div>
      {abrirMenu && (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-40"></div>
          <div
            id="navbar-multi-level"
            className="fixed inset-x-0 top-0 z-50 flex flex-col items-center mt-14"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-screen-md p-4 relative">
              <button
                className="absolute top-2 right-2 text-black hover:text-gray-800"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="flex flex-col items-center space-y-2 ">
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-lg"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-lg"
                >
                  Nosotros
                </a>
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    <span className="text-lg">Servicios</span>
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

                  <div className="flex flex-col items-center mt-2 bg-white w-full">
                    <a
                      href="#"
                      className="block py-1 text-gray-800 hover:bg-gray-100 text-md"
                    >
                      Servicio 1
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-gray-800 hover:bg-gray-100 text-md"
                    >
                      Servicio 2
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-gray-800 hover:bg-gray-100 text-md"
                    >
                      Servicio 3
                    </a>
                    <a
                      href="#"
                      className="block py-1 text-gray-800 hover:bg-gray-100 text-md"
                    >
                      Servicio 4
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-lg"
                >
                  Galería
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-lg"
                >
                  Preguntas Frecuentes
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      {modalAbierto && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4 flex space-x-2">
                <div className="flex-1">
                  <label className="block text-left mb-2 text-gray-700">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${
                      errors.nombre ? "border-red-500" : "border-green-500"
                    }`}
                  />
                  {errors.nombre && (
                    <span className="text-red-500 text-sm">
                      {errors.nombre}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-left mb-2 text-gray-700">
                    Apellidos:
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${
                      errors.apellidos ? "border-red-500" : "border-green-500"
                    }`}
                  />
                  {errors.apellidos && (
                    <span className="text-red-500 text-sm">
                      {errors.apellidos}
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2 text-gray-700">
                  Servicio:
                </label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.servicio ? "border-red-500" : "border-green-500"
                  }`}
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="Servicio 1">Servicio 1</option>
                  <option value="Servicio 2">Servicio 2</option>
                  <option value="Servicio 3">Servicio 3</option>
                  <option value="Servicio 4">Servicio 4</option>
                </select>
                {errors.servicio && (
                  <span className="text-red-500 text-sm">
                    {errors.servicio}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2 text-gray-700">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.email ? "border-red-500" : "border-green-500"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2 text-gray-700">
                  Asunto:
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.asunto ? "border-red-500" : "border-green-500"
                  }`}
                />
                {errors.asunto && (
                  <span className="text-red-500 text-sm">{errors.asunto}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2 text-gray-700">
                  Descripción:
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.descripcion ? "border-red-500" : "border-green-500"
                  }`}
                />
                {errors.descripcion && (
                  <span className="text-red-500 text-sm">
                    {errors.descripcion}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-1/4"
              >
                Enviar
              </button>
              <button
                onClick={toggleModal}
                className="mt-4 text-gray-700 underline px-8"
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
