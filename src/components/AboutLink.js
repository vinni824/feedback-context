import { SiAboutdotme } from 'react-icons/si';
import { Link } from 'react-router-dom';

const AboutIcon = () => (
    <div className='about-link'>
        <Link to='/about'>
            <SiAboutdotme size={40} />
        </Link>
    </div>
);

export default AboutIcon;
