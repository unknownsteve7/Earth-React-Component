import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, useTexture } from '@react-three/drei';

const AnimatedGlobe = () => {
  const sphereRef = useRef();
  const texture = useTexture('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg');
  // Load Earth texture
  const handleclick = () => {
    window.location.href = '/destination'; 
  }
 const handledblclick = () => {
    window.location.href = '/destination'; 
  }
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.002;
    }
  });
  return (
    <Sphere ref={sphereRef} args={[3, 64, 32]}
      onClick={handleclick}
      onDoubleClick={handledblclick}
      >
      <MeshDistortMaterial
        map={texture}
        metalness={-6.01}
        attach="material"
        distort={0}
        speed={2}
        roughness={0.5}
      />
    </Sphere>
  );
};

export default AnimatedGlobe;
