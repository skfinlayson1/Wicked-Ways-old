const productQueries = require("../db/queries.product");

module.exports = {

    show(req, res, next) {
        const id = req.params.id;
        
        productQueries.findOne(id, (err, product) => {
            if (err || !product) {
                res.json({errors: [{msg: err.msg || "Product couldn't be found"}]} || product);
            } else {
                res.json(product);
            }
        })
    }

}