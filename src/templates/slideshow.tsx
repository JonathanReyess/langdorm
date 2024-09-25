import React, { useState, useEffect } from 'react';

interface Image {
  src: string;
  alt: string;
  caption: string;
}

const images: Image[] = [
  {
    src: '/assets/images/feature1.svg',
    alt: 'First feature alt text',
    caption: 'Events range from language circles.',
  },
  {
    src: '/assets/images/feature2.svg',
    alt: 'Second feature alt text',
    caption: 'Cooking sessions and game nights.',
  },
  {
    src: '/assets/images/feature3.svg',
    alt: 'Third feature alt text',
    caption: 'Movie screenings and spontaneous trips.',
  },
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle case where images might be empty
  const currentImage = images[currentIndex];

  return (
    <div className="slideshow">
      {currentImage ? (
        <>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={{ width: '100%', height: 'auto' }}
          />
          <p>{currentImage.caption}</p>
        </>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default Slideshow;
