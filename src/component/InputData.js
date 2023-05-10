// import { forwardRef } from "react"
import PropTypes from 'prop-types';

export default function InputData(props){
    return (
        <>
             <input type="text"/>
             <h1>
                {props.name}
                {props.age}
             </h1>
        </>
    )
}
InputData.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
}

// export default forwardRef(InputData);
