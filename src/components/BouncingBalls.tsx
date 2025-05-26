import { useEffect, useRef } from 'react';

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

const BouncingBalls = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const balls = useRef<Ball[]>([]);
  const animationFrameId = useRef<number>();

  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEEAD',
    '#D4A5A5',
    '#4CAF50', // Green
    '#4CAF50', // Green
    '#4CAF50'  // Green
  ];

  const initializeBalls = (canvas: HTMLCanvasElement) => {
    balls.current = Array.from({ length: 9 }, (_, i) => ({
      x: Math.random() * (canvas.width - 50) + 25,
      y: Math.random() * (canvas.height - 50) + 25,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      radius: i >= 6 ? 15 : Math.random() * 20 + 10, // Fixed size for green balls
      color: colors[i]
    }));
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw balls
    balls.current.forEach(ball => {
      // Update position
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce off walls
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
      }

      // Draw ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();
    });

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    canvas.width = 800;  // Fixed width
    canvas.height = 600; // Fixed height

    // Initialize balls
    initializeBalls(canvas);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 p-4">
      <canvas
        ref={canvasRef}
        className="bg-black border-2 border-white rounded-lg shadow-xl"
        style={{ width: '800px', height: '600px' }}
        aria-label="Bouncing balls animation"
        role="img"
      />
    </div>
  );
};

export default BouncingBalls; 