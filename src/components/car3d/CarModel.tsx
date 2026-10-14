import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox } from "@react-three/drei"
import type { Group } from "three"

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.38, 0.38, 0.26, 24]} />
        <meshStandardMaterial color="#0e0e0e" roughness={0.55} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.27, 20]} />
        <meshStandardMaterial color="#d2d2d7" roughness={0.15} metalness={0.95} />
      </mesh>
    </group>
  )
}

export function CarModel({ autoRotate = true }: { autoRotate?: boolean }) {
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.25
    }
  })

  const bodyMaterial = (
    <meshStandardMaterial color="#1d1d1f" roughness={0.18} metalness={0.85} />
  )
  const glassMaterial = (
    <meshStandardMaterial
      color="#0a0a0c"
      roughness={0.05}
      metalness={0.2}
      transparent
      opacity={0.92}
    />
  )

  return (
    <group ref={group} dispose={null}>
      {/* chassis */}
      <RoundedBox args={[3.3, 0.5, 1.45]} radius={0.16} smoothness={4} position={[0, 0.05, 0]} castShadow>
        {bodyMaterial}
      </RoundedBox>

      {/* nose taper */}
      <RoundedBox
        args={[1.1, 0.42, 1.3]}
        radius={0.18}
        smoothness={4}
        position={[1.55, -0.02, 0]}
        rotation={[0, 0, 0.08]}
        castShadow
      >
        {bodyMaterial}
      </RoundedBox>

      {/* cabin / glass */}
      <RoundedBox
        args={[1.7, 0.42, 1.2]}
        radius={0.22}
        smoothness={4}
        position={[-0.25, 0.42, 0]}
        rotation={[0, 0, -0.03]}
        castShadow
      >
        {glassMaterial}
      </RoundedBox>

      {/* rear deck */}
      <RoundedBox args={[0.7, 0.3, 1.38]} radius={0.14} smoothness={4} position={[-1.55, 0.1, 0]} castShadow>
        {bodyMaterial}
      </RoundedBox>

      {/* headlights */}
      {[0.62, -0.62].map((z) => (
        <mesh key={z} position={[2.08, 0.1, z]}>
          <boxGeometry args={[0.06, 0.1, 0.22]} />
          <meshStandardMaterial
            color="#eef6ff"
            emissive="#2997ff"
            emissiveIntensity={1.4}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* taillights */}
      {[0.6, -0.6].map((z) => (
        <mesh key={z} position={[-1.88, 0.12, z]}>
          <boxGeometry args={[0.05, 0.08, 0.3]} />
          <meshStandardMaterial color="#ff3b30" emissive="#b64400" emissiveIntensity={0.9} />
        </mesh>
      ))}

      <Wheel position={[1.1, -0.42, 0.78]} />
      <Wheel position={[1.1, -0.42, -0.78]} />
      <Wheel position={[-1.1, -0.42, 0.78]} />
      <Wheel position={[-1.1, -0.42, -0.78]} />
    </group>
  )
}
