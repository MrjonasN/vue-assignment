const mongodb = require('mongoose')
const Product = require('./productSchema')

exports.registerProduct = (req, res) => {
    try {
        for (current of req.body) {
            let product = new Product({

                _id: new mongodb.Types.ObjectId,
                name: current.name,
                short: current.short,
                desc: current.desc,
                price: current.price,
                image: current.image

            })

            product.save()
        }

        return res.status(200).json()
    }
    catch {
        return res.status(400).json()
    }
}

exports.getProducts = (req, res) => {
    Product.find(Product)
    .then(product => {
        
        if(product === null)
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: "Unable to find products",                
            })
        
        return res.status(200).json({
            statusCode: 200,
            status: true,
            product          
        })
    })
    .catch(error => res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Unable to find products",     
    }))

}

exports.getProductById = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => {
            if (product != null) {
                return res.status(200).json(product)
            }

            res.status(404).json([])
        })
        .catch(error => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Unable to get product. Please contact the System Administrator.'
            })
        })
}