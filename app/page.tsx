"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { TimelineItem } from "@/components/timeline-item"
import { ProjectCard } from "@/components/project-card"
import { SkillItem } from "@/components/skill-item"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white grid-background">
      <Navigation />

      {/* Sección de inicio */}
      <section id="inicio" className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tarjeta de perfil */}
            <div className="card p-8 flex flex-col items-center text-center">
              <div className="mb-6 relative w-48 h-48 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Aaron Tournoud"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold mb-2">Aaron Tournoud</h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-primary">⟵</span>
                <span className="text-xl text-white/80">Desarrollador Web</span>
                <span className="text-primary">⟶</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/aarontournoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/aarontournoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:aaron.tournoud@ejemplo.com"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Tarjeta de redes */}
            <div className="card p-8 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold mb-8 text-white/80">Redes</h2>
              <div className="grid grid-cols-2 gap-6">
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
                  href="mailto:aaron.tournoud@ejemplo.com"
                  className="flex flex-col items-center text-white/60 hover:text-primary transition-colors"
                >
                  <Mail size={40} />
                  <span className="mt-2">Email</span>
                </a>
                <a href="#" className="flex flex-col items-center text-white/60 hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="mt-2">Portfolio</span>
                </a>
              </div>
            </div>

            {/* Tarjeta de CV */}
            <div className="card p-8 flex flex-col justify-center items-center">
              <div className="w-full h-48 relative mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="CV Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <a
                href="/cv-aaron-tournoud.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>
          </div>

          {/* Tarjeta de descripción */}
          <div className="card p-8 mt-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">Desarrollador Full-Stack</h2>
            <p className="text-white/80 text-lg">
              Desarrollador Full-Stack con experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web.
              Especializado en tecnologías modernas como React, Next.js, Node.js y bases de datos SQL/NoSQL. Enfocado en
              crear soluciones eficientes, escalables y con excelente experiencia de usuario.
            </p>
          </div>

          {/* Tarjeta de experiencia */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
            <div className="card p-8 flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold text-primary mb-2">+3</h2>
              <p className="text-white/80">años de experiencia</p>
            </div>

            <div className="card p-8 lg:col-span-3">
              <div className="w-full h-64 relative">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="Tecnologías"
                  fill
                  className="object-contain opacity-10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML5"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS3"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      alt="MySQL"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      alt="Tailwind CSS"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de experiencia */}
      <section id="experiencia" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experiencia Laboral</h2>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              date="JULIO 2022"
              title="NE Training"
              subtitle="Desarrollador Full Stack - Presencial - Mendoza, Argentina"
              description="Plataforma de entrenamientos personalizados"
            >
              <p className="text-white/80 mb-4">
                Desarrollo y mantenimiento de plataforma (SaaS) y aplicación web de entrenamientos personalizados.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Modelado y optimización de Base de Datos.</li>
                <li>Desarrollo de backend escalable utilizando patrones de diseño.</li>
                <li>Desarrollo y optimización del frontend amigable, minimalista y eficaz.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="ABRIL 2021"
              title="Freelance"
              subtitle="Desarrollador Full Stack - Remoto"
              description="Desarrollo y mantenimiento plataformas web"
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>
                  <span className="font-medium">Club Mentor AD</span>, landing page autoadministrable, hecha con Laravel
                  - MySQL - Inertia - React - Typescript
                </li>
                <li>
                  <span className="font-medium">AyePaty</span>, Plataforma web de poductos de belleza con blog, hecha
                  con Laravel - Livewire - MySql
                </li>
                <li>
                  <span className="font-medium">Recicanje</span>, Red Social orientada a la cultura del reciclaje, hecha
                  con Astro - React - MongoDB - Firebase
                </li>
                <li>
                  <span className="font-medium">Gestion de pagos</span> para un equipo de futbol, hecha con React -
                  Nodejs - Firebase - MySql
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="ENERO 2020"
              title="Agencia Digital"
              subtitle="Desarrollador Frontend - Remoto"
              description="Desarrollo de interfaces de usuario para aplicaciones web"
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Implementación de diseños responsivos utilizando HTML, CSS y JavaScript.</li>
                <li>Desarrollo de componentes reutilizables con React.</li>
                <li>Optimización de rendimiento y accesibilidad web.</li>
              </ul>
            </TimelineItem>
          </div>

          <h2 className="text-4xl font-bold my-12 text-center">Educación</h2>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              date="2018-2022"
              title="Ingeniería Informática"
              subtitle="Universidad Nacional"
              description="Especialización en desarrollo de software y sistemas web"
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Fundamentos de programación y algoritmos</li>
                <li>Bases de datos relacionales y no relacionales</li>
                <li>Desarrollo web full stack</li>
                <li>Arquitectura de software</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              date="2019-2022"
              title="Certificaciones"
              subtitle="Plataformas online"
              description="Formación complementaria en tecnologías web"
            >
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>AWS Certified Developer</li>
                <li>React Certification</li>
                <li>UI/UX Design Fundamentals</li>
              </ul>
            </TimelineItem>
          </div>
        </div>
      </section>

      {/* Sección de proyectos */}
      <section id="proyectos" className="py-16 bg-[#050a14]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Proyectos</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Encuentra algunos de los proyectos que he desarrollado tanto de manera independiente como en equipo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="NE Training"
              subtitle="Plataforma de entrenamientos personalizados"
              description="Plataforma de entrenamientos personalizados construida con Laravel, Inertia, React + TS, MySQL."
              image="/placeholder.svg?height=400&width=600"
              technologies="Laravel, Inertia, React, TypeScript, MySQL"
              demoUrl="#"
              codeUrl="#"
            />

            <ProjectCard
              title="Recicanje"
              subtitle="Red Social"
              description="Red social construida con Astro que permite operaciones CRUD para los usuarios, publicaciones y más."
              image="/placeholder.svg?height=400&width=600"
              technologies="Astro, React, MongoDB, Firebase"
              demoUrl="#"
              codeUrl="#"
            />

            <ProjectCard
              title="Club Mentor AD"
              subtitle="Landing Page"
              description="Landing page autoadministrable para club deportivo con sistema de gestión de contenidos."
              image="/placeholder.svg?height=400&width=600"
              technologies="Laravel, MySQL, Inertia, React, TypeScript"
              demoUrl="#"
              codeUrl="#"
            />

            <ProjectCard
              title="AyePaty"
              subtitle="E-commerce"
              description="Plataforma web de productos de belleza con blog integrado y sistema de gestión de inventario."
              image="/placeholder.svg?height=400&width=600"
              technologies="Laravel, Livewire, MySQL"
              demoUrl="#"
              codeUrl="#"
            />

            <ProjectCard
              title="Gestión de Pagos"
              subtitle="Aplicación Web"
              description="Sistema de gestión de pagos para un equipo de fútbol con reportes y notificaciones."
              image="/placeholder.svg?height=400&width=600"
              technologies="React, Node.js, Firebase, MySQL"
              demoUrl="#"
              codeUrl="#"
            />

            <ProjectCard
              title="Portfolio Personal"
              subtitle="Sitio Web"
              description="Portfolio personal desarrollado con Next.js y Tailwind CSS para mostrar proyectos y habilidades."
              image="/placeholder.svg?height=400&width=600"
              technologies="Next.js, Tailwind CSS, Framer Motion"
              demoUrl="#"
              codeUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Sección de habilidades */}
      <section id="habilidades" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Habilidades</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo.
          </p>

          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-8 text-primary">Frontend</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              <SkillItem
                name="HTML5"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <SkillItem name="CSS3" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <SkillItem
                name="JavaScript"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <SkillItem
                name="TypeScript"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <SkillItem
                name="React"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <SkillItem
                name="Next.js"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
              <SkillItem
                name="Tailwind"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
              <SkillItem
                name="Bootstrap"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <SkillItem name="SASS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            </div>
          </div>

          <div className="card p-8 mt-8">
            <h3 className="text-2xl font-bold mb-8 text-primary">Backend</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              <SkillItem
                name="Node.js"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <SkillItem
                name="Express"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <SkillItem name="PHP" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
              <SkillItem
                name="Laravel"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
              />
              <SkillItem
                name="MySQL"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              />
              <SkillItem
                name="MongoDB"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <SkillItem
                name="Firebase"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              />
              <SkillItem
                name="PostgreSQL"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
            </div>
          </div>

          <div className="card p-8 mt-8">
            <h3 className="text-2xl font-bold mb-8 text-primary">Herramientas</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              <SkillItem name="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <SkillItem
                name="GitHub"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <SkillItem
                name="VS Code"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
              <SkillItem
                name="Figma"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              />
              <SkillItem
                name="Docker"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              />
              <SkillItem
                name="AWS"
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contacto" className="py-16 bg-[#050a14]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Contacto</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? Ponte en contacto conmigo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={24} />
                  <span className="text-white/80">aaron.tournoud@ejemplo.com</span>
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

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Envíame un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[#0a1428] border border-[#1e2a3b] rounded-md text-white focus:outline-none focus:border-primary"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary flex items-center gap-2">
                  Enviar mensaje
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© {new Date().getFullYear()} Aaron Tournoud. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/aarontournoud"
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
            <a href="mailto:aaron.tournoud@ejemplo.com" className="text-white/60 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
