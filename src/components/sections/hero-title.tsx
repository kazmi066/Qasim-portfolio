"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { useEffect, useState, useSyncExternalStore } from "react";

import { ShaderGuard } from "@/components/motion/shader-guard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

function Word({ children, i }: { children: string; i: number }) {
  return (
    <span className="hero__word" style={{ animationDelay: `${90 + i * 70}ms` }}>
      {children}
    </span>
  );
}

function ShaderPill() {
  const reduced = useReducedMotion();

  return (
    <span className="hero__pill" aria-hidden="true">
      {reduced ? null : (
        <ShaderGuard>
          <ShaderGradientCanvas
            style={{ width: "100%", height: "100%" }}
            pixelDensity={1}
            fov={45}
            pointerEvents="none"
          >
            <ShaderGradient
              animate="on"
              brightness={1.35}
              cAzimuthAngle={180}
              cDistance={3.2}
              cPolarAngle={90}
              cameraZoom={1}
              color1="#8fa86a"
              color2="#d6a45a"
              color3="#c45a32"
              grain="off"
              lightType="3d"
              positionX={0}
              positionY={0}
              positionZ={0}
              range="disabled"
              reflection={0.2}
              rotationX={0}
              rotationY={20}
              rotationZ={0}
              shader="defaults"
              type="waterPlane"
              uAmplitude={0.45}
              uDensity={1.4}
              uFrequency={5.2}
              uSpeed={0.28}
              uStrength={1.6}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </ShaderGuard>
      )}
    </span>
  );
}

function HeroStill({
  images,
  delay = 0,
  interval = 3200,
}: {
  images: string[];
  delay?: number;
  interval?: number;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || images.length < 2) return;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setIndex((value) => (value + 1) % images.length);
      }, interval);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [delay, images.length, interval, reduced]);

  return (
    <span className="hero__still" aria-hidden="true">
      {images.map((src, i) => (
        <img key={src} src={src} alt="" className={cn(i === index && "is-on")} />
      ))}
    </span>
  );
}

const pictureStills = [
  "https://i.ytimg.com/vi/LWozRRk9xys/oar2.jpg",
  "https://i.ytimg.com/vi/NmhZJi2JN5k/oar2.jpg",
  "https://i.ytimg.com/vi/j6FiwiX-eoU/oar2.jpg",
  "https://i.ytimg.com/vi/kZS17TORX18/oar2.jpg",
];

const shortStills = [
  "https://i.ytimg.com/vi/yZATXPlS3rk/oar2.jpg",
  "https://i.ytimg.com/vi/b6hCIUwCjZ8/oar2.jpg",
  "https://i.ytimg.com/vi/fB6UHpEX5fY/oar2.jpg",
  "https://i.ytimg.com/vi/GQGtQ6Dsysg/oar2.jpg",
];

function subscribeReady(onStoreChange: () => void) {
  window.addEventListener("qasim:ready", onStoreChange);
  return () => window.removeEventListener("qasim:ready", onStoreChange);
}

export function HeroTitle() {
  const ready = useSyncExternalStore(
    subscribeReady,
    () => document.documentElement.classList.contains("is-ready"),
    () => false,
  );

  return (
    <h1 id="hero-title" className={cn("hero__title", ready && "is-in")}>
      <span className="sr-only">I'm Qasim Abbas. I edit picture and shorts.</span>
      <span aria-hidden="true">
        <Word i={0}>I'm</Word>{" "}
        <span className="hero__cluster">
          <Word i={1}>Qasim</Word> <ShaderPill /> <Word i={2}>Abbas.</Word>
        </span>
        <br />
        <Word i={3}>I</Word> <Word i={4}>edit</Word>{" "}
        <span className="hero__cluster">
          <Word i={5}>picture</Word> <HeroStill images={pictureStills} />
        </span>{" "}
        <Word i={6}>and</Word>{" "}
        <span className="hero__cluster">
          <Word i={7}>shorts</Word> <HeroStill images={shortStills} delay={1400} interval={3600} />.
        </span>
      </span>
    </h1>
  );
}
