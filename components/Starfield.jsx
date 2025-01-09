'use client'

import { useEffect, useRef, useMemo } from 'react'
import { useTheme } from 'next-themes'

const STAR_COUNT = 1500
const STAR_SIZE_RANGE = { min: 0.001, max: 0.004 }
const STAR_SPEED_RANGE = { min: 0.0015, max: 0.003 }
const TRAIL_LENGTH = 3


const createStars = () => {
    return Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        z: Math.random(),
        size: Math.random() * (STAR_SIZE_RANGE.max - STAR_SIZE_RANGE.min) + STAR_SIZE_RANGE.min,
        speed: Math.random() * (STAR_SPEED_RANGE.max - STAR_SPEED_RANGE.min) + STAR_SPEED_RANGE.min,
        trail: [],
    }))
}

const StarfieldBackground = () => {
    const canvasRef = useRef (null)
    const animationFrameId = useRef(0)
    const { theme } = useTheme()

    const stars = useMemo(() => createStars(), [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const bgColor = theme === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            const starColor = theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const centerX = canvas.width / 2
            const centerY = canvas.height / 2

            stars.forEach(star => {
                const x = (star.x / star.z) * centerX + centerX
                const y = (star.y / star.z) * centerY + centerY
                const size = (1 - star.z) * star.size * canvas.width

                // Draw trail
                ctx.beginPath()
                star.trail.forEach((point, index) => {
                    const opacity = (index + 1) / TRAIL_LENGTH * 0.5
                    ctx.strokeStyle = `rgba(${starColor === 'rgb(255, 255, 255)' ? '255, 255, 255,' : '0, 0, 0,'} ${opacity})`
                    ctx.lineWidth = size * (index + 1) / TRAIL_LENGTH
                    if (index === 0) {
                        ctx.moveTo(point.x, point.y)
                    } else {
                        ctx.lineTo(point.x, point.y)
                    }
                })
                ctx.stroke()


                ctx.fillStyle = starColor
                ctx.beginPath()
                ctx.arc(x, y, size, 0, 2 * Math.PI)
                ctx.fill()

                star.trail.unshift({ x, y })
                if (star.trail.length > TRAIL_LENGTH) {
                    star.trail.pop()
                }
            })
        }

        const animate = () => {
            drawStars()
            stars.forEach(star => {
                star.z = (star.z - star.speed + 1) % 1
            })
            animationFrameId.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId.current)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [theme, stars])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000"
        />
    )
}

export default StarfieldBackground

