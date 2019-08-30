import React from "react";

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
        .then((res) => res.json().then((response) => {
            //console.log(response);
            const imgArr = this.state.images;
            for (let objKey in response) {
                //console.log(response[objKey]); ////////////////
                let img = response[objKey].mainImage.data;
                img = Uint8Array.from(img);
                img = new Blob([img], {"type": `image/${response[objKey].ext}`});
                img = URL.createObjectURL(img);
                response[objKey].mainImage = img;
                imgArr.push(response[objKey]);
            }

            this.setState((prevState) => {
                return ({
                    images: prevState.images = imgArr
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
                            <img className="artwork-image" src={img.mainImage} alt={img.description}></img>

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