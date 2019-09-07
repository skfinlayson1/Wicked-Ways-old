import React from "react";

import {url, cloudinaryUrl} from "../../../config/url-config"; 

import Errors from "../Errors";
import AdditionalImage from "./Additional_Image";

class Product extends React.Component {
    
    constructor() {
        super();
        this.state = {
            shownImage: "",
            enlarged: false,
            values: {},
            additionalImageUrl: [],
            errors: null
        }
    }

    componentDidMount() {
        fetch(`${url}/products/${this.props.match.params.id}`)
        .then((res) => res.json(res).then((response) => {
            if (response.errors) {
                // Set the states errors object so the Error component can render them
                this.setState((prevState) => {return {errors: prevState.errors = response.errors}})
            } else {
                const urls = [{name: "main", url: response.mainImageURL}];
                const folderName = response.name.split(" ").join("_");
                // Create the URL's that point to the additional images being hosted on cloundinary
                for (let i = 1; i <= response.additionalImageCount; i ++) {
                    urls.push({
                        name: `image${i}`,
                        url: `${cloudinaryUrl}/${folderName}/image${i}`
                    })
                }

                this.setState((prevState) => {
                    return {
                        shownImage: prevState.shownImage = response.mainImageURL,
                        values: prevState.values = response,
                        additionalImageUrl: prevState.additionalImageUrl = urls
                    }
                })
            }
        }))
    }

    changeImage = (imageUrl) => {
        this.setState((prevState) => {return {shownImage: prevState.shownImage = imageUrl}})
    }

    enlargeImage = () => {
        this.setState((prevState) => {return {enlarged: !prevState.enlarged}})
    }

    render() {
        const largeImageStyle = this.state.enlarged ?
            `#show-content {display: none} .enlarged-image {display: block}` :
            `#show-content {display: block} .enlarged-image {display: none}`;
        return (
            <main id="product">
                <style>{largeImageStyle}</style>
                <Errors errors={this.state.errors} />

                <h4 id="exit-text" className="enlarged-image">( Click anywhere to minimize )</h4>
                <img className="enlarged-image" src={this.state.shownImage} alt="Enlarged selected photograph" onClick={this.enlargeImage}></img>

                <div id="show-content">

                    <img id="shown-image" src={this.state.shownImage} alt="the currently selected photograph" onClick={this.enlargeImage}></img>

                    <div id="additional-image-container">
                        {this.state.additionalImageUrl.map((img) => {
                            return <AdditionalImage image={img}
                                                    shownImage={this.state.shownImage}
                                                    changeImage={this.changeImage}
                                                    key={img.name} />
                        })}
                    </div>

                    <div id="product-description-container">
                        <h2>{this.state.values.name}</h2>
                        <h3>{this.state.values.description}</h3>
                        <div id="description-small-values">
                            <h4>Type: {this.state.values.type}</h4>
                            <h4>Quantity: {this.state.values.quantity}</h4>
                        </div>
                        <label htmlFor="size">Dimensions</label>
                        <h4 name="size">{this.state.values.size}</h4>
                        <h2>Price: ${this.state.values.price}</h2>
                        
                    </div>
                </div>

            </main>
        )
    }
}

export default Product;