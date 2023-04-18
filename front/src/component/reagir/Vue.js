import React, { useState, useEffect } from 'react';

function VideoPlayer({ videoUrl }) {
  // State pour le compteur de vues
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Mettre à jour le compteur de vues dans le local storage
    const storedViewCount = localStorage.getItem('viewCount');
    if (storedViewCount) {
      setViewCount(parseInt(storedViewCount));
    }
  }, []);

  // Mettre à jour le compteur de vues lorsque la vidéo est finie
  function handleVideoEnded() {
    setViewCount(viewCount + 1);
    localStorage.setItem('viewCount', viewCount + 1);
  }

  return (
    <div>
      <video video src="https://youtu.be/KpStW7_Lv4A" controls width="640" height="360" autoplay loop muted onEnded={handleVideoEnded}></video>
      <h5>vues : {viewCount}</h5>
    </div>
  );
}

export default VideoPlayer;
