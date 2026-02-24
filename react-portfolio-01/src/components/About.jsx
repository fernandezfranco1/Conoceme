import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Smartphone,
  ExternalLink,
  Server,
  Database,
  Shield,
  Zap,
} from "lucide-react";

const About = ({ hasAnimated }) => {
  const features = [
    {
      icon: <Server className="w-8 h-8 mb-4 text-black" />,
      title: "Desarrollo Backend",
      description:
        "Especializado en Java y Spring Boot para construir aplicaciones seguras y escalables.",
    },

    {
      icon: <Database className="w-8 h-8 mb-4 text-black" />,
      title: "Gestión de Datos",
      description:
        "Experiencia en MySQL, asegurando un manejo eficiente y confiable de la información.",
    },

    {
      icon: <Shield className="w-8 h-8 mb-4 text-black" />,
      title: "Confianza y Seguridad",
      description:
        "Implementación de buenas prácticas para proteger sistemas y usuarios.",
    },

    {
      icon: <Zap className="w-8 h-8 mb-4 text-black" />,
      title: "Rendimiento",
      description:
        "Optimización de procesos para aplicaciones rápidas y con excelente experiencia de uso.",
    },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Sobre Mi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Desarrollador backend con título universitario y base sólida.
                Trabajo con Java, Spring Boot y MySQL, participo en proyectos
                que requieren APIs limpias y bases de datos eficientes. Aprendo
                rápido y me adapto a nuevas herramientas y procesos.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Todo comenzó con la curiosidad de como hacer sitios web y actualmente me encuentro en el camino de consolidarme como desarrollador backend, con ganas de seguir creciendo y aportando valor a proyectos que me pongan a prueba.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  {feature.icon}
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
