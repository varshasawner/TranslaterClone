import { forwardRef } from 'react';

function Input(props, refData){
    return (
        <>
            <input type="text" ref={refData}/>
        </>
    )
}

export default forwardRef(Input); 