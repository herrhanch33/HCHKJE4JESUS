import React, { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && !isPlaying) {
        audio.muted = false;
        audio.play()
          .then(() => {
            console.log("BGM Playing 🎵");
            setIsPlaying(true);
          })
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    // Listen for user interaction to start audio
    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, [isPlaying]);

  return (
    <>
      {/* Button for users to manually start music (fallback) */}
      {!isPlaying && (
        <button onClick={() => audioRef.current?.play()} style={{
          position: "fixed", bottom: "20px", right: "20px", padding: "10px 20px", 
          background: "#FF85A1", color: "white", border: "none", borderRadius: "5px",
          zIndex: 9999, fontSize: "16px"
        }}>
          🔊 배경 음악 재생
        </button>
      )}

      <audio ref={audioRef} loop playsInline>
        <source src="bgm.mp3" type="audio/mp3" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
    </>
  );
};

export default BackgroundMusic;
