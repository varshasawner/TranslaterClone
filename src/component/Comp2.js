import Comp3 from "./Comp3";

export default function Comp2(props){
    const msg1 = props.msg;
    return (
        <>
            <h1>Comppnent 2</h1>
            <Comp3 msg={msg1}/>
        </>
    )
}