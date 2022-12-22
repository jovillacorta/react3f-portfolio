
import { Environment, Float, PresentationControls, ContactShadows, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'



export default function Experience()
{
    const computer = useLoader(GLTFLoader, '../../public/joslaptop.glb');
    console.log(computer);

    return <>
        <Environment preset='sunset' />

        <color args={ [ '#6bbcbb' ] } attach='background' />

        <PresentationControls
            global
            rotation= { [ 0, 0, 0 ] }
            polar= { [ - 1.3, .2 ] }
            config= { { mass: 2, tension: 200 } }
            snap = { {mass: 2, tension: 50 } }
        >
            <Float rotationIntensity={ 0.4 }>
                <primitive object={computer.scene}
                position-x = { -1.5 }
                position-y = {1.5}
                />
            </Float>
            <Text
                font='/../../press-start-2p-v14-latin-regular.woff'
                fontSize={ 1.1 }
                position={ [ 3.5, 2, 3 ] }
                rotation-x={ .1 }
                rotation-y={ -1.5 }
                maxWidth={ 2 }
                textAlign= 'center'
            > 
                jo creates
            </Text>
        </PresentationControls>
        
        <ContactShadows position-y={ - 4.75 }
        opacity = { .5 }
        scale = { 15 } 
        blur = { 2.4}
        />


    </>
}