import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const hasPlayedRef = useRef(false); // Ensure it plays only once

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (!hasPlayedRef.current && audio && audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => {
            console.log("🎵 BGM Playing");
            hasPlayedRef.current = true; // Prevent further triggers
          })
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    // Allow play on user interactions
    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (!hasPlayedRef.current && Math.abs(window.scrollY - lastScrollY) > 1) { // Only 1px needed
        enableAudio();
        document.removeEventListener("scroll", handleScroll);
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
