import React from "react";

import backgrounds from "../../../data/backgrounds/home";
import url from "../../../config/url-config";


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            image: ""
        };
    }

    fileInput = React.createRef();

    componentDidMount() {

    }

    hello = () => {

        fetch(`${url}/hello`)
        .then((res) => {
            console.log(res);
            res.blob()
            .then((res) => {
                console.log(res);
                this.setState({
                    image: URL.createObjectURL(res)
                })

            })
        })
    }

    handleChange = (e) => {

        const fd = new FormData();

        fd.append('image', e.target.files[0])

        fetch(`${url}/upload`, {
          method: 'POST',
          body: fd,
          headers: {
            "Content-Type": "multipart/form-data" 
          }
        })
            .then((res) => {
                res.json()
                    .then((response) => {
                        console.log(response);
                    })
            })

    }

    logIt = (e) => {
        console.log(this.fileInput)
        console.log(this.fileInput.current.value)
        this.setState({
            image: this.fileInput.current.file
        })
        e.preventDefault()
    }

    render() {

        return (

            <div className='landing'>

                {/* Wicked Ways Logo */}
                <img onClick={this.hello} id="full-logo" src={backgrounds.largeLogo} alt="Wicked Ways Logo"></img>
                <img src={this.state.image} alt="logo"></img>

                <form>
                    <input type="file" id='fileInput' ref={this.fileInput} onChange={this.handleChange}></input>
                    <button onClick={this.logIt}>log</button>

                    <button type='submit'>Submit</button>
                </form>

            </div>

        );
    }

}

export default Home;