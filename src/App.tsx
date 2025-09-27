import React from 'react';
import './App.css';
import AnimatedBackground from './AnimatedBackground';

function App() {
  return (
    <>
      <AnimatedBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="h1">eclectic</h1>
        </div>
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>About Us</h2>
        </div>
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Contact</h2>
        </div>
      </main>
    </>
  );
}

export default App;