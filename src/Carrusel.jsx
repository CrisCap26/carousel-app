import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { type: 'image', src: '/img.png' },
    { type: 'video', src: '/vid.mp4' },
    { type: 'video', src: '/video1.mp4' },
    { type: 'image', src: '/imagen.jpg' },
    { type: 'image', src: '/paisajes-hermosos.jpg' },
    { type: 'video', src: '/vid2.mp4' },
  ];

  const videoRef = useRef(null);

  // Función que maneja el final del video
  const handleVideoEnd = () => {
    // Avanzar al siguiente elemento cuando el video termine
    handleNext();
  };

  // Función para cambiar al siguiente elemento
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Función para cambiar al elemento anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Cambiar automáticamente a la siguiente imagen cada 5 segundos
  useEffect(() => {
    if (items[currentIndex].type === 'image') {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 5000); // Cambia cada 5 segundos si es una imagen

      return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente cambie
    }
  }, [currentIndex, items]);

  return (
    <div className="carrusel-container">
       {/* Íconos de flecha para ir al elemento anterior */}
       <div className="arrow-icon" onClick={handlePrev}>
        <FaArrowLeft color='white' size={30} />
      </div>

      <div className="carrusel-item">
        {items[currentIndex].type === 'image' ? (
          <img className='styleImg' src={items[currentIndex].src} alt={`Item ${currentIndex}`} />
        ) : (
          <video
            key={items[currentIndex].src}
            ref={videoRef}
            width="600"
            controls
            onEnded={handleVideoEnd} // Cambiar al siguiente cuando termine el video
            autoPlay
            className='styleVideo'
          >
            <source src={items[currentIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* Íconos de flecha para ir al siguiente elemento */}
      <div className="arrow-icon" onClick={handleNext}>
        <FaArrowRight color='white' size={30} />
      </div>
    </div>
  );
};

export default Carrusel;
