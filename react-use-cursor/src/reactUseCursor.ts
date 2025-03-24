// src/useCursor.ts
import { useEffect, useRef, useCallback, useMemo } from 'react';

interface UseCursorProps {
  size?: number;
  color?: string;
  shape?: 'circle' | 'square';
  transitionDuration?: string;
  followSpeed?: string;
  customStyles?: React.CSSProperties;
}

const reactUseCursor = ({
  size = 50,
  color = 'black',
  shape = 'circle',
  transitionDuration = '0.1s',
  followSpeed = '0.1s',
  customStyles = {},
}: UseCursorProps) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 }); // Store position to reduce calculations

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      const cursorWidthHalf = cursorRef.current.offsetWidth / 2;
      const cursorHeightHalf = cursorRef.current.offsetHeight / 2;
      cursorRef.current.style.transform = `translate(${positionRef.current.x - cursorWidthHalf}px, ${positionRef.current.y - cursorHeightHalf}px)`;
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }; // Update stored position

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(updateCursorPosition);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [updateCursorPosition]); // updateCursorPosition is now stable.

  const mergedStyles = useMemo(() => {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: shape === 'circle' ? '50%' : '0%',
      transition: `transform ${followSpeed} ease-out, top ${transitionDuration}, left ${transitionDuration}`,
      pointerEvents: 'none',
      zIndex: 9999,
      willChange: 'transform, top, left',
      ...customStyles,
    };
  }, [size, color, shape, transitionDuration, followSpeed, JSON.stringify(customStyles)]); // Ensure customStyles change triggers a re-render.

  return { cursorRef, mergedStyles };
};

export default reactUseCursor;
