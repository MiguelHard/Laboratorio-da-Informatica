// useAnimateOnScroll.js
import { useState, useEffect, useRef } from 'react';

function useAnimateOnScroll(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando o elemento entra na viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: parar de observar depois que a animação acontecer
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.4, // Quanto do elemento precisa estar visível
      }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    // Cleanup ao desmontar
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  return { ref, isVisible };
}

export default useAnimateOnScroll;
