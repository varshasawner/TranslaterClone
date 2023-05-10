import { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";

export default function Navigation() {
  
  const [active, setActive] = useState("");
  return (
    <>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              setActive("home");
              window.history.pushState("/home", "/Home", "home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setActive("contact");
              window.history.pushState("/contact", "/Contact", "contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      {active === "home" && <Home />}
      {active === "contact" && <Contact />}

      <h1 id="one">hello</h1>
    </>
  );
}
