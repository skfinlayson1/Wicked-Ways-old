
function imageLoader(utf8Array) {

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
        const seperator = unicodeArray[i + 1] === 34 && unicodeArray[i + 2] === 44 && unicodeArray[i + 3] === 34;
        const endOfArray = unicodeArray[i + 1] === undefined;
        if (seperator || endOfArray) {
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

    return imageArray;

}

export default imageLoader;