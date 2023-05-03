import { Component, Suspense, useRef, useLayoutEffect} from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/experience'
import { Stars } from '@react-three/drei'

function App() {
  
  const ref = useRef()
  console.log(ref)
  useLayoutEffect(() => {
    ref.current.parentNode.style.position = 'absolute'
    ref.current.parentNode.style.zIndex = 1000
  }, [])

  return (
    <Canvas
      ref={ref}
      camera={ {
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [ -10, 7, 12 ]
    } }
    >
      <Stars radius={100} depth={10}/>
      <Suspense fallback = { null }>
      
      

      <Experience />
      
      

      </Suspense>

    </Canvas>
  )
}

export default App
