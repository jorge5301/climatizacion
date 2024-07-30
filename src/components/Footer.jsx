import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-base-content p-10">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Diseño</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Publicidad</a>
        </nav>
        <nav>
          <h6 className="footer-title">Compañía</h6>
          <a className="link link-hover">Sobre nosotros</a>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Trabajos</a>
          <a className="link link-hover">Kit de prensa</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Términos de uso</a>
          <a className="link link-hover">Política de privacidad</a>
          <a className="link link-hover">Política de cookies</a>
        </nav>
        <form>
          <h6 className="footer-title">Boletín</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">
                Introduce tu dirección de correo electrónico
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="usuario@sitio.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Suscribirse</button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className="footer footer-center bg-black text-base-content p-4">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - Todos los derechos
            reservados - Creado por{" "}
            <a
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href="https://github.com/jorge5301"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jorge
            </a>{" "}
            😎
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
