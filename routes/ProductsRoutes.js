import express from "express";
import { ProductController } from "../controllers/ProductsController.js";
import { validate } from "../middleware/validation.js";
import { body } from "express-validator";

export const productsRouter = express.Router();


productsRouter.get('/', ProductController.getAllData)
productsRouter.get('/:id', ProductController.getById)
productsRouter.post(
    '/',
    [body('productName').notEmpty().isString().isLength(3, 15).withMessage("Fill the product name field properly!")],
    [body('productPrice').notEmpty()],
    validate,
    ProductController.create)
productsRouter.delete('/:id', ProductController.deleteById)