
const Product = require("./models").Product;

module.exports = {

    addProduct(values, filePath, callback) {
        Product.create({
            name: values.name,
            description: values.description,
            type: values.type,
            quantity: values.quantity,
            size: values.size,
            price: values.price,
            hoursOfLabour: values.hoursOfLabour,
            imagePath: filePath
        })
        .then((product) => {
            callback(null, product);
        })
        .catch((err) => {
            callback(err);
        })
    },

    findAll(callback) {
        Product.findAll()
        .then((products) => {
            callback(null, products);
        })
        .catch((err) => {
            callback(err);
        })
    }

}