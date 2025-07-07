// App.jsx
import React, { useEffect, useState, useRef } from 'react';
import { About, Achievements, Footer, Gallery, Hero, Kademangan, Navigation, Registration } from './contents';
import { ParticleBackground, SplashScreen } from './components';
import './sass/App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const isMobile = window.innerWidth < 768
  // Custom cursor effect
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  useEffect(() => {
    if (isMobile) return;
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      cursorDot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile]);

  return (
    <div className="app">
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>

      <ParticleBackground />
      <Navigation />
      
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        <main>
          <Hero />
          <About />
          <Gallery />
          <Achievements />
          <Kademangan />
          <Registration />
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;