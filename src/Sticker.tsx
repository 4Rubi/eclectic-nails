import React from 'react';

const Sticker = ({ style }) => {
  const { width } = style;
  const imageWidth = parseInt(width, 10);

  const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

  // Using text feature of placehold.co to add a simple icon
  const imageUrl = `https://placehold.co/${imageWidth}x${imageWidth}/${randomColor()}/FFFFFF/webp?text=★`;

  return (
    <div className="sticker" style={style}>
      <img src={imageUrl} alt="sticker" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </div>
  );
};

export default Sticker;