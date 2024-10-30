import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {

    return (
        
           
        <nav className=" bg-purple-400 text-2xl p-4 ">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/countries">Country</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
        
        </nav>
     
    );
};

export default Header;