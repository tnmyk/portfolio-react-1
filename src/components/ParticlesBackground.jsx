import Particles from 'react-particles-js'
import particlesConfig from '../config/particle-config';


const ParticlesBackground = () => {
    return (<Particles params={particlesConfig} className='particles'></Particles>  );
}
 
export default ParticlesBackground;