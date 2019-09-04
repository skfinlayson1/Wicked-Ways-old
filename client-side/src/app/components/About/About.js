import React from "react";
import {NavLink} from "react-router-dom";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            showMore: false
        }
    }

    showContent = () => {
        this.setState(prevState => {
            return { showMore: !prevState.showMore }
        })
    }

    render() { 

        const style = `
            #production div {display: block}
            .show-less-button {display: block}
            #show-more-button {display: none}
        `

        return (
            <main id="about">
{/* Creation */}
                <section id="creation">
                    <h1>How It All Got Started</h1>
                    <p>
                        <b>Wicked Ways is a small business created by Shane Finlayson. </b>
                        It started with a Honda VTX 1800 that needed a paint job and grew
                        into a passion for art and it's creation.
                    </p>
                </section>
{/* Production */}
                <section id="production">

                    <h1>How Custom Orders Are Handled</h1>

                    <p>
                        From the beginning to the end of the creation of your product you will be informed
                        on it's status. Through emails, phone calls and pictures you'll always know what is
                        going on and how far along your purchase is. 
                    </p>

                    {this.state.showMore ? <style>{style}</style> : null}
                    <h4 id="show-more-button" onClick={this.showContent}>Show More</h4>
                    <h4 className="show-less-button" onClick={this.showContent}>Show Less</h4>

                    <div id="production-design">
                        <h3>Design</h3>

                        <p>
                            <b>This is the most important stage and takes a lot of input on your side.</b>
                            We first need to findout what you desire and what process we need to take to
                            create it. You may have a perfect design or image in your mind which is great! <b>But</b>, 
                            helping us understand your idea is the challenge. 
                        </p>

                        <p>
                            The more high quality images that you can find either on the internet, or personal pictures you already may have 
                            that represent what you want or show pieces of what you want greatly help. If you have the time,
                            rough drawings or sketches you can create will drastically help us, they don't have to be good but 
                            it will difinitely aid us with the design process so we can create the product you truely want!
                        </p>

                        <p>
                            A lot of contact between us will be needed during this step. We will send you images 
                            we are refrencing and rough sketches to confirm we are heading down the right path or 
                            if we need to change directions. <b>Keep in mind</b>, the images we send you won't be images 
                            representing the final product. To keep this step as short as possible, we will only be 
                            creating rough drawings, so you can have an <b>idea</b> of what the final product will look like.
                        </p>
                    </div>

                    <div id="production-finalize">

                        <h3>Confirm the Concept</h3>

                        <p>
                            This is where you will confirm the polished rough sketch before it goes into the creation phase
                        </p>

                        <p>
                            The sketch you approve won't be a representation of the final product either. It just represents 
                            the flow of the artwork, for example: If you wanted an image of a wolf, this sketch would 
                            represent things such as, how the body is positioned, the background (if any), how the head 
                            will look (howling, snarling, resting, etc) and any other large details. This image does NOT 
                            represent smaller things such as hair textures, exact face structure, colors and any other small 
                            details that create a quality product.
                        </p>

                        <p>
                            The reason why this drawing isn't intended to be an exact match but more of a concept of the 
                            final product is due to the amount of time it would take to create such a drawing. By doing 
                            a concept drawing instead, we can keep the cost down and allow for more time to be spent during the 
                            creation phase.
                        </p>

                        <p>
                            Their is a bit of a challenge when it comes to color. The exact color from an image displayed on a 
                            computer or printed out on a printer varies between different manufactors so if you wish for a more 
                            precise color in your product you will have to mail a physical representation of that color. Do keep 
                            in mind that all colors are hand mixed and a perfect match to the hue of the color may not be possible.
                        </p>

                    </div>

                    <div id="production-creation">

                        <h3>Creation</h3>

                        <p>
                            This is where the magic happens, during this process you will receive images and updates on your product 
                            so you can follow the progress and know how far along your order is.
                        </p>

                    </div>

                    <div id="production-finished">

                        <h3>Finish</h3>

                        <p>
                            The phase you have been awaiting is here. The product is finished, and ready to be delivered personally 
                            or by mail depending on your location. You will be sent an image of the product and an estimation of 
                            it's delivery.
                        </p>

                    </div>

                    <h4 className="show-less-button" onClick={this.showContent}>Show Less</h4>

                </section>
{/* Products Used */}
                <section id="products-used">
                    <h1>The Products We Use</h1>
                    <p>
                        <b>When it comes to the airbrush artwork, only <a href="https://www.houseofkolor.com/homepage/" target="_blank" rel="noopener noreferrer">House of Kolor</a> paint is used.</b>
                    </p>
                    <p>
                        To help make sure your product lasts, only the best products are used to create your piece of art.
                        From the Iwata airbrushes and spray guns to the House of Kolor paint and <a href="https://www.orafol.com/en/americas/" target="_blank" rel="noopener noreferrer">ORAFOL</a>vinyl, no corners
                        are cut.
                    </p>
                    <p>
                        Making sure you receive high quallity work, not just from the process in which it's made
                        but also from the products it's made from.
                    </p>
                </section>
{/* Price */}
                <section> 
                    <h1>Price</h1>

                    <p>
                        The most important question and the hardest to answer, "how much will this cost me?" This question 
                        is a lot like asking how much does a car cost. It all depends on what type of car you want? Do you 
                        want a luxury car? Do you want it to be new? Do you see how this becomes a complex question? The 
                        best way is to send us an email with images (if availbale) and a description of what you want and 
                        what you would like it on. You may also give us a call at...
                    </p>
                    <p>    
                        <b>(801) 953-7219</b>
                    </p>
                </section>

{/* Reminder */}
                <section id="reminder">
                    <h1>Feel Free To Give Us A Call!</h1>

                    <p>Or, see a list of ways to get a hold of us <NavLink to="/contact">here.</NavLink></p>
                </section>

            </main>
        )
    };
};

export default About;