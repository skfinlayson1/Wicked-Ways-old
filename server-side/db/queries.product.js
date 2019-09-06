
const Product = require("./models").Product;

module.exports = {

    addProduct(values, filePath, additionalImageCount, callback) {
        Product.create({
            name: values.name,
            description: values.description,
            type: values.type,
            quantity: values.quantity,
            size: values.size,
            price: values.price,
            hoursOfLabour: values.hoursOfLabour,
            mainImageURL: filePath,
            additionalImageCount: additionalImageCount
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
    },

    findOne(id, callback) {
        Product.findByPk(id)
        .then((product) => {
            callback(null, product);
        })
        .catch((err) => {
            callback(err);
        })
    }

}