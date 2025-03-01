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

    const handleScrollOrTouch = () => {
      enableAudio();
    };

    // 🔥 Try autoplay immediately for iOS and PC users
    setTimeout(enableAudio, 500);

    // 🎯 Listen for all valid user interactions
    const events = [
      "pointerdown", // Tap/click
      "click", // Click
      "touchstart", // Touch the screen
      "touchmove", // Dragging/scrolling with touch
      "wheel", // Scroll using fingers or mouse
      "keydown", // Any keyboard input
    ];
    events.forEach(event => document.addEventListener(event, enableAudio, { passive: true }));

    // 🎯 Listen for page visibility change (fixes tab switching issue)
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) enableAudio();
    });

    // 🎯 Listen for scroll movements but check for slight position changes
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) > 5) { // Small movement detected
        enableAudio();
        lastScrollY = window.scrollY;
      }
    };
    document.addEventListener("scroll", handleScroll, { passive: true });

    // 🛠 Cleanup listeners after BGM starts
    const cleanupListeners = () => {
      events.forEach(event => document.removeEventListener(event, enableAudio));
      document.removeEventListener("scroll", handleScroll);
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
