import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden ">
      <div className="relative bg-gradient-to-b from-blue-700 to-blue-400 text-white py-8">
        <div className="container mx-auto text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Expertos en Climatización para
            <br />
            tu Confort y Bienestar
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Descubre cómo nuestra experiencia y dedicación garantizan ambientes
            confortables y eficientes en todo momento.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition duration-300">
            Conoce Más →
          </button>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          {[
            {
              imgSrc: "/1.jpg",
              imgAlt: "Instalación de Sistemas",
              title: "Instalación de Sistemas",
              description:
                "Servicios de instalación de equipos de climatización de alta eficiencia.",
            },
            {
              imgSrc: "/2.jpg",
              imgAlt: "Mantenimiento Preventivo",
              title: "Mantenimiento Preventivo",
              description:
                "Aseguramos el óptimo funcionamiento de tus sistemas de climatización.",
            },
            {
              imgSrc: "/3.jpg",
              imgAlt: "Reparaciones Urgentes",
              title: "Reparaciones Urgentes",
              description: "Atención inmediata para resolver cualquier avería.",
            },
            {
              imgSrc: "/4.jpg",
              imgAlt: "Asesoría Energética",
              title: "Proyectos HVAC",
              description:
                "Soluciones para maximizar la eficiencia energética de tu hogar o negocio.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center "
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  className="w-32 h-32 rounded-full border-2 border-blue-500 shadow-lg transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
