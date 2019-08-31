import React from 'react';

import url from "../../../../config/url-config";

class AddProduct extends React.Component {

    constructor() {
        super();

        this.state = {
            mainImage: {},
            additionalImages: [],
            values: {}
        }
    }

// refs -------------------------------------------------------------
    mainImage = React.createRef();
    extraImages = React.createRef();

// topImage -------------------------------------------------------------------
    topImage = (e) => {
        const image = e.target.files[0];

        this.setState(prevState => {
            return {
                mainImage: prevState.mainImage = image
            }
        })
    }

// additionalImages ------------------------------------------------------------
    additionalImages = (e) => {
        const image = e.target.files[0];
        const blob = new Blob([image], {"type": "image/jpg"});
        const imageArray = this.state.additionalImages;

        imageArray.push(blob);

        this.setState((prevState) => {
            return {
                additionalImages: prevState.additionalImages = imageArray
            }
        })

    }

// handleChange --------------------------------------------------------------------
    handleChange = (e, key) => {
        const value = e.target.value;
        const valuesObject = this.state.values;
        valuesObject[key] = value;

        this.setState(prevState => {
            return { values: prevState.values = valuesObject }
        })
    }

// handleSubmit --------------------------------------------------------------------
    handleSubmit = (e) => {

        e.preventDefault();
        const fd = new FormData();

        // add all of the current states values except for the additionalImages array
        for (let objKey in this.state) {
            if (objKey !== "additionalImages") {
                fd.append(objKey, this.state[objKey]);
            };
        };

        // loop through additionalImages and add them so they can be parsed correctly
        this.state.additionalImages.forEach((image, num) => {
            fd.append(`image${num}`, image)
        })

        fetch(`${url}/admin/add-product`, {
            method: 'POST',
            body: fd,
        })
        .then((res) => {
            res.json()
                .then((response) => {
                    console.log(response);
                })
        });

    } 



// render ===================================================================
    render() {

        return (
            <div id="add-product">

                <form id="product-form">

                    <h1 className="product-form-text">Add Product</h1>

                    {/* Main */}
                    <div className="form-section">
                        <label htmlFor="main">Main Image</label>
                        <input type="file" id='main-image' name='main' ref={this.fileInput} onChange={this.topImage}></input>
                    </div>

                    {/* Extras */}
                    <div className="form-section">
                        <label htmlFor="extras">Extra Images</label>
                        <input type='file' id="extra-images" name='extras' ref={this.extraImages} onChange={this.additionalImages}></input>
                    </div>

                    {/* Name */}
                    <div className="form-section">
                        <label htmlFor="name">Name</label>
                        <input type='text' id="artwork-name" name="name" placeholder="Name of Product" onChange={e => this.handleChange(e, "name")}></input>
                    </div>

                    {/* Description */}
                    <div className="form-section">
                        <label htmlFor="description">Description</label>
                        <input type='text' id="artwork-description" name="description" placeholder="Description of Product" onChange={e => this.handleChange(e, "description")}></input>
                    </div>

                    <div className="form-section">
                        <label htmlFor="type">Type of Product</label>
                        <input type='text' id="artwork-type" name="type" placeholder="Type of Product" onChange={e => this.handleChange(e, "type")}></input>
                    </div>

                    {/* Quantity, Size, Price, Labour */}
                    <div className="form-section" id="technicals">

                        <div className="info-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type='text' id="artwork-quantity" name="quantity" placeholder="Quantity"  onChange={e => this.handleChange(e, "quantity")}></input>                        
                        </div>

                        <div className="info-group">
                            <label htmlFor="size">Dimensions</label>
                            <input type='text' id="artwork-size" name="size" placeholder="Size" onChange={e => this.handleChange(e, "size")}></input>                            
                        </div>

                        <div className="info-group">
                            <label htmlFor="price">Price</label>
                            <input type='text' id="artwork-price" name="price" placeholder="Price" onChange={e => this.handleChange(e, "price")}></input>                            
                        </div>

                        <div className="info-group">
                            <label htmlFor="labour">Hours to Create</label>
                            <input type='text' id="artwork-labour" name="labour" placeholder="Hours" onChange={e => this.handleChange(e, "hoursOfLabour")}></input>                            
                        </div>

                    </div>

                    {/* Submit */}
                    <button id="submit-button" onClick={this.handleSubmit}>Submit</button>
                </form>

            </div>
        )

    }

}

export default AddProduct;