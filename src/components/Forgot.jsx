import {useState} from "react";
import ModalReset from "./ModalReset.jsx";
const Forgot = () => {
    const [openModal, setOpenModal] = useState(false);
    const ButtonsLink = [
        {
            name: 'Send reset code',
            link: '/',
        },
        {
            name: 'Cancel',
            link: '/',
        }
    ];
    return (
        <>
         <form
             className='grid place-items-center relative top-[50vw]'>
                 <input
                     className={'h-16 mb-5 text-sm font-normal rounded-lg w-52'}
                     placeholder={'Enter your email'}
                     required/>
                 <br/> <br/>
                 <button
                     className={'h-16 mb-5 text-sm font-normal rounded-lg w-52'}
                     type={'submit'}>
                     Send Reset Code
                 </button> <br/> <br/>
             <ModalReset open={openModal}/>
         </form>
            <a className={'grid place-items-center relative top-[50vw]'}
                href={`/`}>
                 <button id={'login'}
                     className={'h-16 mb-5 text-sm font-normal rounded-lg w-52'}>
                     Cancel
                 </button>
            </a>
        </>
    );
};

export default Forgot;