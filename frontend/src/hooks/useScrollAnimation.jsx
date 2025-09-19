import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

// Animation variant classes for consistent animations
export const animationVariants = {
  fadeUp: 'transition-all duration-700 ease-out transform',
  fadeUpVisible: 'opacity-100 translate-y-0',
  fadeUpHidden: 'opacity-0 translate-y-8',
  
  fadeLeft: 'transition-all duration-700 ease-out transform',
  fadeLeftVisible: 'opacity-100 translate-x-0',
  fadeLeftHidden: 'opacity-0 -translate-x-8',
  
  fadeRight: 'transition-all duration-700 ease-out transform',
  fadeRightVisible: 'opacity-100 translate-x-0',
  fadeRightHidden: 'opacity-0 translate-x-8',
  
  fadeScale: 'transition-all duration-700 ease-out transform',
  fadeScaleVisible: 'opacity-100 scale-100',
  fadeScaleHidden: 'opacity-0 scale-95',
  
  staggered: (delay) => `transition-all duration-700 ease-out transform delay-${delay}`,
};