import Google from '../assets/Icons/Ic (1).png'
import LoginBg from '../assets/Images/login-bg.png'




const Home = () => {
    return ( 
        // MOBILE DISPLAY
        <>
        <div className="w-screen h-screen home-container bg-blk 2xl:hidden">
            <div className="grid texts place-items-center pt-60">
                <h1 className="pb-20 font-bold">Welcome</h1> 
                <h2 className="pb-20 text-2xl">Global Employer Services <br/> Reward & Mobility Alert</h2>
            </div>
            <div className="grid buttons place-items-center">
                <button id="create" className="h-20 mb-10 text-sm font-normal rounded-full w-52 bg-gradient-to-r from-btn to-rng">Create an account </button> 
                <button id="login" className="h-20 mb-10 text-sm font-normal rounded-full w-52 bg-gradient-to-r from-rng to-btn">Login</button> 
                
                {/* Google Auth */}
                <div className="relative">
                <button className="h-20 text-sm font-normal text-black bg-white rounded-full w-52"><img className='absolute w-5 left-5' src={Google} alt="google logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</button> 
                </div>
                
                <a className="pt-10 font-normal text-white opacity-25"><p>Forgot password ?</p></a>
                <div className="w-32 h-[0.5px] bg-white rounded-full opacity-25"></div>
            </div>

        {/* LAPTOP/DESKTOP DISPLAY */}
        </div>
        {/* Background image */}
        <div className="w-screen h-screen bg-cover" style={{ backgroundImage: `url(${LoginBg})` }} >
            {/* <img className='relative -z-50' src={LoginBg} alt="login page background" /> */}
        <div>
            <button className="h-20 text-sm font-normal text-black bg-white rounded-full w-52"><img className='absolute w-5 left-5' src={Google} alt="google logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</button> 
                
            </div>
        </div>
        </>
     );
}
 
export default Home;
