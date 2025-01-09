'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const STAR_COUNT = 1500
const STAR_SIZE = 0.005
const STAR_SPEED = 0.002 
export default function StarfieldBackground() {
    const canvasRef = useRef(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let stars = []

        const initCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createStars = () => {
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * 2 - 1, // Range: -1 to 1
                    y: Math.random() * 2 - 1, // Range: -1 to 1
                    z: Math.random(),
                    size: Math.random() * STAR_SIZE,
                })
            }
        }

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const bgColor = theme === 'dark' ? 'black' : 'white'
            const starColor = theme === 'dark' ? 'white' : 'black'
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const centerX = canvas.width / 2
            const centerY = canvas.height / 2

            ctx.fillStyle = starColor
            stars.forEach(star => {
                const x = (star.x / star.z) * centerX + centerX
                const y = (star.y / star.z) * centerY + centerY
                const size = (1 - star.z) * star.size * canvas.width

                ctx.beginPath()
                ctx.arc(x, y, size, 0, 2 * Math.PI)
                ctx.fill()
            })
        }

        const animate = () => {
            drawStars()
            stars = stars.map(star => ({
                ...star,
                z: (star.z - STAR_SPEED + 1) % 1
            }))
            animationFrameId = requestAnimationFrame(animate)
        }
        const handleResize = () => {
            initCanvas()
            drawStars()
        }

        initCanvas()
        createStars()
        animate()

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    )
}
