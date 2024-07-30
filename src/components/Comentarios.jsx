import React from "react";

const Comentarios = () => {
  const testimonios = [
    {
      titulo: "Testimonio 1",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    },
    {
      titulo: "Testimonio 2",
      texto:
        "Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      titulo: "Testimonio 3",
      texto:
        "Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.",
    },
    {
      titulo: "Testimonio 4",
      texto:
        "Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.",
    },
    {
      titulo: "Testimonio 5",
      texto:
        "Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.",
    },
    {
      titulo: "Testimonio 6",
      texto:
        "Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.",
    },
  ];

  return (
    <div className="mt-4 overflow-hidden relative w-full h-72 py-auto ">
      <div className="flex animate-marquee items-center ">
        {Array(2)
          .fill()
          .map((_, i) =>
            testimonios.map((testimonio, index) => (
              <div
                className="carousel-item flex items-center justify-center "
                key={i * testimonios.length + index}
              >
                <div className="card w-96 h-64 p-4 items-center">
                  <div className="card-body border-2 rounded-xl backdrop-blur-sm">
                    <h2 className="card-title text-xl font-bold mb-2">
                      {testimonio.titulo}
                    </h2>
                    <p className="text-gray-700">{testimonio.texto}</p>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 100s linear infinite;
          }

          .carousel-item {
            min-width: 25%;
          }
        `}
      </style>
    </div>
  );
};

export default Comentarios;
