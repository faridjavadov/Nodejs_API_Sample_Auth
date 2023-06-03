import express from "express";
import { ProductController } from "../controllers/ProductsController.js";
import { validate } from "../middleware/validation.js";
import { body } from "express-validator";
import { AuthController } from "../controllers/UsersController.js";


export const authRouter = express.Router();

authRouter.get('/', AuthController.getData)
authRouter.get('/:id', AuthController.getDataById)
authRouter.post('/registration',
    [body('name').notEmpty().isString().withMessage("Couldnt Created")],
    [body('surname').notEmpty().isString().withMessage("Couldnt Created")],
    [body('email').notEmpty().isEmail().withMessage("Couldnt Created")],
    [body('password').notEmpty().isAlphanumeric().isLength(5, 30).withMessage("Couldnt Created")],
    validate
    , AuthController.createUser

)
authRouter.post('/login',
    [body('email').notEmpty().isEmail()],
    [body('password').notEmpty().isAlphanumeric().isLength(5, 30)],
    validate,
    AuthController.loginUser
)
authRouter.delete('/:id', AuthController.deleteUser);
authRouter.put('/:id',
    [body('name').notEmpty().isString().withMessage("Couldnt Updated")],
    [body('surname').notEmpty().isString().withMessage("Couldnt Updated")],
    [body('password').notEmpty().isString().isLength(5, 30).withMessage("Couldnt Updated")],
    validate,
    AuthController.editUser);

