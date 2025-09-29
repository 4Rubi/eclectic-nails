import React, { useState, useEffect, useRef } from "react";
import Polaroid from "./Polaroid";
import Sticker from "./Sticker";

const AnimatedBackground = () => {
  const [items, setItems] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateItems = () => {
      // Poisson-disc sampling implementation
      const poissonDiscSampler = (width, height, minRadius, maxRadius, k) => {
        const samples = [];
        const activeSamples = [];
        const grid = [];
        const cellSize = Math.floor(minRadius / Math.sqrt(2));
        const gridWidth = Math.ceil(width / cellSize);
        const gridHeight = Math.ceil(height / cellSize);

        for (let i = 0; i < gridWidth * gridHeight; i++) {
          grid.push(null);
        }

        const addSample = (sample) => {
          samples.push(sample);
          activeSamples.push(sample);
          const gridX = Math.floor(sample.x / cellSize);
          const gridY = Math.floor(sample.y / cellSize);
          grid[gridX + gridY * gridWidth] = sample;
        };

        // Start with a random sample
        addSample({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (maxRadius - minRadius) + minRadius,
        });

        while (activeSamples.length > 0) {
          const randomIndex = Math.floor(Math.random() * activeSamples.length);
          const currentSample = activeSamples[randomIndex];

          let found = false;
          for (let i = 0; i < k; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius =
              Math.random() * currentSample.radius + currentSample.radius;
            const newX = currentSample.x + Math.cos(angle) * radius;
            const newY = currentSample.y + Math.sin(angle) * radius;
            const newRadius =
              Math.random() * (maxRadius - minRadius) + minRadius;

            if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
              const gridX = Math.floor(newX / cellSize);
              const gridY = Math.floor(newY / cellSize);
              let tooClose = false;

              for (let j = -2; j <= 2; j++) {
                for (let l = -2; l <= 2; l++) {
                  const neighborX = gridX + j;
                  const neighborY = gridY + l;
                  if (
                    neighborX >= 0 &&
                    neighborX < gridWidth &&
                    neighborY >= 0 &&
                    neighborY < gridHeight
                  ) {
                    const neighbor = grid[neighborX + neighborY * gridWidth];
                    if (neighbor) {
                      const dist = Math.hypot(
                        newX - neighbor.x,
                        newY - neighbor.y
                      );
                      if (dist < (newRadius + neighbor.radius) / 2) {
                        tooClose = true;
                        break;
                      }
                    }
                  }
                }
                if (tooClose) break;
              }

              if (!tooClose) {
                addSample({ x: newX, y: newY, radius: newRadius });
                found = true;
              }
            }
          }

          if (!found) {
            activeSamples.splice(randomIndex, 1);
          }
        }
        return samples;
      };

      const canvasWidth = window.innerWidth * 2;
      const canvasHeight = window.innerHeight * 2;

      // Generate points for polaroids using Poisson Disc Sampling
      const polaroidPoints = poissonDiscSampler(
        canvasWidth,
        canvasHeight,
        100,
        250,
        30
      );

      const polaroids = polaroidPoints.map((point, i) => ({
        id: `p-${i}`,
        type: "polaroid",
        x: point.x,
        y: point.y,
        rotation: Math.random() * 90 - 45, // Increased rotation
        scale: 1,
        width: point.radius,
        height: point.radius * 1.2,
      }));

      // Generate stickers near polaroids
      const stickers = [];
      polaroidPoints.forEach((point, i) => {
        if (Math.random() > 0.5) {
          // 50% chance to add a sticker near a polaroid
          const size = Math.floor(Math.random() * 40) + 20;
          const angle = Math.random() * 2 * Math.PI;
          const dist = Math.random() * 100 + 50;
          stickers.push({
            id: `s-${i}`,
            type: "sticker",
            x: point.x + Math.cos(angle) * dist,
            y: point.y + Math.sin(angle) * dist,
            rotation: Math.random() * 90 - 45,
            scale: 1,
            width: size,
            height: size,
          });
        }
      });

      const allItems = [...polaroids, ...stickers].sort(
        () => Math.random() - 0.5
      );
      setItems(allItems);
    };

    generateItems();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY / 20; // Adjust this value to change rotation speed
      const translateX = scrollY / 10; // Adjust this value to change translation speed
      if (canvasRef.current) {
        canvasRef.current.style.transform = `rotate(${rotation}deg) translate(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="animated-background">
      <div className="canvas" ref={canvasRef}>
        {items.map((item) => {
          const style = {
            position: "absolute",
            top: `${item.y}px`,
            left: `${item.x}px`,
            transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
            width: `${item.width}px`,
            height: `${item.height}px`,
          };
          if (item.type === "polaroid") {
            return <Polaroid key={item.id} style={style} />;
          }
          return <Sticker key={item.id} style={style} />;
        })}
      </div>
    </div>
  );
};

export default AnimatedBackground;
