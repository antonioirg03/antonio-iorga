import React, { Suspense } from "react";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader";
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}></icosahedronGeometry>
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsedFactor={-5}
          flatShading
        ></meshStandardMaterial>
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        ></Decal>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}></OrbitControls>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all></Preload>
    </Canvas>
  );
};

export default BallCanvas;
