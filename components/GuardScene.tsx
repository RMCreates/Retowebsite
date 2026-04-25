"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

useGLTF.preload("/models/guard.glb");

type Props = {
  isPaused: boolean;
  onRotationChange: (rotationY: number) => void;
};

function Guard({ isPaused, onRotationChange }: Props) {
  const { scene } = useGLTF("/models/guard.glb");
  const groupRef = useRef<THREE.Group>(null);
  const lastReportedRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!isPaused) {
      // ~18 seconds per full rotation
      groupRef.current.rotation.y += delta * 0.35;
    }
    // Throttle: only report on >~3° change to avoid React thrash
    const y = groupRef.current.rotation.y;
    if (Math.abs(y - lastReportedRef.current) > 0.05) {
      lastReportedRef.current = y;
      onRotationChange(y);
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

export default function GuardScene({ isPaused, onRotationChange }: Props) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 4], fov: 32 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      {/* Soft warm fill */}
      <ambientLight intensity={0.45} color="#FFE8CC" />
      {/* Key spotlight from upper-right (matches the spotlight in the model card design) */}
      <spotLight
        position={[3, 4, 2]}
        intensity={2.0}
        color="#D4801E"
        angle={0.65}
        penumbra={0.5}
        distance={20}
      />
      {/* Edge rim light from behind-left for separation */}
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#F0EBE0" />

      <Suspense fallback={null}>
        <Guard isPaused={isPaused} onRotationChange={onRotationChange} />
      </Suspense>
    </Canvas>
  );
}
