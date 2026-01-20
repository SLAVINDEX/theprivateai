"use client"

import { useEffect, useRef } from 'react'

export function DNABackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Particle class for the wave
    class Particle {
      x: number
      y: number
      baseY: number
      speed: number
      angle: number
      amplitude: number
      
      constructor(x: number, y: number) {
        this.x = x
        this.baseY = y
        this.y = y
        this.speed = 0.0008 + Math.random() * 0.0004 // Very slow speed
        this.angle = Math.random() * Math.PI * 2
        this.amplitude = 20 + Math.random() * 40
      }
      
      update(time: number) {
        this.angle += this.speed
        this.y = this.baseY + Math.sin(this.angle + this.x * 0.002 + time * 0.0003) * this.amplitude
      }
    }

    // Create wave layers
    const waveCount = 4
    const particlesPerWave = 120
    const waves: Particle[][] = []
    
    for (let w = 0; w < waveCount; w++) {
      const waveParticles: Particle[] = []
      const baseY = canvas.height * (0.5 + w * 0.12)
      
      for (let i = 0; i < particlesPerWave; i++) {
        const x = (i / particlesPerWave) * (canvas.width + 200) - 100
        waveParticles.push(new Particle(x, baseY))
      }
      waves.push(waveParticles)
    }

    const drawWaves = () => {
      // Clear with slight trail effect for smoothness
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Primary blue color
      const primaryColor = { r: 0, g: 150, b: 255 }
      
      // Update and draw each wave
      waves.forEach((waveParticles, waveIndex) => {
        const opacity = 0.6 - waveIndex * 0.12
        const particleSize = 2.5 - waveIndex * 0.4
        
        // Update particles
        waveParticles.forEach(p => p.update(time))
        
        // Draw connecting lines between particles
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity * 0.3})`
        ctx.lineWidth = 1
        
        waveParticles.forEach((p, i) => {
          if (i === 0) {
            ctx.moveTo(p.x, p.y)
          } else {
            // Smooth curve through points
            const prev = waveParticles[i - 1]
            const cpX = (prev.x + p.x) / 2
            const cpY = (prev.y + p.y) / 2
            ctx.quadraticCurveTo(prev.x, prev.y, cpX, cpY)
          }
        })
        ctx.stroke()
        
        // Draw gradient fill under the wave
        const gradient = ctx.createLinearGradient(0, canvas.height * 0.3, 0, canvas.height)
        gradient.addColorStop(0, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity * 0.08})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)
        waveParticles.forEach((p, i) => {
          if (i === 0) {
            ctx.lineTo(p.x, p.y)
          } else {
            const prev = waveParticles[i - 1]
            const cpX = (prev.x + p.x) / 2
            const cpY = (prev.y + p.y) / 2
            ctx.quadraticCurveTo(prev.x, prev.y, cpX, cpY)
          }
        })
        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Draw particles as glowing dots
        waveParticles.forEach((p) => {
          // Outer glow
          const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, particleSize * 4)
          glowGradient.addColorStop(0, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity * 0.5})`)
          glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          
          ctx.beginPath()
          ctx.fillStyle = glowGradient
          ctx.arc(p.x, p.y, particleSize * 4, 0, Math.PI * 2)
          ctx.fill()
          
          // Core dot
          ctx.beginPath()
          ctx.fillStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity})`
          ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2)
          ctx.fill()
        })
        
        // Draw connections between nearby particles
        waveParticles.forEach((p1, i) => {
          waveParticles.slice(i + 1, i + 4).forEach(p2 => {
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
            if (dist < 80) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${(1 - dist / 80) * opacity * 0.2})`
              ctx.lineWidth = 0.5
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          })
        })
      })

      // Add subtle floating particles
      for (let i = 0; i < 30; i++) {
        const px = (Math.sin(time * 0.00008 + i * 1.2) * 0.5 + 0.5) * canvas.width
        const py = (Math.cos(time * 0.00006 + i * 0.8) * 0.5 + 0.5) * canvas.height
        const size = 1 + Math.sin(time * 0.0001 + i) * 0.5
        const opacity = 0.15 + Math.sin(time * 0.0001 + i * 0.3) * 0.1
        
        ctx.beginPath()
        ctx.fillStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity})`
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fill()
      }

      time++
      animationId = requestAnimationFrame(drawWaves)
    }

    drawWaves()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(to bottom, #020617, #0a1628, #051020)' }}
      aria-hidden="true"
    />
  )
}
