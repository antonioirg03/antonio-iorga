import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Box } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Suspense } from "react";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf", true);

  return (
    // <mesh>
    // <hemisphereLight intensity={0.15} groundColor='black' />
    // <pointLight intensity={1} />
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    // </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
