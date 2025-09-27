import React, { useState, useEffect, useRef } from "react";
import Polaroid from "./Polaroid";
import Sticker from "./Sticker";

const AnimatedBackground = () => {
  const [items, setItems] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateItems = () => {
      const newItems = [];
      const canvasWidth = window.innerWidth * 2;
      const canvasHeight = window.innerHeight * 2;
      const attempts = 200; // Attempt to place 200 items

      for (let i = 0; i < attempts; i++) {
        let isOverlapping = false;
        const type = Math.random() > 0.3 ? "polaroid" : "sticker";
        const size =
          type === "polaroid"
            ? Math.floor(Math.random() * 150) + 100 // Polaroid size between 100px and 250px
            : Math.floor(Math.random() * 50) + 30; // Sticker size between 30px and 80px

        const item = {
          id: i,
          type,
          x: Math.random() * (canvasWidth - size),
          y: Math.random() * (canvasHeight - size),
          rotation: Math.random() * 90 - 45,
          scale: 1,
          width: size,
          height: type === "polaroid" ? size * 1.2 : size,
        };

        // Basic collision detection with overlap allowance
        const overlapMargin = 100; // Allow 30px of overlap
        for (const existingItem of newItems) {
          if (
            item.x < existingItem.x + existingItem.width - overlapMargin &&
            item.x + item.width > existingItem.x + overlapMargin &&
            item.y < existingItem.y + existingItem.height - overlapMargin &&
            item.y + item.height > existingItem.y + overlapMargin
          ) {
            isOverlapping = true;
            break;
          }
        }

        if (!isOverlapping) {
          newItems.push(item);
        }
      }
      setItems(newItems);
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
