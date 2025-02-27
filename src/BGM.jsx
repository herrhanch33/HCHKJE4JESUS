import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => {
            console.log("🎵 BGM Playing via Scroll");
            cleanupListeners();
          })
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 10) { // Detect small scroll movements
        enableAudio();
      }
      lastScrollY = currentScrollY;
    };

    // Attach event listeners for scroll-based auto-play
    document.addEventListener("scroll", handleScroll, { passive: false });

    // Clean up event listeners once audio starts playing
    const cleanupListeners = () => {
      document.removeEventListener("scroll", handleScroll);
    };

    return cleanupListeners;
  }, []);

  return (
    <audio ref={audioRef} loop playsInline>
      <source src="bgm.mp3" type="audio/mp3" />
      브라우저가 오디오를 지원하지 않습니다.
    </audio>
  );
};

export default BackgroundMusic;
