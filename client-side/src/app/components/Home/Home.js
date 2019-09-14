import React from "react";
import {NavLink} from "react-router-dom";

import backgrounds from "../../../data/backgrounds/home";
import {url} from "../../../config/url-config";


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            images: []
        };
    }

// compenentDidMount ------------------------------------------------
    componentDidMount() {

        fetch(`${url}/home-artwork`)
        .then((res) => res.json().then((response) => {
            this.setState((prevState) => {
                return ({
                    images: prevState.images = response
                })
            })
        }))

    }

// render =====================================================
    render() {
        return (

            <main className='landing'>

                {/* Wicked Ways Logo */}
                <img onClick={this.hello} id="full-logo" src={backgrounds.largeLogo} alt="Wicked Ways Logo"></img>
                <nav id="navigation-text">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/">Sign-in</NavLink>
                </nav>

                {this.state.images.map((img, index) => {   
                    return (
                        <NavLink to={`product/${img.id}`} key={img.id}>
                            <div className="artwork">
                                <img className="artwork-image" src={img.mainImageURL} alt={img.description}></img>

                                <div className="artwork-info">

                                    <label htmlFor="name">Name:</label>
                                    <h3 className="artwork-name" name="name">{img.name}</h3>

                                    <label htmlFor="description">Description:</label>
                                    <p className="artwork-description" name="description">{img.description}</p>

                                </div>
                            </div>
                        </NavLink>
                    )
                })}

            </main>

        );
    }

}

export default Home;