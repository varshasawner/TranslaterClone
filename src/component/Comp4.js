import { useContext } from "react"
import { Context, Data1 } from "./Comp1";

export default function Comp4(props){
    const user = useContext(Context);
    const user1 = useContext(Data1);
    return (
        <>
            <h1>Comp0nent 4</h1>
            <h2>{props.msg}</h2>
            <p>{user}</p>
            <p>{user1}</p>
        </>
    )
}