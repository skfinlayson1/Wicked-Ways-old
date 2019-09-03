import React from "react";


class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main id="contact">

                <h1 id="contact-header-text">Have Questions?</h1>
{/* Phone */}
                <div id="phone">
                    <h1>Phone: (801) 953-7219</h1>
                    <p>Feel free to call with any questions you may have!</p>
                </div>
{/* Email */}
                <div id="email">
                    <h2>Not a Phone Person?</h2>
                    <h1>Email: WickedWaysCustoms @yahoo.com</h1>
                    <p>Email us with any questions you have!</p>
                    <p>
                        Have something in mind already? Attach any pictures 
                        you have to help us determine the best course for you!
                    </p>
 
                </div>
                         
            </main>

        )
    }
}

export default Contact;