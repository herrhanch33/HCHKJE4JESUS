import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  let lastScrollY = window.scrollY;
  let lastTouchY = null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // ✅ 1. Try to autoplay immediately (for Safari, iOS, Kakao Browser, etc.)
    const tryAutoplay = () => {
      audio.muted = false;
      audio.play()
        .then(() => {
          console.log("🎵 BGM Playing on Page Load!");
          cleanupListeners(); // Remove event listeners if autoplay works
        })
        .catch(err => {
          console.log("🔴 Autoplay blocked, waiting for user interaction:", err);
        });
    };

    tryAutoplay(); // 🔥 Attempt autoplay when page loads

    // ✅ 2. Detect any user interaction (for Android Chrome & others that block autoplay)
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

    // ✅ 3. Detect **lightest scroll** (even 1px)
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) > 1) {
        enableAudio();
      }
      lastScrollY = window.scrollY;
    };

    // ✅ 4. Detect **lightest touch & drag**
    const handleTouchMove = (event) => {
      if (lastTouchY === null) {
        lastTouchY = event.touches[0].clientY;
        return;
      }
      if (Math.abs(event.touches[0].clientY - lastTouchY) > 1) {
        enableAudio();
      }
      lastTouchY = event.touches[0].clientY;
    };

    // ✅ 5. Detect **lightest tap**
    const handleTouchStart = () => {
      enableAudio();
    };

    // ✅ 6. Add event listeners for **ALL interactions**
    const events = [
      "pointerdown", // Light tap
      "click", // Click
      "touchstart", // Lightest screen tap
      "touchmove", // Any dragging motion
      "wheel", // Mouse wheel movement
      "keydown", // Any key press
    ];
    events.forEach(event => document.addEventListener(event, enableAudio, { passive: true }));

    // ✅ 7. Detect page visibility (fix for switching tabs)
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) enableAudio();
    });

    // ✅ 8. Detect **light scrolling & light touches**
    document.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });

    // 🛠 Cleanup event listeners after BGM starts
    const cleanupListeners = () => {
      events.forEach(event => document.removeEventListener(event, enableAudio));
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
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
