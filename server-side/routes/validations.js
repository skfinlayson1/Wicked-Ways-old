const { check, validationResult } = require("express-validator");

module.exports = {

    addProductValidations: [
        check("name", "Name: must be longer than 3 characters").isLength({ min: 3}),
        check("description", "Description: must be longer than 5 characters").isLength({ min: 5 }),
        check("type", "Type: must be longer than 3 characters").isLength({ min: 3 }),
        check("quantity", "Quantity: must be greater than 0").isInt({gt: 0}),
        check("size", "Dimensions: must match the 'size' X 'size' structure").contains("X"),
        check("size", "Dimensions: must not be empty").not().isEmpty(),
        check("price", "Price: must be an integer larger than zero").isInt({gt: 0}),
        check("price", "Price: must not be empty").not().isEmpty(),
        check("hoursOfLabour", "Hours Of Labour: must not be less than 1 hour").isInt({gt: 0})
    ],

    imageValidator(req, res, next) {
        if (!req.files.mainImage) {
            res.json({errors: [{msg: "Must have a main image"}]});
        } else if (Object.keys(req.files).length < 2) {
            res.json({errors: [{msg: "Must have atleast one secondary image"}]});
        } else {
            next();
        }
    },

    validator(req, res, next) {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.json(errors)
        } else {
            next();
        }
    }

}