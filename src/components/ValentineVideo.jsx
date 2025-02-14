const ValentineVideo = () => {
  return (
    <div className="relative p-6">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">
        💘 Valentine’s Special 💘
      </h2>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="./vedio/vedio2.mp4"
          title="Valentine’s Day"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
      {/* Falling hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="heart absolute text-pink-500 animate-fall"
            style={{
              fontSize: `${Math.random() * 10 + 20}px`, // Random size between 20px to 30px
              left: `${Math.random() * 100}%`, // Random horizontal position
              animationDuration: `${4 + Math.random() * 4}s`, // Random fall duration
              animationDelay: `${Math.random() * 5}s`, // Random delay before start
            }}
          >
            💘
          </span>
        ))}
      </div>
    </div>
  );
};

export default ValentineVideo;
