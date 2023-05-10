import { useState, createRef } from "react";

import logo from "./logo.svg";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.js";
import Home from "./component/Home";
import About from "./component/About";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./Slider";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Company from "./component/Company";
import Profile from "./component/Profile";
import User from "./component/User";
import Login from "./component/Login";
import Navigation from "./component/Navigation";
import TimeClock from "./component/TimeClock";
import CompA from "./component/CompA";
import Comp1 from "./Context/Comp1";
import Count from "./component/Count";
import Counter from "./component/Counter";
import Translate from "./translate/Index";
import Refhook from "./component/Refhook";
import Test from "./translate/Test";

function App() {
  const [msg, setMsg] = useState("");

  // const ref = createRef();
  // const fun1 = () => {
  //   alert ("hello ")
  // }

  return (
    <div>
      {/* <Comp1 /> */}
      <Test />
      <Translate />
      {/* <Refhook /> */}
      {/* <TimeClock />
      <BrowserRouter>
      <Login />
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="company" element={<Company />}></Route>
          </Route>
          <Route path="/user/:name" element={<User />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* <Navigation />
      <Comp1 /> */}
      {/* <Counter action={20} age={"hello"} email="a@a.a"/> */}

      {/* <Draggable>
        <h1>Hello React</h1>
      </Draggable>
      <img src={logo} height="100px" width="100px"  ref={ref}/>
      <Home msg={msg} fun= {"heloWorld"}/>
      <Router>
        <About />
      </Router> 
       <input type="text" value = {msg} onChange={(e)=>setMsg(e.target.value)}/>
      <button onClick={()=>{exportComponentAsJPEG(ref)}}>Download</button>
      <Slider /> */}
    </div>
  );
}

export default App;

