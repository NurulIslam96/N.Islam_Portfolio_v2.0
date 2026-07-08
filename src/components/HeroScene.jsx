import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment } from "@react-three/drei";

function Blob({ position, color, scale, speed, distort }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });
  return (
    <Float speed={speed * 1.4} rotationIntensity={1.1} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.6}
          distort={distort}
          speed={1.6}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function Rig() {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ec4899" />
      <pointLight position={[-5, -3, 4]} intensity={1} color="#22d3ee" />
      <Suspense fallback={null}>
        <Blob position={[-2.1, 0.6, 0]} color="#8b5cf6" scale={1.35} speed={1} distort={0.45} />
        <Blob position={[2, -0.5, -1.5]} color="#ec4899" scale={0.95} speed={1.3} distort={0.55} />
        <Blob position={[0.6, 1.4, -2.5]} color="#22d3ee" scale={0.7} speed={0.8} distort={0.4} />
        <Environment preset="city" />
      </Suspense>
      <Rig />
    </Canvas>
  );
}
