import { Product } from "../models/Product.js"



export const ProductController = {
    getAllData: (req, res) => {
        Product.find().then(data => {
            res.status(200).send(data)
        }).catch(err => {
            res.status(500).send({ "msg": "Not Found" });
        })
    },
    getById: (req, res) => {
        Product.findById(req.params.id).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            res.status(500).send({"msg":"Not Found"})
        })
    },
    create: (req, res) => {
        Product.create({
            productName: req.body.productName,
            productPrice: req.body.productPrice
        }).then(data => {
            res.status(201).send(data)
        }).catch(err => {
            res.status(500).send({ "msg": "Couldnt created" });
        })
    },
    deleteById: (req, res) => {
        Product.findByIdAndDelete(req.params.id).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({ "msg": "Couldnt created" });
        })
    }
} 