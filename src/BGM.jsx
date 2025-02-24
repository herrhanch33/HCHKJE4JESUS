import React, { useState, useRef } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => console.error("Playback blocked:", error));
    }
  };

  return (
    <div className="bgm-overlay">
      {!isPlaying && (
        <button className="play-btn" onClick={handlePlay}>
          🎵 음악 재생하기
        </button>
      )}
      <audio ref={audioRef} loop>
        <source src="bgm.mp3" type="audio/mp3" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
