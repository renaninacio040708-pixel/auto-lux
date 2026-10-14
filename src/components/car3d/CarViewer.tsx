import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { CarModel } from "./CarModel"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", listener)
    return () => mq.removeEventListener("change", listener)
  }, [])
  return reduced
}

export function CarViewer({ className = "" }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion()
  const [interacting, setInteracting] = useState(false)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleStart = () => {
    setInteracting(true)
    if (idleTimer.current) clearTimeout(idleTimer.current)
  }
  const handleEnd = () => {
    idleTimer.current = setTimeout(() => setInteracting(false), 1800)
  }

  return (
    <div
      className={`relative touch-none ${className}`}
      role="img"
      aria-label="Modelo 3D rotativo do Porsche 911 Turbo S — arraste para girar"
    >
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [4.2, 1.4, 4.2], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.35} />
        <directionalLight
          position={[4, 6, 2]}
          intensity={2.2}
          color="#f5f5f7"
          castShadow
        />
        <directionalLight position={[-5, 2, -3]} intensity={0.8} color="#2997ff" />
        <Suspense fallback={null}>
          <CarModel autoRotate={!reducedMotion && !interacting} />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.72, 0]} opacity={0.55} scale={8} blur={2.4} far={2} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.9}
          rotateSpeed={0.6}
          onStart={handleStart}
          onEnd={handleEnd}
        />
      </Canvas>
    </div>
  )
}
