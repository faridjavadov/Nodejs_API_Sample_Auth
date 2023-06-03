import  express  from "express";
import mongoose from "mongoose";
import { productsRouter } from "./routes/ProductsRoutes.js";
import { ConnectMongo } from "./config/db.js";
import {authRouter} from './routes/AuthRouter.js'
const app = express();

app.use(express.json());
ConnectMongo();

const ProductRouter = productsRouter
const AuthRouter = authRouter

app.use('/api/products',ProductRouter);
app.use('/api/auth',AuthRouter)


app.listen(8080,()=>{
    console.log("Server is Running");
})
