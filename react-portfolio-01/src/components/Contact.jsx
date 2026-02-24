import React, { useState, useCallback, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactLinks } from "../data/contact";

/* Toast simple y discreto */
const Toast = ({ text, open }) => {
  if (!open) return null;
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="bg-black text-white px-3 py-2 rounded-md shadow-lg text-sm animate-slide-in">
        {text}
      </div>
    </div>
  );
};

/* EmailButton que intenta abrir mailto: y copia al portapapeles de forma discreta mostrando sólo un toast */
const EmailButton = ({ email, className, icon, label }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const handleClick = useCallback(() => {
    // Intentamos abrir el cliente de correo
    window.location.href = `mailto:${email}`;

    // Intentamos copiar al portapapeles de forma silenciosa (click es una interacción válida)
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setToastText("Correo copiado al portapapeles");
          setShowToast(true);
        })
        .catch(() => {
          // Si falla la API, mostramos la dirección en un toast para que el usuario la vea
          setToastText(email);
          setShowToast(true);
        });
    } else {
      // Fallback si no existe clipboard API
      setToastText(email);
      setShowToast(true);
    }
  }, [email]);

  // auto-hide toast
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 2600);
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center justify-center w-full sm:w-auto ${className}`}
        aria-label={`Enviar email a ${email}`}
        type="button"
      >
        {icon}
        {label}
      </button>

      <Toast text={toastText} open={showToast} />
    </>
  );
};

const Contact = ({ hasAnimated }) => {
  // Asignamos icono según el campo `type` del dato
  const contactLinksWithIcons = contactLinks.map((link) => ({
    ...link,
    icon:
      link.type === "email" ? (
        <Mail className="w-5 h-5 mr-2" />
      ) : link.type === "github" ? (
        <Github className="w-5 h-5 mr-2" />
      ) : (
        <Linkedin className="w-5 h-5 mr-2" />
      ),
  }));

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 delay-500 ${
            hasAnimated?.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Siempre estoy interesado en nuevas oportunidades y proyectos que me
            desafíen. Además, no dudes en contactarme, ya sea para saludar u opinar
            sobre mi trabajo. Estoy dispuesto a colaboraciones y a conectar con
            otros profesionales del sector. ¡Hablemos!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            {/* Email: botón discreto + toast */}
            <EmailButton
              email={contactLinksWithIcons[0].href.replace(/^mailto:/, "")}
              className={contactLinksWithIcons[0].className}
              icon={contactLinksWithIcons[0].icon}
              label={contactLinksWithIcons[0].label}
            />

            <div className="flex gap-4 sm:gap-8">
              <a
                href={contactLinksWithIcons[1].href}
                className={`flex items-center justify-center flex-1 sm:flex-none ${contactLinksWithIcons[1].className}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactLinksWithIcons[1].icon}
                {contactLinksWithIcons[1].label}
              </a>

              <a
                href={contactLinksWithIcons[2].href}
                className={`flex items-center justify-center flex-1 sm:flex-none ${contactLinksWithIcons[2].className}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactLinksWithIcons[2].icon}
                {contactLinksWithIcons[2].label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
