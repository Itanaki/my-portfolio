import { useEffect, useRef } from 'react';

export function useTypewriter(options = {}) {
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef(null);
  const intervalRef = useRef(null);
  const { threshold = 0.1, immediate = false, speed = 50 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Don't restart animation if already done
    if (hasAnimatedRef.current) return;

    const startAnimation = () => {
      const text = element.getAttribute('data-text') || element.textContent;
      const charCount = text.length;
      
      // Store full text
      element.setAttribute('data-text', text);
      element.textContent = '';
      
      // Get computed styles for cursor sizing
      const computedStyle = window.getComputedStyle(element);
      const fontSize = computedStyle.fontSize;
      
      // Create cursor
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      cursor.style.fontSize = fontSize;
      cursor.textContent = '|';
      
      element.appendChild(cursor);
      
      let index = 0;
      intervalRef.current = setInterval(() => {
        if (index <= charCount) {
          const displayText = text.substring(0, index);
          element.textContent = displayText;
          element.appendChild(cursor);
          index++;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          cursor.remove();
          element.textContent = text;
          hasAnimatedRef.current = true;
        }
      }, speed);
    };

    if (immediate) {
      // Start immediately for Hero section
      setTimeout(() => {
        startAnimation();
      }, 0);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }

    // For scroll-triggered animations
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          startAnimation();
          if (observerRef.current) {
            observerRef.current.unobserve(element);
          }
        }
      },
      { threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [immediate, speed, threshold]);

  return ref;
}
