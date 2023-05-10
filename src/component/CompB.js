import CompC from "./CompC";

export default function CompB(props){
    let data = props.test;

    return (
        <>
            <CompC test={data}/>
            
        </>
    )
}