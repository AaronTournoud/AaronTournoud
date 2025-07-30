"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar/ocultar botón de scroll hacia arriba
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Detectar sección activa
      const sections = ["inicio", "experiencia", "proyectos",  "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <nav className="flex gap-8">
            {[
              { name: "Inicio", href: "#inicio" },
              { name: "Experiencia", href: "#experiencia" },
              { name: "Proyectos", href: "#proyectos" },
              { name: "Contacto", href: "#contacto" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top">
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}
