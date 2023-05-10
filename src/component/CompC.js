import { useContext } from "react";
import { Con }  from './CompA';

export default function CompC(props){
    console.log(props.test);
    let context = useContext(Con);
    return (
        <>
            <h1>Hello Component C</h1>
            <h2>{props.test}</h2>
            <h1>{context}</h1>
        </>
    )
}