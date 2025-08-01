import { useEffect, useRef, useState } from "react"

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, options)
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView] as const
}