import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/user">User</NavLink>
                </li>
            </ul>
        </>
    )
}