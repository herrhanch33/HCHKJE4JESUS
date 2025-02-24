import React from "react";

const BackgroundMusic = () => {
  return (
    <audio autoPlay loop>
      <source src="bgm.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;
