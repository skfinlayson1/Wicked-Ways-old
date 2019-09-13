const request = require("request");
const server = require("../../server");

const sequelize = require("../../db/models/index").sequelize;
const Product = require("../../db/models").Product;

base = "http://localhost";


describe("Product CRUD", () => {

    beforeEach((done) => {
        const values = {
            name: "image",
            description: "image description",
            type: "painting",
            quantity: 5,
            size: "5x5",
            price: 100,
            hoursOfLabour: 50,
            mainImageURL: 'url',
            additionalImageCount: 3 
        }
        this.product;

        sequelize.sync({force:true}).then((res) => {
            Product.create(values).then((product) => {
                this.product = product;
                done();
            })
        })
    })

    describe("#create", () => {

        it("should create a product", (done) => {
            expect(this.product).not.toBeNull();
            expect(this.product.name).toBe("image")        
            done();
        })

    })

    describe("#delete", () => {

        it("should delete a product", (done) => {
            const values = {
                name: "image2",
                description: "image description2",
                type: "painting2",
                quantity: 5,
                size: "5x5",
                price: 100,
                hoursOfLabour: 50,
                mainImageURL: 'url2',
                additionalImageCount: 3 
            }

            Product.create(values).then((product) => {
                Product.findAll().then((products) => {
                    const length = products.length;
                    Product.findByPk(2).then((product) => {
                        product.destroy().then((res) => {
                            Product.findAll().then((products) => {
                                expect(products.length).toBe(length -1);
                                done();
                            })
                        })
                    })

                })
            })

        })

    })



})