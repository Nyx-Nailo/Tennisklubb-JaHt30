import { NavLink } from "react-router-dom";
import { useState } from "react";


function Menu() {

    const [openBoka, setOpenBoka] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);

    return (
        <div id="Menu">
            <div id="ButtonList">
                <NavLink to="/" onClick={() => { setOpenBoka(false); setOpenInfo(false) }}>Home</NavLink>
                <div id="BokaTrigger" onClick={() => { setOpenBoka(!openBoka); setOpenInfo(false) }}>Boka</div>
                <div id="InfoTrigger" onClick={() => { setOpenInfo(!openInfo); setOpenBoka(false) }}>Info</div>
            </div>
            <div class={`BokaDropdown ${openBoka ? "active" : "inactive"} `}>
                <NavLink to="/banor" onClick={() => { setOpenBoka(false); setOpenInfo(false) }}>Banor</NavLink>
                <NavLink to="/bastu" onClick={() => { setOpenBoka(false); setOpenInfo(false) }}>Bastu</NavLink>
            </div>
            <div class={`BokaDropdown ${openInfo ? "active" : "inactive"} `}>
                <NavLink to="/banor-info" onClick={() => { setOpenBoka(false); setOpenInfo(false) }}>Banor</NavLink>
                <NavLink to="/omkl-info" onClick={() => { setOpenBoka(false); setOpenInfo(false) }}>Omklädningsrum</NavLink>
                <NavLink to="/bastu-info" onClick={() => { setOpenBoka(false); setOpenInfo(false) }}>Bastu</NavLink>
            </div>
            
        </div>
        );
}

export default Menu;