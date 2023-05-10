import { createContext, useState } from "react";
import Comp2 from "./Comp2";
import Comp4 from "./Comp4";
import Comp3 from "./Comp3";

const Context = createContext();
const Data1 = createContext();

export default function Comp1(){
    const [data, setData] = useState("hello Component 4")
    return (
        <>
            <h1>Comppnent 1</h1>
            <Comp2 msg={data}/>
            <Context.Provider value={data}>
                <Data1.Provider value={"data 1 context"}>
                    <Comp4 />
                </Data1.Provider>
            </Context.Provider>
            <Data1.Provider value={"hello"}>
                <Comp3/>
            </Data1.Provider>
        </>
    )
}
export { Context, Data1 };