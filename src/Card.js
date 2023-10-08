import React, { useState } from "react";

import "./Card.css";
export const Card = ({ src, alt }) => {
  const [hover, setHover] = useState(false);

  const handleMouseClick = () => {
    setHover(true);
  };

  const handleMouse = () => {
    setHover(false);
  };
  return (
    <>
      <div
        className={`imagem-container ${hover ? `hovered` : ``}`}
        onMouseEnter={handleMouseClick}
        onMouseLeave={handleMouse}
      >
        <img src={src} alt={alt} className="imagem" />
      </div>
    </>
  );
};
