import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aaron Tournoud | Ingeniero en sistemas de información (Estudiante avanzado)",
  description: "Portafolio profesional de Aaron Tournoud con proyectos y habilidades en desarrollo web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" href="/icon.png" />

        <meta property="og:title" content="Mi Portafolio - Aaron Tournoud" />
        <meta property="og:description" content="Portafolio profesional de Aaron Tournoud con proyectos y habilidades en desarrollo web" />
        <meta property="og:image" content="https://aaron-tournoud.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://aaron-tournoud.vercel.app" />
        <meta property="og:type" content="website" />
</head>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
