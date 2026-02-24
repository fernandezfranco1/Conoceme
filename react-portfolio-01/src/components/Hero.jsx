import React, { useState, useEffect } from "react";
import { AArrowDown, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { heroData } from "../data/hero";

const Hero = ({ hasAnimated }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const { roles } = heroData;

  useEffect(() => {
    const currentRole = roles[currentTextIndex];
    if (!isDeleting) {
      //Creamos el efecto
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        //Antes de eliminar esperamos
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      //Borramos el efecto
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        //Pasamos a la siguiente palabra
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles]);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-28 md:pt-20">
      {/*Elementos de Background*/}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-500"></div>

      {/* Contenido del Grid*/}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">
        <div
          className={`transition-all duration-1000 ${hasAnimated.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          id="hero"
        >
          {/* Greeting */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate-fade-in">
              {heroData.greeting}
            </span>
          </div>

          {/* Grid con Foto y Contenido */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center mb-8 mt-6 md:mt-0">
            {/* Foto */}
            <div className="flex justify-center md:justify-end animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="/Perfil.jpeg"
                  alt="Franco"
                  className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300 animate-float"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="text-center md:text-left">
              {/* Nombre */}
              <h1 className="text-5xl md:text-6xl leading-tight font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent animate-fade-in-up">
                {heroData.name}
              </h1>

              {/* Roles */}
              <div className="h-12 md:h-16 mb-6 flex items-center justify-center md:justify-start">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
                  Soy{" "}
                  <span className="relative">
                    <span className="text-blue-600 font-bold">
                      {currentText}
                      <span className="animate-pulse"></span>
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                  </span>
                </h2>
              </div>

              {/* Descripción */}
              <p className="text-base md:text-lg text-gray-600 mb-8 md:max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                {heroData.description}
              </p>

              {/*Botones CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up delay-300 justify-center md:justify-start">
                {heroData.ctaButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm ${button.variant === "primary" ? "bg-black text-white shadow-lg hover:shadow-xl hover:bg-gray-800" : "border-2 border-black text-black hover:bg-black hover:text-white"}`}
                  >
                    {button.variant === "primary" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    <span
                      className={
                        button.variant === "primary" ? "relative z-10" : ""
                      }
                    >
                      {button.text}
                    </span>
                  </a>
                ))}
              </div>

              {/* Redes Sociales */}
              <div className="flex justify-center md:justify-start space-x-6 animate-fade-in-up delay-400">
                {heroData.socialLinks.map((social, index) => {
                  const IconComponent =
                    social.icon === "Github"
                      ? Github
                      : social.icon === "Linkedin"
                        ? Linkedin
                        : Mail;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                      <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scroll */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <span className="text-sm mb-2">Ver Más</span>
              <ArrowDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      {/* Elementos Floating */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-float delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-float delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-orange-400 rounded-full opacity-60 animate-float delay-3000"></div>
    </section>
  );
};

export default Hero;
