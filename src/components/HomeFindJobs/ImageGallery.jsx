import React from "react";

function ImageCard({ src, alt, className = "" }) {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt}
      className={`object-contain w-full rounded-md aspect-[1.31] ${className}`}
    />
  );
}

export default ImageCard;