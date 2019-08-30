import React from "react";

import imageLoader from "../../helpers/image_loader";
import backgrounds from "../../../data/backgrounds/home";
import url from "../../../config/url-config";


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            images: [],
            setup: [],
            setup2: "",
        };
    }

// compenentDidMount ------------------------------------------------
    componentDidMount() {

        fetch(`${url}/home-artwork`)
        .then((res) => {
            res.arrayBuffer().then((utf8Array) => {

                const imageArray = imageLoader(utf8Array)

                imageArray.forEach((imageArray) => {
                    const blob = new Blob([imageArray[0]], {"type": "image/jpg"});
                    const image = URL.createObjectURL(blob);
                    const images = this.state.setup;
                    images.push(image);
                    this.setState((prevState) => {
                        return {
                            setup: prevState.setup = images
                        }
                    })
                })

            })
        })

    }

// render =====================================================
    render() {

        return (

            <div className='landing'>

                {/* Wicked Ways Logo */}
                <img id="full-logo" src={backgrounds.largeLogo} alt="Wicked Ways Logo"></img>

                {this.state.setup.map((img, index) => {   
                    return (
                        <img className="artwork-images" src={img} key={index} alt={index}></img>
                    )
                })}

            </div>

        );
    }

}

export default Home;