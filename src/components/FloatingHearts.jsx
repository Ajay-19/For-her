import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 3 + 2,
        },
      ]);

      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, 5000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(({ id, left, size, duration }) => (
        <div
          key={id}
          className="absolute bottom-0 text-red-500 animate-float"
          style={{
            left: `${left}%`,
            fontSize: `${size}px`,
            animationDuration: `${duration}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
export default FloatingHearts;
