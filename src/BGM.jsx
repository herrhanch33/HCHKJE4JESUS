import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.muted = false;
        audio.play()
          .then(() => {
            console.log("🎵 BGM Playing via Position Change");
            cleanupListeners();
          })
          .catch(err => console.log("Autoplay prevented:", err));
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        enableAudio();
      }
    }, { threshold: 0.1 });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    const cleanupListeners = () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };

    return cleanupListeners;
  }, []);

  return (
    <>
      <div ref={triggerRef} style={{ position: "absolute", top: "200px", width: "1px", height: "1px" }}></div>
      <audio ref={audioRef} loop playsInline>
        <source src="bgm.mp3" type="audio/mp3" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
    </>
  );
};

export default BackgroundMusic;
