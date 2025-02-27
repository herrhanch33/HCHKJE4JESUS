import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.muted = false; // Ensure it's unmuted before playing
        audio.play()
          .then(() => console.log("🎵 BGM Playing"))
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    // Play music when user clicks or touches the screen
    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
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
