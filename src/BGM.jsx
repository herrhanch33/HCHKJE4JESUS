import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => {
            console.log("🎵 BGM Playing");
            cleanupListeners();
          })
          .catch(err => console.log("Autoplay blocked:", err));
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 5) { // Detect small movements
        enableAudio();
      }
    };

    // Attach multiple event listeners for user interaction
    document.addEventListener("pointerdown", enableAudio, { once: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    const cleanupListeners = () => {
      document.removeEventListener("pointerdown", enableAudio);
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
