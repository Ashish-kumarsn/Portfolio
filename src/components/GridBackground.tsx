// src/components/GridBackground.tsx
import React from "react";
import { cn } from "../utils";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      {/* Grid lines */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      
      {/* Glowing light effect - Bigger and shifted right */}
      <div className="pointer-events-none fixed left-40 top-20 h-[600px] w-[600px] opacity-20 blur-3xl">
  <div 
    className="h-full w-full rounded-full" 
    style={{
      background: 'radial-gradient(circle, #d4d4d8 0%, #737373 50%, #525252 100%)'
    }}
  />
</div>

      {/* Actual page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}