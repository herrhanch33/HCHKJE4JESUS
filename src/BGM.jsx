import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.muted = false;
        audio
          .play()
          .then(() => {
            console.log("🎵 BGM Playing");
            cleanupListeners();
          })
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    // Attach multiple event listeners for auto-play
    const events = ["pointerdown", "scroll", "keydown"];
    events.forEach(event => document.addEventListener(event, enableAudio, { passive: true }));

    // Clean up event listeners once audio starts playing
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
