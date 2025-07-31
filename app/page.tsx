"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Download, ArrowRight, Instagram } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { TimelineItem } from "@/components/timeline-item"
import { ProjectCard } from "@/components/project-card"
import { useInView } from "@/hooks/useInView"

export default function Home() {
  const [inicioRef, inicioInView] = useInView({ threshold: 0.2 })
  const [expRef, expInView] = useInView({ threshold: 0.2 })
  const [proyRef, proyInView] = useInView({ threshold: 0.2 })
  const [contactoRef, contactoInView] = useInView({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-black text-white grid-background">
      <Navigation />

      {/* Sección de inicio */}
      <section
        ref={inicioRef}
        id="inicio"
        className={`pt-20 pb-10 transition-all duration-500 ease-out ${
          inicioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tarjeta de perfil */}
            <div className="card p-4 sm:p-8 flex flex-col items-center text-center">
              <div className="mb-6 relative w-32 h-32 sm:w-48 sm:h-48 overflow-hidden rounded-full">
                <Image
                  src="/yo.jpg?height=600&width=600"
                  alt="Aaron Tournoud"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Aaron Tournoud</h1>
              <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
                <span className="text-primary">⟵</span>
                <span className="text-base sm:text-xl text-white/80">Ingeniero en Sistemas de Información (Estudiante Avanzado)</span>
                <span className="text-primary">⟶</span>
              </div>
            </div>

            {/* Tarjeta de redes */}
            <div className="card p-4 sm:p-8 flex flex-col justify-center items-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white/80">Redes</h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <a
                  href="https://github.com/aarontournoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-white/60 hover:text-primary transition-colors"
                >
                  <Github size={40} />
                  <span className="mt-2">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/aarontournoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-white/60 hover:text-primary transition-colors"
                >
                  <Linkedin size={40} />
                  <span className="mt-2">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/aaron_tournoud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-white/60 hover:text-primary transition-colors"
                >
                  <Instagram size={40} />
                  <span className="mt-2">Instagram</span>
                </a>                
                
              </div>
            </div>

            {/* Tarjeta de CV */}
            <div className="card p-4 sm:p-8 flex flex-col justify-center items-center">
              <div className="w-full h-32 sm:h-40 relative mb-6 sm:mb-8 object-cover overflow-hidden blur-sm">
                <Image 
                  src="/cv.png?height=300&width=500"
                  alt="CV Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <a
                href="/cv-aaron-tournoud.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download size={18} />
                Ver CV
              </a>
            </div>
          </div>

          {/* Tarjeta de descripción */}
          <div className="card p-4 sm:p-8 mt-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Sobre mi</h2>
            <p className="text-white/80 text-base sm:text-lg">
            Estudiante avanzado al día con la carrera de Ingeniería en Sistemas de Información en busca de
            experiencia laboral dentro del ámbito de actividades coordinadas y afines a mi formación académica.
              Apasionado en el diseño, desarrollo y mantenimiento de aplicaciones web eficientes y escalables.
              Especializado en tecnologías modernas como React, Angular, Next.js, Node.js. Enfocado en
              crear soluciones eficientes, escalables y con excelente experiencia de usuario.
            </p>
          </div>

          {/* Tarjeta de experiencia */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
            <div className="card p-4 sm:p-8 flex flex-col items-center justify-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-2">Tecnologias</h2>
            </div>
            <div className="card p-4 sm:p-8 lg:col-span-3">
              <div className="w-full h-auto sm:h-64 relative flex flex-col items-center justify-center">
                {/* Fondo React solo en desktop */}
                <div className="hidden sm:block absolute inset-0">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="Tecnologías"
                    fill
                    className="object-contain opacity-10"
                  />
                </div>
                {/* Grid de tecnologías siempre visible y sin superposición en móvil */}
                <div className="relative z-10 grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-8 w-full justify-items-center">
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" width={50} height={50} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width={50} height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de experiencia */}
      <section
        ref={expRef}
        id="experiencia"
        className={`py-10 sm:py-16 bg-black transition-all duration-500 ease-out ${
          expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Experiencia Laboral</h2>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              date="JUL 2023 -"
              title="MODERADOR DE RECURSOS DIDÁCTICOS  BECA UTN FRCU"
              subtitle="Becario"
              description="Confección de cursos para el sitio E-learning dedicado al aprendizaje en línea de diferentes sistemas computacionales."
            >
              
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Creacion de contenido utilizando herramientas del Google Suite</li>
                <li>Gestion de tareas con Trello y Gantt</li>
                <li>Modalidad Scrum con sprint semanales</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="AGO 2021"
              title="ADMINISTRACIÓN DE ESTABLECIMIENTO DEPORTIVO "
              subtitle="Encargado"
              description="Control del servicio del establecimiento"
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>
                  Gestion de pagos y cobros, control de ingresos y egresos, atención al cliente.
                </li>
                <li>
                  Gestion de redes sociales, creación de contenido y promoción del establecimiento.
                </li>
                <li>
                 Gestion del mantenimiento del establecimiento, coordinación de actividades y eventos deportivos.
                </li>
                
              </ul>
            </TimelineItem>

            <TimelineItem
              date="SEP 2020"
              title="AUXILIAR DE DEPÓSITO  JACQUET HNOS. S.A "
              subtitle="Auxiliar"
              description="Control de stock y distribución de productos"
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Organizar depósito de materiales y productos para la construcción.</li>
                <li>Recepción y entrega de mercadería.</li>
                <li>Experiencia en
                    sistemas ApolloGes de stock y registro de remitos.
                </li>
              </ul>
            </TimelineItem>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold my-8 sm:my-12 text-center">Educación</h2>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              date="2022-2026"
              title="INGENIERIA EN SISTEMAS DE INFORMACIÓN"
              subtitle="Universidad Tecnológica Nacional"
              description="Especialización en planificar, dirigir, ejecutar y controlar el revelamiento, análisis, diseño, desarrollo, prueba, implementación y mantenimiento de sistemas de información y de software."
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Gestionar proyectos de tecnología.</li>
                <li> Adaptarse a las nuevas tecnologías y tendencias.</li>
                <li>Resolver problemas de manera eficiente y creativa.</li>
                <li>Fundamentos de programación y algoritmos</li>
                <li>Bases de datos relacionales y no relacionales</li>
                <li>Desarrollo fullstack</li>
                <li>Patrones de diseño de software</li>
                <li>Metodologías ágiles (Scrum, Kanban)</li>
                <li>Arquitectura de software</li>
              </ul>
            </TimelineItem>

            
          </div>
        </div>
      </section>

      {/* Sección de proyectos */}
      <section
        ref={proyRef}
        id="proyectos"
        className={`py-10 sm:py-16 bg-[#050a14] transition-all duration-500 ease-out ${
          proyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Proyectos</h2>
          <p className="text-white/60 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Encuentra algunos de los proyectos que he desarrollado tanto de manera independiente como en equipo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProjectCard
              title="Leonides Floreria"
              subtitle="Sitio web de comercio de flores"
              description="Sitio web construido en next.js con react y tailwind css, que permite ver productos de una tienda flores y plantas con un sistema de gestión de contacto via email o Whatsapp."
              image="/assets/projects/leonides.png"
              technologies="Next.js, React, Tailwind CSS"
              demoUrl="https://leonidesfloreria.vercel.app/"
              
            />

            <ProjectCard
              title="Jempa TV"
              subtitle="Aplicacion Web"
              description="Aplicacion web de seguimiento de series y peliculas desarrollada en grupo, con sistema de gestión de usuarios, busqueda, calificacion y watchlist de peliculas."
              image="/assets/projects/jempatv.png"
              technologies="C#, ASP.NET Core, Entity Framework, SQL Server, Angular"
              codeUrl="https://github.com/DesarrolloSoftware2024-JEMPA/JempaTV.git"
            />

            <ProjectCard
              title="Vinoteca personal"
              subtitle="Pagina web de vinos para mi base de datos personal"
              description="Pagina que muestra los productos de mi base de datos ordenados por categorias, muestra calificaciones y ranking de los productos."
              image="/assets/projects/vinos.png"
              technologies="HTML, CSS, JavaScript, PostgreSQL, Express.js"
              codeUrl="https://github.com/AaronTournoud/WinesVibes.git"
            />

            <ProjectCard
              title="Driver tracker"
              subtitle="Sitio web para seguimiento de sesiones en vivo de formula 1"
              description="Sitio web que diseña un mapa interactivo de los circuitos de formula 1, con seguimiento en vivo de las sesiones de clasificacion y carrera. Apartir de la conexion a un Endpoint oficial de la formula 1 y la creacion de un WebSocket para el envio al frontend de los datos en tiempo real."
              image="/assets/projects/drivertracker.png"
              technologies="Next.js, React, Tailwind CSS"
              
            />

            
          </div>
        </div>
      </section>

      
      {/* Sección de contacto */}
      <section
        ref={contactoRef}
        id="contacto"
        className={`py-10 sm:py-16 bg-[#050a14] transition-all duration-500 ease-out ${
          contactoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contacto</h2>
          <p className="text-white/60 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? Ponte en contacto conmigo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full">
            <div className="card p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={24} />
                  <span className="text-white/80">atournoudfrcu@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-primary" size={24} />
                  <span className="text-white/80">linkedin.com/in/aarontournoud</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-primary" size={24} />
                  <span className="text-white/80">github.com/aarontournoud</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0a1428] rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-primary">Disponibilidad</h4>
                <p className="text-white/80">
                  Actualmente disponible para proyectos freelance y oportunidades de trabajo a tiempo completo.
                </p>
              </div>
            </div>

            <div className="card p-4 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary text-center sm:text-left">Envíame un mensaje</h3>
              <form
                className="space-y-4"
                action="https://formspree.io/f/xnnzverd"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                    placeholder="Asunto del mensaje"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                    placeholder="Tu mensaje"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
                  Enviar mensaje
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-white/60 text-sm sm:text-base">© {new Date().getFullYear()} Aaron Tournoud. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/AaronTournoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aarontournoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:atournoudfrcu@gmail.com" className="text-white/60 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
