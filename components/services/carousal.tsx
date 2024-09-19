'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { streaks } from '@/components/utility/atoms';
import { useRouter } from 'next/navigation';

export const Carousel = () => {
 
 const router = useRouter();

  // Duplicate first and last slide to create an infinite loop effect
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 to account for the duplicate first item
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDuration = 500; // Slide transition duration in ms
  const length = streaks.length;
  const autoSlideInterval = 3000;
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // To store the interval reference

  // Create a list with cloned first and last slide
  const extendedStreaks = [
    streaks[length - 1], // Clone last item in front
    ...streaks,
    streaks[0], // Clone first item at the end
  ];

  // Function to handle next slide
  const handleNext = () => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }
  };

  // Function to handle previous slide
  const handlePrev = () => {
    if (!isTransitioning) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setIsTransitioning(true);
    }
  };

  // Function to start auto-slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, autoSlideInterval);
  };

  // Function to stop auto-slide
  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Start auto-slide on mount
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup interval on unmount
  }, []);

  // Handle the slide transitions and reset to the first/last slide without transition
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);

        // If we're on the cloned first slide, jump to real first slide
        if (currentIndex === extendedStreaks.length - 1) {
          setCurrentIndex(1); // First actual slide (index 1)
          sliderRef.current!.style.transition = 'none'; // Disable animation
        }

        // If we're on the cloned last slide, jump to real last slide
        if (currentIndex === 0) {
          setCurrentIndex(length); // Last actual slide (index length)
          sliderRef.current!.style.transition = 'none'; // Disable animation
        }
      }, transitionDuration);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning]);

  // Enable transition after resetting position
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        sliderRef.current!.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      }, 50); // Slight delay to re-enable transition
    }
  }, [isTransitioning]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoSlide} // Pause on hover
      onMouseLeave={startAutoSlide} // Resume on hover out
    >
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={sliderRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: `transform ${isTransitioning ? transitionDuration : 0}ms ease-in-out`,
        }}
      >
        {extendedStreaks.map((streak, index) => (
          <div key={index} className="flex justify-center w-full flex-shrink-0">
            <div className="relative group px-4 ">
              <Image
                src={streak.images}
                alt={streak.name}
                width={1200}
                height={500}
                className="border border-zinc-500 rounded"
                priority={index === currentIndex} // Priority for current image
                placeholder="empty" // Placeholder for loading images
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{streak.name}</p>
                <button onClick={()=> window.open(streak.visite, '_blank')}>
                    <OpenInNewIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicators */}
      <div className="absolute left-0 right-0 bottom-4 flex justify-center space-x-2">
        {streaks.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index + 1 === currentIndex ? 'bg-gray-900' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index + 1)} // Move to selected slide
          />
        ))}
      </div>
    </div>
  );
};
