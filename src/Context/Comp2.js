import Comp3 from "./Comp3";

export default function Comp2(props){
    const name = props.name;
    return (
        <>
            <h1>Component 2</h1>
            <Comp3 name={name}/>
        </>
    )
}