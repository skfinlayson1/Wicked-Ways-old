import React from "react";
import {NavLink} from "react-router-dom";

export default function DropDown(props) {

    if (props.menuState) {
        return (
            <nav id="drop-down">

                <NavLink to="/admin/add-product">
                    <h3 onClick={props.toggleMenu}>Add Product</h3>
                </NavLink>

                <NavLink to="/contact">
                    <h3 onClick={props.toggleMenu}>Contact</h3>
                </NavLink>

                <NavLink to="/about">
                    <h3 onClick={props.toggleMenu}>About</h3>
                </NavLink>

            </nav>
        )
    } else {
        return null
    }

}