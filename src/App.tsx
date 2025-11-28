import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <mesh position={[-1, 1, 1]}>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshLambertMaterial attach="material" color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
