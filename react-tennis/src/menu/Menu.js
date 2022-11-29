import './Menu.css';
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div id="Menu">
            <div id="ButtonList">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/omkl">Omkl</NavLink>
                <NavLink to="/bastu">Bastu</NavLink>
            </div>
        </div>
        );
}

export default Menu;