
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape }: { position: [number, number, number], color: string, shape: 'sphere' | 'box' | 'torus' | 'octahedron' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'sphere':
        return (
          <sphereGeometry args={[0.5, 32, 32]} />
        );
      case 'box':
        return (
          <boxGeometry args={[0.8, 0.8, 0.8]} />
        );
      case 'torus':
        return (
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
        );
      case 'octahedron':
        return (
          <octahedronGeometry args={[0.6]} />
        );
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {renderShape()}
        <meshPhongMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const ThreeBackground = () => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -3] as [number, number, number], color: '#3b82f6', shape: 'sphere' as const },
    { position: [4, -1, -4] as [number, number, number], color: '#ef4444', shape: 'box' as const },
    { position: [-2, -3, -2] as [number, number, number], color: '#10b981', shape: 'torus' as const },
    { position: [3, 3, -5] as [number, number, number], color: '#f59e0b', shape: 'octahedron' as const },
    { position: [-5, -1, -3] as [number, number, number], color: '#8b5cf6', shape: 'sphere' as const },
    { position: [2, -4, -4] as [number, number, number], color: '#06b6d4', shape: 'box' as const },
    { position: [5, 1, -2] as [number, number, number], color: '#f97316', shape: 'torus' as const },
    { position: [-3, 4, -5] as [number, number, number], color: '#ec4899', shape: 'octahedron' as const },
  ], []);

  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 0], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          color={shape.color}
          shape={shape.shape}
        />
      ))}
    </Canvas>
  );
};

export default ThreeBackground;
