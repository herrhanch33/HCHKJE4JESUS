import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const enableAudio = () => {
      if (audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => {
            console.log("🎵 BGM Playing!");
            cleanupListeners();
          })
          .catch(err => console.log("Autoplay blocked:", err));
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 1) { // Detect even small scrolling
        enableAudio();
      }
    };

    // Add event listeners for multiple interaction types
    const events = ["pointerdown", "click", "touchstart", "keydown", "scroll"];
    events.forEach(event => document.addEventListener(event, enableAudio, { passive: true }));

    const cleanupListeners = () => {
      events.forEach(event => document.removeEventListener(event, enableAudio));
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
