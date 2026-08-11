import React from "react";
import RayosLuminosos from "./RayosLuminosos";
import ParticulasFlotantes from "./ParticulasFlotantes";

export default function BackgroundAnimado() {
  return (
    <>
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-yellow-700/10 blur-[120px]" />
      </div>

      <RayosLuminosos />

      <ParticulasFlotantes />
    </>
  );
}
