import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

/**
 * ScrollReveal
 * - Usa IntersectionObserver (threshold 0.2)
 * - Dispara apenas uma vez
 * - Anima slide lateral (de x: +/-60 para 0) + opacity 0->1
 */
export default function ScrollReveal({
  direction = 'left',
  children,
  threshold = 0.2,
  className,
}) {
  const ref = useRef(null)
  const [hasRevealed, setHasRevealed] = useState(false)

  const isLeft = direction !== 'right'
  const fromX = isLeft ? -60 : 60

  useEffect(() => {
    if (!ref.current) return
    if (hasRevealed) return

    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasRevealed(true)
          observer.unobserve(el)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasRevealed, threshold])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: fromX }}
      animate={hasRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: fromX }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

