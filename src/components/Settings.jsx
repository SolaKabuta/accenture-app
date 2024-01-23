import { motion } from 'framer-motion';
import WhiteLogo from '../assets/Logos/Accenture Logo.png';

const Settings = () => {
    const buttonsLinks = [
        {
            name: 'Profile',
            link: '/',
        },
        {
            name: ' Advanced Settings',
            link: '/Spline404.jsx',
        },
        {
            name: 'Logout',
            link: '/Logout.jsx',
        },
        {
            name: 'Cancel',
            link: '/',
        },
    ];

    return (
        <>
            <motion.div
                className="w-screen h-screen home-container bg-blk min-[1440px]:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 4 } }}
            >
                <div
                    className="grid texts place-items-center pt-60">
                    <h1
                        className="pb-20 font-bold">Welcome
                    </h1>
                    <h2
                        className="pb-20 text-2xl">
                        Global Employer Services <br /> Reward & Mobility Alert
                    </h2>
                </div>

                {/* Fais une boucle pour afficher les boutons */}

                <div className="grid buttons place-items-center">
                    {buttonsLinks.map((button, index) => (
                        <a href={button.link} key={index}>
                            <button
                                className={
                                    button.name === 'cancel'
                                        ? 'h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-gradient-to-r from-rng to-btn'
                                        : 'h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700'
                                }
                            >
                                {button.name}
                            </button>
                        </a>
                    ))}

                    {/*}
                    <a href="/">
                        <button className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700">
                            Profile
                        </button>
                    </a>
                    <a href="/">
                        <button className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700">
                            Change language
                        </button>
                    </a>
                    <a href="/Spline404.jsx">
                        <button className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-slate-700">
                            Advanced Settings
                        </button>
                    </a>
                    <a href="/">
                        <button
                            id="login"
                            className="h-16 mb-10 text-sm font-normal rounded-lg w-52 bg-gradient-to-r from-rng to-btn"
                        >
                            Cancel
                        </button>
                    </a>
                    */}

                    <img
                        className="pt-48 w-36"
                        src={WhiteLogo}
                        alt="Accenture's logo"
                    ></img>
                </div>
            </motion.div>
        </>
    );
};

export default Settings;
