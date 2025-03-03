
import React, { useState, useEffect } from "react";
import { FileText, FileArchive, FilePlus, File } from "lucide-react";

const AnimatedBackground = () => {
  const [icons, setIcons] = useState<{ id: number; x: number; y: number; icon: string; size: number; opacity: number; speed: number }[]>([]);

  useEffect(() => {
    // Create initial set of floating document icons
    const newIcons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: ["FileText", "FileArchive", "FilePlus", "File"][Math.floor(Math.random() * 4)],
      size: Math.random() * 20 + 10, // Size between 10-30px
      opacity: Math.random() * 0.2 + 0.05, // Low opacity between 0.05-0.25
      speed: Math.random() * 0.5 + 0.2, // Movement speed
    }));
    setIcons(newIcons);

    // Animation loop
    const animationInterval = setInterval(() => {
      setIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          y: (icon.y + icon.speed) % 100, // Move down and wrap around
          x: icon.x + (Math.sin(icon.y / 10) * 0.2), // Slight horizontal movement
        }))
      );
    }, 100);

    return () => clearInterval(animationInterval);
  }, []);

  // Map icon string to component
  const getIconComponent = (iconName: string, size: number) => {
    switch (iconName) {
      case "FileText": return <FileText size={size} />;
      case "FileArchive": return <FileArchive size={size} />;
      case "FilePlus": return <FilePlus size={size} />;
      default: return <File size={size} />;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="absolute transition-transform duration-300 ease-in-out"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            opacity: icon.opacity,
            color: 'var(--primary)',
          }}
        >
          {getIconComponent(icon.icon, icon.size)}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
