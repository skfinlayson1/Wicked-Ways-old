import React from "react";

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

                <img className='home' src={icons.homeHeader} alt="Home"></img>
                <img className='small-logo' src={icons.logo} alt="Wicked Ways"></img>
                <img className='menu' src={icons.menuHeader} alt="Menu"></img>
                
            </nav>


        );
    }

}

export default Navbar;