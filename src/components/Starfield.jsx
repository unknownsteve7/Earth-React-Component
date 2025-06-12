import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Starfield = ({ count = 5000 }) => {
  const pointsRef = useRef();

  const starVertices = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 5000 + 1000; // HUGE sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starVertices.length / 3}
          array={starVertices}
          itemSize={3}
          normalized={false}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default Starfield;
