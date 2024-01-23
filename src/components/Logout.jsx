import WhiteLogo from '../assets/Logos/Accenture Logo.png';
import Logo from '../assets/Logos/Accenture.png';
const Logout = () => {
    return (
        <div
            className='bg-blk'>
            <img
                className=''
                src={Logo}
                alt='/'
            ></img>
            <h1>
                Get Started
            </h1>
            <img
                className=''
                src={WhiteLogo}
                alt='/'
            ></img>
        </div>
    );
};

export default Logout;