import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const days = [
  { name: "Rose Day", img: "/images/roseday.jpg", text: "Ninu choosantha varaku, nenu niku echina rojaa ki kuda telidhu ,thana kanate andham e prapanchamlo undhi ani, andhuke daniki ninu choopinchi dani community mothaniki update evamani chepa,Hema ani okaru vunaru, thana mundhu manam yevaram ye color lo vuna saripom ani.Happy Rose day to my beautiful rose of my life.", music: "/music/rose.mp3" },
  { name: "Propose Day", img: "/images/proposeday.jpg", text: "Jevitam lo ninu yentha santhosapetagalano telidhu gani, nuv na vala badhapadakunda vundela chuskunta, prathi nimshiam, prathi kshanam, ninu kantiki repa la kapadukunta, ne medha eega kuda vala kunda chuskunta, mirichi lo anushka ki prabhas chepinatu, oka chance esthava gundelo petukoni chuskunta, Wish you a happy propose day Banagaram", music: "/music/propose.mp3" },
  { name: "Chocolate Day", img: "/images/chocklateday.jpg", text: "Chocklate ana peru vintey, naku ne lips thapithey em gurthu ravatledhu telsaaa..? mamulga chocklate ante sweet ki symbol antaru , kani vala andhariki em telsu paapam, nijamiyna sweetness antha thamari lips loney vundhi, To my fav chocklate of the World, Wish you a happy chocklate my dear", music: "/music/chocklate.mp3" },
  { name: "Teddy Day", img: "/images/teddyday.jpg", text: "Niku teddy lu ante estamo ledho naku telidhu gani, oke vela niki estam iythe vache janmalo , chinaptnunchi nunchey ne fav teddy la putali ani vundhi, apiudu roju ne bedroom lo , nethoney undochu, nethoney adukovachu daily, wish you a happy teddy day to my loveley georgeous queen", music: "/music/teddy.mp3" },
  { name: "Promise Day", img: "/images/promiseday.jpg", text: "I promise u, that I love you in every sunrise, in every sunset, in today, tomorrow, everyday untill my last breathe, roju, rojiki prema thaguthadi relation lo ane concept telsu, andhuke rojuiki oka kotha rakhamga prempinchataniki try chestha, Wish you a happy promise day to the light of the my life ", music: "/music/promise.mp3" },
  { name: "Hug Day", img: "/images/hugday.jpg", text: "Now coming to hug, niku already chala sarlu chepi vunta bujjoda, your hug has the power to heal thousands of wounds, and it has the power to refuel me , when I am in low situations, so I always try to hold you and hug you, untill our two bodies become one, wish you a happy hug day to my valuable treasure ", music: "/music/hug.mp3" },
  { name: "Kiss Day", img: "/images/kissday.jpg", text: "The most fav action, that I wanna do with you is kiss, if there is an any kind of universe exists without time, I want to take you there and I want to kiss you forever and ever untill we both feel its hard to breathe, wish you a happy happy kiss day to the queen of my kingdom", music: "/music/kiss.mp3" },
];

const ValentineWeek = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRef = useRef(new Audio());
  const [progress, setProgress] = useState(0);

  const togglePlay = (index, music) => {
    if (playingIndex === index) {
      audioRef.current.pause();
      setPlayingIndex(null);
    } else {
      audioRef.current.src = music;
      audioRef.current.play();
      setPlayingIndex(index);
      audioRef.current.onended = () => setPlayingIndex(null);
      audioRef.current.ontimeupdate = () => {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(progress);
      };
    }
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex flex-col items-center">
      {days.map((day, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg mb-6 w-full max-w-full"
        >
          <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center space-x-6`}>
            {/* Image Card Section */}
            <motion.div
              className="relative w-1/2 overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={day.img}
                alt={day.name}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Music Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
                {/* Progress Bar */}
                <div className="mb-2 bg-gray-200/30 h-1 rounded-full backdrop-blur-sm">
                  <motion.div
                    className="bg-teal-400 h-1 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>

                {/* Play Controls */}
                <div className="flex items-center justify-center gap-4 opacity-100 transition-opacity">
                  <button className="text-white hover:text-teal-400">
                    <FaStepBackward size={18} />
                  </button>
                  
                  <button
                    onClick={() => togglePlay(index, day.music)}
                    className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                  >
                    {playingIndex === index ? (
                      <FaPause size={20} />
                    ) : (
                      <FaPlay size={20} />
                    )}
                  </button>

                  <button className="text-white hover:text-teal-400">
                    <FaStepForward size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <div className="w-1/2 mt-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {day.name}
              </h2>
              <p className="text-gray-600 text-lg text-center italic">
                {day.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ValentineWeek;
