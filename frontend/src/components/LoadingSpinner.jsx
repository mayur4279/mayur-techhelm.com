// components/ContentLoader.jsx
import { useEffect, useState } from 'react';

export default function ContentLoader({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if all images are loaded
    const images = Array.from(document.querySelectorAll('img'));
    let loadedCount = 0;

    if (images.length === 0) {
      setIsLoaded(true);
      return;
    }

    const imageLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setIsLoaded(true);
      }
    };

    images.forEach(img => {
      if (img.complete) imageLoaded();
      else img.addEventListener('load', imageLoaded);
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', imageLoaded);
      });
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fullpage-loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return children;
}