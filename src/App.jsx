import { useState } from 'react'
import './App.css'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OrbitControls makeDefault />
        
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
  )
}


