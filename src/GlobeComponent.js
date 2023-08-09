import React from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  return (
    <div className="w-64 h-64 mx-auto mt-10 mb-10">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology-min.jpg"
        backgroundColor="#051923"
      />
    </div>
  );
};

export default GlobeComponent;
