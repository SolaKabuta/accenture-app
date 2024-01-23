import {useState} from "react";
import ModalReset from "./ModalReset.jsx";
const Forgot = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
         <div
             className='grid place-items-center relative top-[50vw]'>
                 <input
                     className={'h-16 mb-10 text-sm font-normal rounded-lg w-52'}/>
                 <br/> <br/>
                 <button
                     className={'h-16 mb-10 text-sm font-normal rounded-lg w-52'}>
                     Send Reset Code
                 </button> <br/> <br/>
                 <button
                     className={'h-16 mb-10 text-sm font-normal rounded-lg w-52'}>
                     Cancel
                 </button>
                 <ModalReset open={openModal}/>
         </div>
        </>
    );
};

export default Forgot;