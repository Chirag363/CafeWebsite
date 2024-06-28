import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from './database/dbConnection.js';
import {errorMiddleware} from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path : "./config/config.env"});

//to connect back to front
app.use(
    cors({
    origin: [process.env.FrontEnd_Url], //path of frotend jite backend la connect karai cha ahe
    methods:["POST"], //which methods to be used
    credentials:true,

}))


app.use(express.json());//middleware, convert string to obj
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter)
dbConnection();

app.use(errorMiddleware);

export default app;