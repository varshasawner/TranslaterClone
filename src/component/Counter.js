import { useReducer, useState } from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import PropTypes from 'prop-types';

export default function Counter(props){
    const initialState = 0;
    const reducer = (state, action) => {
        if(action === "increment"){
            return state+1;
        }else{
            return state-1;
        }
    }
   const [data, dispatch] =  useReducer(reducer, initialState);
    return (
        <>
            <h1>{data}</h1>
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>
            <h1><TiAdjustBrightness /></h1>
            <h1>{props.action}</h1>
            <h1>{props.email}</h1>
            <h1>{props.age}</h1>
        </>
    )
}

Counter.propTypes = {
    action : PropTypes.string,
    email : PropTypes.string,
    age : PropTypes.number
}

