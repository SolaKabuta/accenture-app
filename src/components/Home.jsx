import Google from '../assets/Icons/Ic (1).png'
import LoginBg from '../assets/Images/login-bg.png'
import Logo from '../assets/Logos/Accenture.png'
import WhiteLogo from '../assets/Logos/Accenture Logo.png'



// import { useForm, SubmitHandler } from "react-hook-form"




const Home = () => {
    return ( 
        // MOBILE DISPLAY
        <>
        <div className="w-screen h- home-container bg-blk min-[1440px]:hidden ">
            <div className="grid texts place-items-center pt-60">
                <h1 className="pb-20 font-bold">Welcome</h1> 
                <h2 className="pb-20 text-2xl">Global Employer Services <br/> Reward & Mobility Alert</h2>
            </div>
            <div className="grid buttons place-items-center">
                <form action="">
                    <input className="h-16 mb-10 text-sm font-normal rounded-lg w-52" type="text"
                           placeholder="Your work email"/> <br/> <br/>
                    <input className="h-16 mb-10 text-sm font-normal rounded-lg w-52" type="password"
                           placeholder='Your password'/> <br/> <br/>
                    <button type='submit' id="login"
                            className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-gradient-to-r from-rng to-btn">Login
                    </button>
                </form>

                {/* Google Auth */}
                <div className="relative">
                    <button className="h-16 text-sm font-normal text-black bg-white rounded-lg w-52"><img
                        className='absolute w-5 left-5' src={Google}
                        alt="google logo"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google
                    </button>
                </div>

                <a id='forgot' className="pt-10 font-normal text-white opacity-25"><p>Forgot password ?</p></a>
                <div className="w-32 h-[0.5px] bg-white rounded-full opacity-25"></div>
                <img id='logo' className='pt-48 w-36' src={WhiteLogo} alt="Accenture's logo"></img>

            </div>
        </div>


            {/* LAPTOP/DESKTOP DISPLAY */}
            <div className="h-screen bg-cover w-[50vw] hidden 2xl:block" style={{backgroundImage: `url(${LoginBg})`}}>

                {/* CONTENT */}

                <div className="grid pt-[12vw] place-items-center">
                    <h1 className="pb-20 font-bold ">Welcome</h1>
                    <h2 className="pb-20 text-2xl ">Global Employer Services <br/> Reward & Mobility Alert</h2>

                    {/* FORM */}
                
                <form action="">
                    <input className="h-16 mb-10 text-sm font-normal rounded-lg w-52" type="text" placeholder="Your work email" /> <br /> <br />
                    <input className="h-16 mb-10 text-sm font-normal rounded-lg w-52" type="password" placeholder='Your password' /> <br /> <br />
                    <button type='submit' id="login" className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-gradient-to-r from-rng to-btn">Login</button> 
                </form>
                
                
                
                
                {/* Google Auth */}
                <div className="relative">
                <button className="h-16 text-sm font-normal text-black bg-white rounded-lg w-52"><img className='absolute w-5 left-5' src={Google} alt="google logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</button> 
                </div>
                
                <a id='forgot' className="pt-10 font-normal text-white opacity-25"><p>Forgot password ?</p></a>
                <div className="w-32 h-[0.5px] bg-white rounded-full opacity-25"></div>
                
                
                <img id='logo' className='absolute right-28' src={Logo} alt="Accenture's logo"></img>
                <img id='logo' className='pt-48 w-36' src={WhiteLogo} alt="Accenture's logo"></img>
                
                
            </div>
        
        </div>
        </>
);
}

export default Home;
