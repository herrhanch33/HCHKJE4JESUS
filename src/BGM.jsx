import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const enableAudio = () => {
      if (audio) {
        audio.muted = false;
        audio.play()
          .then(() => console.log("BGM Playing 🎵"))
          .catch((err) => console.log("Autoplay prevented:", err));
      }
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    // Ensure audio plays when user interacts (for mobile)
    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop muted playsInline>
      <source src="bgm.mp3" type="audio/mp3" />
      <source src="bgm.mp3" type="audio/ogg" />
      브라우저가 오디오를 지원하지 않습니다.
    </audio>
  );
};

export default BackgroundMusic;
