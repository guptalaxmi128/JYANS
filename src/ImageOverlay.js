import React, { useRef, useEffect } from "react";
import './Registration/Registration.css';

const ImageOverlay = ({ imageSrc, name, organization }) => {
  const canvasRef = useRef(null);
  
  console.log(name)
  console.log(organization)

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      // canvas.width = image.width-1720;
      // canvas.height = image.height-1250;
      // context.drawImage(image, 0, 0, image.width-1720, image.height-1250);
      canvas.width = image.width-1170;
      canvas.height = image.height-900;
      context.drawImage(image, 5, 0, image.width-1170, image.height-900);
      context.fillStyle = "black";
      context.font = "500 34px Arial";
      // context.fillText(name, 70, 110);
      // context.fillText(organization, 90, 120);
      // context.fillText(name, 200, 277);
      // context.fillText(organization, 150, 301);
        context.fillText(name, 350, 805);
      context.fillText(organization, 250, 870);
    };
  }, [imageSrc, name, organization]);

  return (
    
 <canvas ref={canvasRef}  />
 
  
 );
};

export default ImageOverlay;