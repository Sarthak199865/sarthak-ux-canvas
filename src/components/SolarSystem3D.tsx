import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitTilt?: number;
  glowIntensity?: number;
}

const Planet = ({ color, size, orbitRadius, orbitSpeed, orbitTilt = 0, glowIntensity = 0 }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * orbitSpeed;
    }
  });

  return (
    <group ref={groupRef} rotation={[orbitTilt, 0, 0]}>
      <mesh ref={meshRef} position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={glowIntensity}
        />
      </mesh>
      {/* Elliptical orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[orbitRadius, 0.01, 8, 100]} />
        <meshBasicMaterial color="#ffffff" opacity={0.15} transparent />
      </mesh>
    </group>
  );
};

const Sun = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial 
        color="#E27B58"
        emissive="#E27B58"
        emissiveIntensity={2}
      />
      <pointLight color="#E27B58" intensity={3} distance={50} />
    </mesh>
  );
};

const SolarSystem3D = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 15, 25], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        
        {/* Sun */}
        <Sun />
        
        {/* Mercury */}
        <Planet 
          color="#6B6B6B" 
          size={0.15} 
          orbitRadius={2} 
          orbitSpeed={0.4}
          orbitTilt={0.1}
        />
        
        {/* Venus */}
        <Planet 
          color="#D4C5B9" 
          size={0.25} 
          orbitRadius={3.5} 
          orbitSpeed={0.3}
          orbitTilt={0.15}
        />
        
        {/* Earth with slight glow */}
        <Planet 
          color="#5A9FD4" 
          size={0.25} 
          orbitRadius={5} 
          orbitSpeed={0.25}
          orbitTilt={0.05}
          glowIntensity={0.2}
        />
        
        {/* Mars */}
        <Planet 
          color="#C1440E" 
          size={0.2} 
          orbitRadius={6.8} 
          orbitSpeed={0.2}
          orbitTilt={0.12}
          glowIntensity={0.1}
        />
        
        {/* Jupiter */}
        <Planet 
          color="#C88B3A" 
          size={0.6} 
          orbitRadius={10} 
          orbitSpeed={0.12}
          orbitTilt={0.08}
        />
        
        {/* Saturn */}
        <Planet 
          color="#E6D9A5" 
          size={0.5} 
          orbitRadius={13} 
          orbitSpeed={0.08}
          orbitTilt={0.2}
        />
        
        {/* Uranus */}
        <Planet 
          color="#4FD0E7" 
          size={0.35} 
          orbitRadius={16} 
          orbitSpeed={0.05}
          orbitTilt={0.25}
        />
        
        {/* Neptune */}
        <Planet 
          color="#4166F5" 
          size={0.35} 
          orbitRadius={18.5} 
          orbitSpeed={0.03}
          orbitTilt={0.18}
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default SolarSystem3D;
