"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ShaderField() {
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  if (reduced || !isDesktop) return null;

  return (
    <div className="hero__shader" aria-hidden="true">
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        pixelDensity={1}
        fov={45}
        pointerEvents="none"
        lazyLoad
      >
        <ShaderGradient
          animate="on"
          brightness={1.1}
          cAzimuthAngle={180}
          cDistance={3.9}
          cPolarAngle={115}
          cameraZoom={1}
          color1="#0c100e"
          color2="#8fa86a"
          color3="#d6a45a"
          grain="off"
          lightType="3d"
          positionX={0}
          positionY={0.2}
          positionZ={0}
          range="enabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={0}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0.3}
          uDensity={1.1}
          uFrequency={5.5}
          uSpeed={0.12}
          uStrength={1.4}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
