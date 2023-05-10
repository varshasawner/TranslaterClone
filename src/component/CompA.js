import { createContext, useState } from "react";
import CompB from "./CompB";
import CompC from "./CompC";

const Con = createContext();

function CompA(){
    const [data, setData] = useState("hello Prop");
    const [data1, setData1] = useState("hello context");

    return (
        <>
            <CompB test={data}/>
            <Con.Provider value={data1}>
                <CompC/>
            </Con.Provider>
        </>
    )
}

export default CompA ;
export { Con };