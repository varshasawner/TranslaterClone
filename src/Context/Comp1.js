import { createContext } from "react";
import Comp2 from "./Comp2";
import Comp4 from "./Comp4";

const Context = createContext();
const City = createContext();

export default function Comp1() {
  return (
    <>
      <h1>Component 1</h1>
      <Comp2 name={"varsha"} />

      <Context.Provider value={"varsha saxena"}>
        <City.Provider value={"indore"}>
          <Comp4 />
        </City.Provider>
      </Context.Provider>
    </>
  );
}
export { Context, City };
