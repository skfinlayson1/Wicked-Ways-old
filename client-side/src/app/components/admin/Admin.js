import React from "react";
import {Route, NavLink} from "react-router-dom";

import AddProduct from "./Add-product";

class Admin extends React.Component {

    constructor() {
        super();
        this.state = {}
    }
    
    render() {
        return (
            <main>

                <h1>Welcome Admin</h1>

                <NavLink to="/admin/add-product">Add Product</NavLink>

                <Route path="/admin/add-product" component={AddProduct} />

            </main>
        )
    }
}

export default Admin