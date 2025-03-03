import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const HorizontalWrapper = ({ root, autoRaf, orientation, children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      root: root || undefined,
      autoRaf: autoRaf || true,
      orientation: orientation || "vertical", // "horizontal" possible aussi
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, [root, autoRaf, orientation]);

  return <div>{children}</div>;
};

export default HorizontalWrapper;
