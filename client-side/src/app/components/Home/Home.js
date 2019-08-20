import React from "react";

import backgrounds from "../../../data/backgrounds/home";


class Home extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch("http://localhost:8080/hello")
        .then((res) => {
            console.log(res)
            res.json()
            .then((response) => {
                console.log(response);
            })
        })
    }

    render() {
        return (

            <div className='landing'>

                {/* Wicked Ways Logo */}
                <img id="full-logo" src={backgrounds.largeLogo} alt="Wicked Ways Logo"></img>


            </div>

        );
    }

}

export default Home;