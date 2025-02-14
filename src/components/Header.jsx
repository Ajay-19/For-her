import { useState, useEffect } from "react";

const Header = () => {
  const [isRed, setIsRed] = useState(true);

  // Automatically toggle color every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prev) => !prev);
    }, 1000); // Changes color every second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-10 bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200 p-5 flex items-center justify-between transition-all">
      <h1
        className="text-4xl font-bold text-pink-600 tracking-wide drop-shadow-md"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >Nelluru Hema Sree</h1>
      <button className="text-5xl transition-transform transform hover:scale-110 active:scale-95">
        <span
          className={`animate-heartbeat transition-colors duration-500`}
        >
          {isRed ? "❤️" : "💙"}
        </span>
      </button>
    </header>
  );
};

export default Header;
