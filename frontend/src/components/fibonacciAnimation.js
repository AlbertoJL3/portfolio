import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FibonacciAnimation() {
  const meshRef = useRef();

  const fibonacciSequence = useMemo(() => {
    const sequence = [0, 1];
    for (let i = 2; i < 20; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const color1 = new THREE.Color('#1a237e');  // Dark blue
    const color2 = new THREE.Color('#7986cb');  // Light blue

    let x = 0, y = 0, angle = 0;
    fibonacciSequence.forEach((num, index) => {
      const size = num * 0.1;
      const halfSize = size / 2;

      // Create a rectangle
      vertices.push(
        x - halfSize, y - halfSize, 0,
        x + halfSize, y - halfSize, 0,
        x + halfSize, y + halfSize, 0,
        x - halfSize, y - halfSize, 0,
        x + halfSize, y + halfSize, 0,
        x - halfSize, y + halfSize, 0
      );

      // Alternate colors
      const color = index % 2 === 0 ? color1 : color2;
      for (let i = 0; i < 6; i++) {
        colors.push(color.r, color.g, color.b);
      }

      // Move to the next position
      angle += Math.PI / 2;
      x += Math.cos(angle) * size;
      y += Math.sin(angle) * size;
    });

    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, [fibonacciSequence]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
    </mesh>
  );
}

export default FibonacciAnimation;