import React from "react";

export default function RayosLuminosos() {
  return (
    <>
      {/* Light Rays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-[900px] h-[900px] ray-rotate opacity-30">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[2px] h-[450px]"
              style={{
                transform: `rotate(${i * 22.5}deg)`,
                transformOrigin: "bottom center",
                background:
                  "linear-gradient(to top, transparent, rgba(184,144,64,.35), transparent)",
              }}
            />
          ))}
        </div>

        <div className="absolute w-[700px] h-[700px] ray-rotate-reverse opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[1px] h-[350px]"
              style={{
                transform: `rotate(${i * 36}deg)`,
                transformOrigin: "bottom center",
                background:
                  "linear-gradient(to top, transparent, rgba(212,175,94,.45), transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
