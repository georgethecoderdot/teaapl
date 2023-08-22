import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { TextureLoader, Vector3 } from "three";
import EarthTexture from "./images/earth_s.jpg";

const GlobeComponent = () => {
  const meshRef = useRef();
  const texture = new TextureLoader().load({ EarthTexture });

  const globeRadius = 5;
  const lat = (37.9859 * Math.PI) / 180; // Convert to radians
  const lon = (23.727 * Math.PI) / 180;

  const position = new Vector3();
  position.x = globeRadius * Math.cos(lat) * Math.sin(lon);
  position.y = globeRadius * Math.sin(lat);
  position.z = globeRadius * Math.cos(lat) * Math.cos(lon);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[globeRadius, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      {/* Marker for your business */}
      <mesh position={position.toArray()}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
};

export default GlobeComponent;
