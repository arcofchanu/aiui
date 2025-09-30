
import React from "react";
import { ShaderAnimation } from "./ui/shader-animation";

export default function DemoPage() {
  return (
    <div className="relative flex h-[650px] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-black shadow-2xl">
      <ShaderAnimation />
      <span className="absolute pointer-events-none z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
        Shader Animation
      </span>
    </div>
  );
}
