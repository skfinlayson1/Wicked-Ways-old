import React from "react";
import {NavLink} from 'react-router-dom';

import icons from "../../../data/icons/navbar_images";
//import CSS from './navbarCSS';

class Navbar extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <nav id='navigation'>

                <NavLink to="/">
                    <img className='home' src={icons.homeHeader} alt="Home"></img>    
                </NavLink>
                
                <img className='small-logo' src={icons.logo} alt="Wicked Ways"></img>
                
                <NavLink to='/admin/add-product'>
                    <img className='menu' src={icons.menuHeader} alt="Menu"></img>
                </NavLink>

                
            </nav>


        );
    }

}

export default Navbar;