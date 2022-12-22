
import { Environment, Float, PresentationControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'



export default function Experience()
{
    const computer = useLoader(GLTFLoader, '../../public/joslaptop.glb');
    console.log(computer);

    return <>
        <Environment preset='city' />

        <color args={ [ '#6bbcbb' ] } attach='background' />

        <Float rotationIntensity={ 0.4 }>
            <primitive object={computer.scene}
            position-x = { -1.5 }
            position-y = {1.5}
            />
        </Float>
        


    </>
}