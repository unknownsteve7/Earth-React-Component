import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DestinationPage from './components/destinationPage';
import Starfield from './components/Starfield';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedGlobe from './components/AnimatedGlobe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <main className="absolute inset-0 bg-black overflow-hidden">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 8], near: 1, far: 10000000 }}
      >
        <ambientLight intensity={0.5} />
        <Starfield count={12000} />
        <AnimatedGlobe id="animated-globe" />
        {/* OrbitControls for camera movement */}
        <OrbitControls
          enableZoom={false} 
          enablePan={false}  
          autoRotate={true}  
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute top-4 left-10 p-4 text-white">
        <a href="/" className="flex items-center space-x-1">
          <img
            src="/logo.png"
            alt="Earth Logo"
            className="w-16 h-16"
          />
          <h1 className="text-4xl mt-1 font-bold">EARTH</h1>
        </a>
      </div>
     {/* <a href="/destination"> <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center p-4">
        <h2 className="text-xl text-white/100">↑Explore</h2>
      </div></a> */}
      <div className="absolute bottom-4 right-10 p-4 text-white">
        <p className="text-sm">Made with ❤️ by <a href="" className="text-blue-400 hover:underline">Mohan</a></p>
      </div>
    </main>
  );
}

export default App;
