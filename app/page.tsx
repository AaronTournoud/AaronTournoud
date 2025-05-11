import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Mi Portafolio</div>
          <nav className="hidden md:flex gap-6">
            <a href="#inicio" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Inicio
            </a>
            <a href="#sobre-mi" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Sobre Mí
            </a>
            <a href="#proyectos" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Habilidades
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contacto
            </a>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hola, soy <span className="text-emerald-500">Tu Nombre</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Desarrollador web especializado en crear experiencias digitales atractivas y funcionales.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Descargar CV</Button>
                  <Button variant="outline">Contactar</Button>
                </div>
                <StaggeredChildren className="flex gap-4 mt-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </StaggeredChildren>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.3} className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Foto de perfil"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-white shadow-lg dark:border-gray-800"
                  priority
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mí</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Soy un desarrollador web apasionado por crear soluciones digitales que combinen diseño atractivo y
                  funcionalidad.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection
                direction="right"
                delay={0.3}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Imagen sobre mí"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </AnimatedSection>
              <div className="flex flex-col justify-center space-y-4">
                <StaggeredChildren>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Experiencia</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Con más de X años de experiencia en desarrollo web, he trabajado en diversos proyectos que van
                      desde sitios corporativos hasta aplicaciones web complejas.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Educación</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Graduado en [Tu Carrera] de [Tu Universidad], complementado con formación continua en tecnologías
                      web modernas.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Intereses</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Además del desarrollo web, me apasiona [tus intereses], lo que me ayuda a mantener una perspectiva
                      fresca y creativa.
                    </p>
                  </div>
                </StaggeredChildren>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-16">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Proyectos</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Una selección de los proyectos en los que he trabajado recientemente.
                </p>
              </div>
            </AnimatedSection>
            <StaggeredChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-950 dark:border-gray-800"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Proyecto ${project}`}
                      width={600}
                      height={400}
                      className="object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Proyecto {project}</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Descripción breve del proyecto, tecnologías utilizadas y resultados obtenidos.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Github className="h-4 w-4" />
                        Código
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Habilidades</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tecnologías y herramientas con las que trabajo.
                </p>
              </div>
            </AnimatedSection>
            <StaggeredChildren
              className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4"
              staggerDelay={0.05}
            >
              {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git"].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md transition-all"
                >
                  <div className="h-12 w-12 mb-4 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-700">
                    {/* Aquí irían los iconos de cada tecnología */}
                  </div>
                  <h3 className="text-lg font-medium">{skill}</h3>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ¿Interesado en trabajar juntos? Ponte en contacto conmigo.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <AnimatedSection direction="left" className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-emerald-500" />
                  <span>tuemail@ejemplo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-6 w-6 text-emerald-500" />
                  <span>linkedin.com/in/tunombre</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-6 w-6 text-emerald-500" />
                  <span>github.com/tunombre</span>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <Button className="w-full">Enviar mensaje</Button>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6 dark:bg-gray-950 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <AnimatedSection direction="up" className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
              </p>
            </div>
            <StaggeredChildren className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </StaggeredChildren>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
