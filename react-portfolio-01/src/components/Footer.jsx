import React from "react";
import { Github, Linkedin, Mail, ArrowUp, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 px-6 bg-gradient-to-r from-red-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Secciones */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Links */}
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-2 text-purple-200">Navegación</h3>
            <ul className="space-y-1 text-xs text-purple-100">
              <li><a href="#about" className="hover:text-white transition">Sobre mí</a></li>
              <li><a href="#projects" className="hover:text-white transition">Proyectos</a></li>
              <li><a href="#skills" className="hover:text-white transition">Habilidades</a></li>
            </ul>
          </div>

          {/* Sociales */}
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-2 text-purple-200">¡Nos Sigamos!</h3>
            <div className="flex justify-center space-x-3">
              <a href="https://www.linkedin.com/in/francofernandez-/" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-center">
            <h3 className="font-semibold text-sm mb-2 text-purple-200">Contacto</h3>
            <div className="flex justify-center space-x-3">
              <a href="https://wa.me/5492964543827" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">
                <MessageCircle size={18} />
              </a>
              <button onClick={scrollToTop} 
                className="p-1.5 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-700 pt-3 text-center">
          <p className="text-purple-100 text-xs">
            © 2026 Franco. Hecho con React y Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;