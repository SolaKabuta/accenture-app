




const Settings = () => {
    return ( 
        <div className="w-screen h-screen home-container bg-blk min-[1440px]:hidden ">
            <div className="grid texts place-items-center pt-60">
                <h1 className="pb-20 font-bold">Welcome</h1> 
                <h2 className="pb-20 text-2xl">Global Employer Services <br/> Reward & Mobility Alert</h2>
            </div>
            <div className="grid buttons place-items-center">
                <button className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700">Profile</button>
                <button className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700">Change language</button>
                <button className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700">Advanced Settings</button>
                <button id="login" className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-gradient-to-r from-rng to-btn"><a href='/'>Cancel</a></button>

            </div>
        </div>
);
}

export default Settings;