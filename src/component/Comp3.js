import Comp4 from "./Comp4";

export default function Comp3(props){
    const msg1 = props.msg;
    return (
        <>
            <h1>Comppnent 3</h1>
            <Comp4 msg={msg1}/>
        </>
    )
}