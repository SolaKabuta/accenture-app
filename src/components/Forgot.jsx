import {useState} from "react";
import ModalReset from "./ModalReset.jsx";
const Forgot = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
         <div className=''>
             <a>
                 <button>Send Reset Code</button>
                 <ModalReset open={openModal}/>
             </a>
         </div>
        </>
    );
};

export default Forgot;