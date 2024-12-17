// import React, { useState, useRef } from 'react';

// const Carrusel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const items = [
//     { type: 'image', src: '../public/img.png' },
//     { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
//     { type: 'video', src: '../public/video1.mp4' },
//     { type: 'image', src: '../public/paisajes-hermosos.jpg' },
//     { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },

//   ];

//   const videoRef = useRef(null);

//   // Función que maneja el final del video
//   const handleVideoEnd = () => {
//     // Avanzar al siguiente elemento
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     console.log("Video fin")
//   };

//   // Función para cambiar al siguiente elemento
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   // Función para cambiar al elemento anterior
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   return (
//     <div className="carrusel-container">
//       <button onClick={handlePrev}>Anterior</button>

//       <div className="carrusel-item">
//         {items[currentIndex].type === 'image' ? (
//           <img src={items[currentIndex].src} alt={`Item ${currentIndex}`} />
//         ) : (
//           <video
//             ref={videoRef}
//             width="600"
//             controls
//             onEnded={handleVideoEnd}
//             autoPlay
//           >
//             <source src={items[currentIndex].src} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </div>

//       <button onClick={handleNext}>Siguiente</button>
//     </div>
//   );
// };

// export default Carrusel;


import React, { useState, useEffect, useRef } from 'react';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { type: 'image', src: '/img.png' },
    // { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { type: 'video', src: '/video1.mp4' },
    { type: 'image', src: '/paisajes-hermosos.jpg' },
    // { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
  ];

  const videoRef = useRef(null);

  // Función que maneja el final del video
  const handleVideoEnd = () => {
    // Avanzar al siguiente elemento cuando el video termine
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    console.log('Video fin');
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
      <button onClick={handlePrev}>Anterior</button>

      <div className="carrusel-item">
        {items[currentIndex].type === 'image' ? (
          <img className='styleImg' src={items[currentIndex].src} alt={`Item ${currentIndex}`} />
        ) : (
          <video
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

      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Carrusel;
