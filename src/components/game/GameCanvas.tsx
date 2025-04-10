import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function GameCanvas() {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {/* Basic placeholder scene */}
        <Box position={[0, 0.5, 0]} args={[1, 1, 1]}>
          <meshStandardMaterial color="orange" />
        </Box>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default GameCanvas; 