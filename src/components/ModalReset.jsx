import React from 'react';

const ModalReset = ({open}) => {
    if(!open) return null
    return (
        <div>
            <p>I am a Modal</p>
        </div>
    );
};

export default ModalReset;