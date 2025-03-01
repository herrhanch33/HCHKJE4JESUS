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
          .catch(err => console.log("🔴 Autoplay blocked:", err));
      }
    };

    // 🔥 1. Try autoplay immediately (PC + iOS should work)
    setTimeout(enableAudio, 500);  // Tiny delay to handle background loading issues

    // 🎯 2. Listen for ANY user interaction (Android Chrome fix)
    const events = ["pointerdown", "click", "touchstart", "touchmove", "scroll", "keydown"];
    events.forEach(event => document.addEventListener(event, enableAudio, { passive: true }));

    // 🔄 3. Detect when tab becomes visible (Chrome sometimes blocks autoplay when tab is in background)
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) enableAudio();
    });

    // 🛠 Cleanup listeners after BGM starts
    const cleanupListeners = () => {
      events.forEach(event => document.removeEventListener(event, enableAudio));
      document.removeEventListener("visibilitychange", enableAudio);
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
