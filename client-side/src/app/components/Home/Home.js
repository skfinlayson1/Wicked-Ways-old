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
        .then((res) => {
           // console.log(res);
            res.blob()
            .then((response) => {
                //console.log(response)
                // response.forEach((img) => {
                //     // const images = this.state.images;
                //     // images.push(URL.createObjectURL(img));

                //     // this.setState((prevState) => {
                //     //     return {
                //     //         images: prevState.images = images
                //     //     }
                //     // })
                // })
            })
        })

    }

    hello = (e) => {
        e.preventDefault();
        fetch(`${url}/hello`)
        .then((r) => r.text().then((resp) => {

                console.log(resp);
                const blob = new Blob([resp.image1], {"type": "image/jpeg"});

                console.log(blob);

                const image = URL.createObjectURL(blob)

                console.log(image);

                this.setState((prevState) => {
                    return {
                        setup: prevState.setup = image
                    }
                })
            }))
    }

    easyhello = (e) => {
        //e.preventDefault()
        fetch(`${url}/hello2`)
        .then((res) => {
            res.arrayBuffer().then((utf8Array) => {

                const uint8Array = new Uint8Array(utf8Array);

                let unicodeArray = []

                uint8Array.forEach((val) => {
                    unicodeArray.push(val);
                })

                // Remove unicode for the brackets and quotation marks on the ends
                unicodeArray.shift();
                unicodeArray.shift();
                unicodeArray.pop();
                unicodeArray.pop();

                // Array to store the unicode for all the images
                let imageArray = [];
                // Array to temporarily hold each image's individual unicode 
                let array = [];

                // Loop through the entire unicode and look for the unicode for ","
                // and remove it, then push that unicode to 'imageArray'
                for (let i = 0; i < unicodeArray.length; i ++) {
                    array.push(unicodeArray[i]);
                    // Look for the unicode numbers for "," or the end of the file itself
                    if (unicodeArray[i + 1] === 34 && unicodeArray[i + 2] === 44 && unicodeArray[i + 3] === 34 || unicodeArray[i + 1] === undefined) {
                        imageArray.push(array);
                        array = [];
                        i += 3;
                    }
                }

                // Convert the unicoded unicode and bring it up one level [EXAMPLE] turn [50, 53, 53] into [255]
                imageArray.forEach((img, i) => {
                    let str = "";
                    img.forEach((num) => {
                        str += String.fromCharCode(num)
                    })
                    str = Uint8Array.from( str.split(" ") );
                    imageArray[i] = [str];                                  
                })

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
                
                // const blob = new Blob([imageArray[0][0]], {"type": "image/jpg"})

                // const image = URL.createObjectURL(blob)

                // this.setState({
                //     setup: image
                // })


            })
        })

    }

// render =====================================================
    render() {

        return (

            <div className='landing'>

                {/* Wicked Ways Logo */}
                <img id="full-logo" src={backgrounds.largeLogo} alt="Wicked Ways Logo"></img>

                <h1 onClick={this.hello}>HELLO</h1>
                <img src={this.state.setup} alt="hi"></img>

                <h1 onClick={this.easyhello}>EasyHELLO</h1>
                <img src={this.state.setup2} alt="hi"></img>

                {this.state.setup.map((img, index) => {   
                    return (
                        <img src={img} key={index} alt={index}></img>
                    )
                })}

            </div>

        );
    }

}

export default Home;