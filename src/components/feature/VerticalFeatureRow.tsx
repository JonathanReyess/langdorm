import className from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Image {
  src: string;
  alt: string;
  caption: string;
  width?: string;
  height?: string;
}

type IVerticalFeatureRowProps = {
  id?: string;
  title: string;
  description: string;
  images: Image[] | Image;
  reverse?: boolean;
};

const VerticalFeatureRow: React.FC<IVerticalFeatureRowProps> = (props) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: Image[] = Array.isArray(props.images)
    ? props.images
    : [props.images];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval); // Cleanup interval
    }

    // Return a no-op function when there's no interval to clear
    return () => {};
  }, [images.length]);

  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-black">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="flex w-full flex-col items-center p-6 sm:w-1/2">
        {images.length > 0 && images[currentIndex] && (
          <>
            <img
              src={`${router.basePath}${images[currentIndex]?.src}`}
              alt={images[currentIndex]?.alt || 'Image'}
              style={{
                width: images[currentIndex]?.width
                  ? `${images[currentIndex]?.width}px`
                  : 'auto',
                height: images[currentIndex]?.height
                  ? `${images[currentIndex]?.height}px`
                  : 'auto',
              }}
            />
            {images[currentIndex]?.caption && (
              <p className="mt-2 text-center">
                {images[currentIndex]?.caption}
              </p>
            )}
          </>
        )}
        {images.length === 0 && <p>No images available</p>}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
