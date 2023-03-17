
import { Html, Environment, Float, PresentationControls, ContactShadows, Text, } from '@react-three/drei'
import { useControls } from 'leva';
import { useMemo, useState } from 'react'
import { useGLTF } from '@react-three/drei';
import * as THREE from "three"



export default function Experience()
{
    // LOADING IN CUSTOM 3D MODEL
    const { nodes } = useGLTF('../../joslaptop.glb');
    //console.log({nodes})

    // LEVA GUI FOR TESTING POSITION VALS
    // const options = useMemo(() =>{
    //     return{
    //         planex: { value: 7.95, min: -10, max: 10, step: 0.01 },
    //         planey: { value: 4.36, min: -10, max: 10, step: 0.01 },
    //         x: { value: .43, min: -10, max: 10, step: 0.01 },
    //         y: { value: .61, min: -10, max: 10, step: 0.01 },
    //         z: { value: -3.07, min: -10, max: 10, step: 0.01 },
    //         distance: {value: 3.08, min: -10, max: 10, step: 0.01},
    //     }
    // }, [])
    // const pA = useControls('SCREEN', options)


    // HOVER STATE CONTROL (to change html z-index on hover)
    const [hovered, hover] = useState(false)
    // console.log(hovered)

    return <>

        {/* LIGHTING */}
        <Environment preset='city'/>


        {/* BACKGROUND COLOR - YELLOW
        <color args={ [ '#f6f1c6' ] } attach='background' /> */}


        {/* MOUSE CONTROLS */}
        <PresentationControls
            global
            rotation= { [ 0, 0, 0 ] }
            polar= { [ - 1.3, .2 ] }
            config= { { mass: 2, tension: 200 } }
            snap = { {mass: 2, tension: 50 } }
        >


        {/* FLOAT ANIMATION */}
        <Float
        rotationIntensity={ 0.4 }>

            {/* ADDING COMPUTER TO SCENE */}
            <primitive object={nodes.Scene}
            position-x = { -1.5 }
            position-y = {1.5}
            >

                {/* PLANE MESH FOR SCREEN */}
                <mesh position= {[.43, .61, -3.07]}
                onPointerEnter={(e)=> {
                    hover(true)
                    e.stopPropagation()
                }}
                onPointerLeave={(e)=> hover(false)}
                >

                <planeGeometry args={[7.95, 4.36]} />
                <meshPhysicalMaterial roughness={0.0} blending={THREE.NoBlending} opacity={0} color={0x0303030}  />
                    
                    {/* IFRAME */}
                    <Html 
                        prepend
                        transform
                        wrapperClass='htmlScreen'
                        zIndexRange={hovered ? [5555,5555] : [0,0]}
                        distanceFactor={3.08}
                    >
                        <iframe src="https://jocreat.es/an-html-site" />
                    </Html>
                </mesh>
                
            </primitive>
            
            {/* TEXT - FONT + POSITION */}
            <Text
            font='/../../press-start-2p-v14-latin-regular.woff'
            fontSize={ 1.1 }
            position={ [ 3.5, 2, 3 ] }
            rotation-x={ .2 }
            rotation-y={ -1.6 }
            maxWidth={ 2 }
            textAlign= 'center'
            
            > 
            jo creates
            </Text>
            

        </Float>
        
        </PresentationControls>
        
        {/* SHADOW - FLOOR */}
        <ContactShadows position-y={ - 4.75 }
        opacity = { .5 }
        scale = { 15 } 
        blur = { 2.4}
        />


    </>
}