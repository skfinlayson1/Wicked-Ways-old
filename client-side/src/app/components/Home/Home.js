import React from "react";

import backgrounds from "../../../data/backgrounds/home";
import url from "../../../config/url-config";


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

            <div className='landing'>

                {/* Wicked Ways Logo */}
                <img onClick={this.hello} id="full-logo" src={backgrounds.largeLogo} alt="Wicked Ways Logo"></img>

                {this.state.images.map((img, index) => {   
                    return (
                        <div className="artwork" key={img.id}>
                            <img className="artwork-image" src={img.mainImageURL} alt={img.description}></img>

                            <div className="artwork-info">

                                <label htmlFor="name">Name:</label>
                                <h3 className="artwork-name" name="name">{img.name}</h3>

                                <label htmlFor="description">Description:</label>
                                <p className="artwork-description" name="description">{img.description}</p>

                            </div>
                        </div>
                    )
                })}

            </div>

        );
    }

}

export default Home;