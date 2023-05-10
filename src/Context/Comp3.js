import Comp4 from "./Comp4";

export default function Comp3(props){
    const name = props.name;
    return (
        <>
            <h1>Component 3</h1>
            <Comp4 name ={name}/>
        </>
    )
}