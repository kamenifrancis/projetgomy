import React, { useState } from 'react';
import './reagir.css'
function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div>
      <button className='aime' onClick={toggleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <span > {likeCount} likes</span>
    </div>
  );
}

export default LikeButton;

