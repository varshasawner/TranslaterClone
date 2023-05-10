import { useRef } from "react"
import InputData from "./InputData";

export default function Refhook(){

    const input = useRef();
    const btn = useRef();

    const change = () => {
        input.current.value = "1000";
        input.current.style.color = "red";
        btn.current.style.background = "red";
    }

    return (
        <>
           <InputData ref={input} name = {2000} age="varsha"/>
            <button onClick={change} ref={btn}>Click me</button>  
        </>
    )
}