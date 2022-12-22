import { Component, Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/experience'

function App() {
  

  return (
    <Canvas camera={ {
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [ -10, 7, 12 ]
    } }
    >
    <Suspense fallback = { null }>
    <Experience />
    </Suspense>

    </Canvas>
  )
}

export default App
