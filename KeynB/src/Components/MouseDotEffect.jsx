// Components/MouseDotEffect.jsx
import { useEffect, useRef, useCallback } from 'react';
import './MouseDotEffect.css';

const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
const NUM_DOTS = 50;
const INTERACTION_DISTANCE = 300; // Distance for lines to appear

const MouseDotEffect = ({ children }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const dotsRef = useRef([]); // Use a ref to store dots, avoiding state updates during drawing
    const ctx = useRef(null);

    // Function to draw all dots (reads from dotsRef)
    const drawDots = useCallback(() => {
        if (!ctx.current || !canvasRef.current) return;
        ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        dotsRef.current.forEach(dot => {
            ctx.current.fillStyle = dot.color;
            ctx.current.beginPath();
            ctx.current.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.current.fill();
        });
    }, []); // No dependencies needed as it reads from ref

    // Function to initialize dots (updates dotsRef)
    const initializeDots = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const newDots = [];
        for (let i = 0; i < NUM_DOTS; i++) {
            newDots.push({
                x: Math.floor(Math.random() * canvas.width),
                y: Math.floor(Math.random() * canvas.height),
                size: Math.random() * 3 + 5,
                color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
            });
        }
        dotsRef.current = newDots; // Update the ref, not state
    }, []); // No dependencies needed as it doesn't rely on external state/props that change frequently

    // Mouse move handler
    const handleMouseMove = useCallback((event) => {
        if (!ctx.current || !canvasRef.current || !containerRef.current) return;

        drawDots(); // Redraw dots
        const containerRect = containerRef.current.getBoundingClientRect();
        let mouse = {
            x: event.clientX - containerRect.left,
            y: event.clientY - containerRect.top
        };

        dotsRef.current.forEach(dot => { // Read from dotsRef
            let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
            if (distance < INTERACTION_DISTANCE) {
                ctx.current.strokeStyle = dot.color;
                ctx.current.lineWidth = 1;
                ctx.current.beginPath();
                ctx.current.moveTo(dot.x, dot.y);
                ctx.current.lineTo(mouse.x, mouse.y);
                ctx.current.stroke();
            }
        });
    }, [drawDots]); // drawDots is a useCallback, so it's stable

    // Mouse out handler
    const handleMouseOut = useCallback(() => {
        if (!ctx.current || !canvasRef.current) return;
        drawDots();
    }, [drawDots]);

    // Effect for initial setup and attaching event listeners
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (canvas && container) {
            ctx.current = canvas.getContext('2d');

            // Set canvas size
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;

            initializeDots(); // Initialize dots here on mount
            drawDots();       // Initial draw

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            // Cleanup: remove event listeners when component unmounts
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseout', handleMouseOut);
            }
        };
    }, [initializeDots, drawDots, handleMouseMove, handleMouseOut]); // These are useCallback functions, so they are stable

    // Effect for re-initializing dots and resizing on window resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (canvas && container) {
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
                initializeDots(); // Re-initialize dots for new dimensions
                drawDots();       // Redraw for new dimensions
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [initializeDots, drawDots]); // initializeDots and drawDots are stable Callbacks

    return (
        <div
            className="mouse-effect-container"
            ref={containerRef}
        >
            <canvas id="dotsCanvas" ref={canvasRef}></canvas>
            {children}
        </div>
    );
};

export default MouseDotEffect;