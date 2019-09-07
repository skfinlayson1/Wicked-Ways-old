import React from 'react';

import {url} from "../../../../config/url-config";
import Errors from "../../Errors";

class AddProduct extends React.Component {

    constructor() {
        super();

        this.state = {
            mainImage: {},
            mainImageUrl: [],
            additionalImages: [],
            additionalImagesUrls: [],
            values: {},
            loading: false,
            errors: null
        }
    }

// Add the main image --------------------------------------------------
    topImage = (e) => {
        const image = e.target.files[0];

        const blob = new Blob([image], {"type": "image/jpg"});
        const url = URL.createObjectURL(blob);

        this.setState(prevState => {
            return {
                mainImage: prevState.mainImage = image,
                mainImageUrl: prevState.mainImageUrl = [{imageUrl:url}] 
            }
        })
    }

// Remove the main image -----------------------------------------
    removeTopImage = () => {
        this.setState(prevState => {
            return {
                mainImage: prevState.mainImage = {},
                mainImageUrl: prevState.mainImageUrl = []
            }
        })
    }

// Add additional images -----------------------------------------
    additionalImages = (e) => {
        const image = e.target.files[0];
        const imageArray = this.state.additionalImages;
        const imageUrlArray = this.state.additionalImagesUrls;
        let duplicate = image.name === this.state.mainImage.name;
        // Set the errors state back to null and check if the image has a duplicated name
        this.setState((prevState) => {return {errors: prevState.errors = null}});
        imageUrlArray.forEach(img => img.name === image.name ? duplicate = true : null);

        if (image && !duplicate) {
            const ext = image.name.split(".").pop()
            const blob = new Blob([image], {"type": `image/${ext}`});
            const url = URL.createObjectURL(blob);

            imageUrlArray.push({name: image.name, imageUrl: url});
            imageArray.push(image);
            // Push the file to additionalImages and the url to additionalIamgesUrls
            this.setState((prevState) => {
                return {
                    additionalImages: prevState.additionalImages = imageArray,
                    additionalImagesUrls: prevState.additionalImagesUrls = imageUrlArray
                }
            })
        } else {
            // Return an error for bad files or duplicated image names.
            this.setState((prevState) => {return { errors: prevState.errors = [{msg: "Image name already present or image not valid"}]}})
        }

    }

// Remove an additional image ----------------------------------------
    removeAdditionalImage = (name) => {

        const additionalImages = this.state.additionalImages; 
        const additionalImagUrls = this.state.additionalImagesUrls;
        // Filter "name" from where both the files and urls are stored
        const imageRemoved = additionalImages.filter((img) => img.name !== name);
        const urlRemoved = additionalImagUrls.filter((img) => img.name !== name);

        this.setState((prevState) => {
            return {
                additionalImages: prevState.additionalImages = imageRemoved,
                additionalImagesUrls: prevState.additionalImagesUrls = urlRemoved
            }
        })
    }

// Handle any text change --------------------------------------------
    handleChange = (e, key) => {

        const value = e.target.value;
        const valuesObject = this.state.values;
        // Add the value to where the "key" parameter points
        valuesObject[key] = value;

        this.setState(prevState => {
            return { values: prevState.values = valuesObject }
        })
    }

// Handle submit -----------------------------------------------------
    handleSubmit = (e) => {
        this.setState((prevState) => {return {loading: !prevState.loading}})

        const fd = new FormData();
        // Append the text values for the artwork
        for (let oKey in this.state.values) {
            fd.append(oKey, this.state.values[oKey]);
        };
        // Append the main image
        fd.append("mainImage", this.state.mainImage);
        // loop through additionalImages and add them individually so they can be parsed correctly
        this.state.additionalImages.forEach((image, num) => {
            fd.append(`image${num}`, image)
        });

        fetch(`${url}/admin/add-product`, {
            method: 'POST',
            body: fd,
        })
        .then((res) => {
            res.json().then((response) => {
                this.setState((prevState) => { return { loading: !prevState.loading, errors: prevState.errors = null }})
                if (response.errors) {
                    this.handleError(response.errors)
                } else {
                    this.setState((prevState) => {
                        return {
                            mainImage: prevState.mainImage = {},
                            mainImageUrl: prevState.mainImageUrl = [],
                            additionalImages: prevState.additionalImages = [],
                            additionalImagesUrls: prevState.additionalImagUrls = [],
                            values: prevState.values = {}
                        }
                    })
                }
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

// Handle any errors thrown -------------------------------------------------
    handleError = (err) => {
        this.setState((prevState) => {
            return {errors: prevState.errors = err}
        })
    }



// render ===================================================================
    render() {
        const values = this.state.values;
        return (
            <div id="add-product">

                <Errors errors={this.state.errors} />

                <form id="product-form">
                    <h1 className="product-form-text">Add Product</h1>

                    <h3>Details</h3>
                    {/* Main */}
                    <div className="form-section">
                        <label htmlFor="main">Main Image (click on image to remove)</label>
                        <input type="file" id='main-image' name='main' onChange={this.topImage}></input>
                        {this.state.mainImageUrl.map((img, index) => {
                            return <img id="main-image-input" src={img.imageUrl} alt="selected main upload" key={index} onClick={this.removeTopImage}></img>
                        })}
                    </div>

                    {/* Extras */}
                    <div className="form-section">
                        <label htmlFor="extras">Extra Images (click on image to remove)</label>
                        <input type='file' id="extra-images" name='extras' onChange={this.additionalImages}></input>

                        <div id="extra-images-input">
                            {this.state.additionalImagesUrls.map((img) => {
                                const name = img.name;
                                return <img className="extra-image" src={img.imageUrl} alt="Extras" key={img.name} onClick={() => this.removeAdditionalImage(name)}></img>
                            })}
                        </div>
                    </div>

                    {/* Name */}
                    <div className="form-section">
                        <label htmlFor="name">Name</label>
                        <input  type='text'
                                id="artwork-name"
                                name="name" placeholder="Name of Product" 
                                onChange={e => this.handleChange(e, "name")} 
                                value={values.name ? values.name : ""}></input>
                    </div>

                    {/* Description */}
                    <div className="form-section">
                        <label htmlFor="description">Description</label>
                        <input  type='text'
                                id="artwork-description"
                                name="description"
                                placeholder="Description of Product"
                                onChange={e => this.handleChange(e, "description")}
                                value={values.description ? values.description : ""}></input>
                    </div>

                    {/* Type */}
                    <div className="form-section">
                        <label htmlFor="type">Type of Product</label>
                        <input  type='text'
                                id="artwork-type"
                                name="type"
                                placeholder="Type of Product"
                                onChange={e => this.handleChange(e, "type")}
                                value={values.type ? values.type : ""}></input>
                    </div>

                    {/* Height, Width, Depth */}
                    <div className="form-section">
                            <h3>Dimensions</h3>
                            <div id="sizes">

                                <div className="dimensions">
                                    <label htmlFor="">Height</label>
                                    <input  type='text'
                                            id="artwork-height"
                                            placeholder="H"
                                            onChange={e => this.handleChange(e, "height")}
                                            value={values.height ? values.height : ""}>
                                    </input>
                                </div>

                                <div className="dimensions">
                                    <label htmlFor="">Width</label>
                                    <input  type="text"
                                            id="artwork-width"
                                            placeholder="W"
                                            onChange={e => this.handleChange(e, "width")}
                                            value={values.width ? values.width : ""}>
                                    </input>
                                </div>

                                <div className="dimensions">
                                    <label htmlFor="">Depth</label>
                                    <input  type="text"
                                            id="artwork-depth"
                                            placeholder="D"
                                            onChange={e => this.handleChange(e, "depth")}
                                            value={values.depth ? values.depth : ""}>
                                    </input>
                                </div>

                            </div>
                        </div>

                    {/* Quantity, Price, Labour */}
                    <div className="form-section" id="technicals">
                        <h3>Amounts</h3>

                        <div className="info-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input  type='text'
                                    id="artwork-quantity"
                                    name="quantity"
                                    placeholder="Quantity"
                                    onChange={e => this.handleChange(e, "quantity")}
                                    value={values.quantity ? values.quantity : ""}></input>                        
                        </div>

                        <div className="info-group">
                            <label htmlFor="price">Price</label>
                            <input  type='text'
                                    id="artwork-price"
                                    name="price"
                                    placeholder="Price"
                                    onChange={e => this.handleChange(e, "price")}
                                    value={values.price ? values.price : ""}></input>                            
                        </div>

                        <div className="info-group">
                            <label htmlFor="labour">Hours to Create</label>
                            <input  type='text'
                                    id="artwork-labour"
                                    name="labour"
                                    placeholder="Hours"
                                    onChange={e => this.handleChange(e, "hoursOfLabour")}
                                    value={values.hoursOfLabour ? values.hoursOfLabour : ""}></input>                            
                        </div>

                    </div>

                    {/* Submit */}
                    {this.state.loading ? <h3>Uploading...</h3> :<button id="submit-button" onClick={this.handleSubmit}>Submit</button>}
                </form>

            </div>
        )
    }

}

export default AddProduct;