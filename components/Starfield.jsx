'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const STAR_COUNT = 1000
const STAR_SIZE = 0.0045
const STAR_SPEED = 0.005
const TRAIL_LENGTH = 6

export default function StarfieldBackground() {
    const canvasRef = useRef(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let stars = []
        let animationFrameId

        const createStars = () => {
            stars = []
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * 2 - 1,
                    y: Math.random() * 2 - 1,
                    z: Math.random(),
                    size: Math.random() * STAR_SIZE,
                    trail: [],
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

            stars.forEach(star => {
                const x = (star.x / star.z) * centerX + centerX
                const y = (star.y / star.z) * centerY + centerY
                const size = (1 - star.z) * star.size * canvas.width

                // Draw the star
                ctx.fillStyle = starColor
                ctx.beginPath()
                ctx.arc(x, y, size, 0, 2 * Math.PI)
                ctx.fill()

                // Draw the trail
                star.trail.forEach((trailPos, index) => {
                    const trailX = (trailPos.x / trailPos.z) * centerX + centerX
                    const trailY = (trailPos.y / trailPos.z) * centerY + centerY
                    const trailSize = (1 - trailPos.z) * star.size * canvas.width
                    const alpha = (TRAIL_LENGTH - index) / TRAIL_LENGTH * 0.5

                    ctx.fillStyle = `rgba(${theme === 'dark' ? '255,255,255,' : '0,0,0,'}${alpha})`
                    ctx.beginPath()
                    ctx.arc(trailX, trailY, trailSize, 0, 2 * Math.PI)
                    ctx.fill()
                })
            })
        }

        const animate = () => {
            drawStars()
            stars = stars.map(star => {
                const newZ = (star.z - STAR_SPEED + 1) % 1
                const trail = [
                    { x: star.x, y: star.y, z: star.z },
                    ...star.trail.slice(0, TRAIL_LENGTH - 1)
                ]
                return {
                    ...star,
                    z: newZ,
                    trail,
                }
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            createStars()
        }

        handleResize()
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

