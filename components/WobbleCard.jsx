import React, { useState, useCallback, useEffect } from 'react';

const WobbleCard = ({ children }) => {
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    const [hasHover, setHasHover] = useState(false);

    // Check if the device supports hover
    useEffect(() => {
        // Create a media query to check if the device has hover capability
        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

        // Update hasHover state based on media query
        const updateHoverability = (e) => {
            setHasHover(e.matches);
        };

        // Initial check
        updateHoverability(mediaQuery);

        // Listen for changes (e.g., when connecting/disconnecting external mouse)
        mediaQuery.addListener(updateHoverability);

        // Cleanup
        return () => {
            mediaQuery.removeListener(updateHoverability);
        };
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!hasHover) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Adjust these values to control tilt intensity
        const rotateX = (y - centerY) / 20;
        const rotateY = -(x - centerX) / 20;

        setTransform(`
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `);
    }, [hasHover]);

    const handleMouseLeave = useCallback(() => {
        if (!hasHover) return;

        setTransform(`
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `);
    }, [hasHover]);

    return (
        <div
            className={`relative transition-transform duration-200 ease-out ${hasHover ? 'cursor-pointer' : ''}`}
            style={{
                transform,
                transformStyle: hasHover ? 'preserve-3d' : 'flat',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default WobbleCard;