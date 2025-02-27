import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => console.log("🎵 BGM Playing"))
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    // Listen for user interaction events (click, touch, scroll)
    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });
    
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) { // Detect only downward scroll
        enableAudio();
        document.removeEventListener("scroll", handleScroll); // Remove event after playing
      }
      lastScrollY = window.scrollY;
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <audio ref={audioRef} loop playsInline>
      <source src="bgm.mp3" type="audio/mp3" />
      브라우저가 오디오를 지원하지 않습니다.
    </audio>
  );
};

export default BackgroundMusic;
