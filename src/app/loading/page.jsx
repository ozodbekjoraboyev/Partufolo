"use client";
import { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particles = [];
    const numParticles = 500;
    const sphereRadius = 200;
    const fLen = 320;
    let angle = 0;

    const createParticle = () => {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      return {
        x: sphereRadius * Math.sin(phi) * Math.cos(theta),
        y: sphereRadius * Math.sin(phi) * Math.sin(theta),
        z: sphereRadius * Math.cos(phi),
      };
    };

    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angle += 0.01;
      const sinAngle = Math.sin(angle);
      const cosAngle = Math.cos(angle);

      particles.forEach((p) => {
        const rotX = cosAngle * p.x + sinAngle * p.z;
        const rotZ = -sinAngle * p.x + cosAngle * p.z;
        const m = fLen / (fLen - rotZ);
        const projX = rotX * m + canvas.width / 2;
        const projY = p.y * m + canvas.height / 2;

        ctx.fillStyle = "rgba(70, 255, 140, 0.8)";
        ctx.beginPath();
        ctx.arc(projX, projY, m * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      
      <canvas ref={canvasRef} width={1400} height={700} className="absolute top-0 left-0 w-full h-full" />
      
      <div className="absolute text-center">
        <p className="text-2xl cursor-pointer transition-all duration-300 hover:text-green-600 hover:scale-106">
        Hello, my name is Ozodbek.
        </p>
      
      </div>
    </div>
  );
};

export default ParticleCanvas;
