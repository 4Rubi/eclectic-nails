import React from 'react';

const Polaroid = ({ style }) => {
  const { width, height } = style;
  const imageWidth = parseInt(width, 10);
  const imageHeight = parseInt(height, 10) * 0.75; // Adjust image height to leave space for text

  const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

  const imageUrl = `https://placehold.co/${Math.floor(imageWidth)}x${Math.floor(imageHeight)}/${randomColor()}/FFFFFF/webp`;

  return (
    <div className="polaroid" style={style}>
      <img src={imageUrl} alt="placeholder" style={{ width: '100%', height: '75%' }} />
      <div className="polaroid-text">eclectic</div>
    </div>
  );
};

export default Polaroid;