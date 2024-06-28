import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"Cafe",
    }).then(() =>{
        console.log("Connected to db succ!");

    })
    .catch((err) =>{
        console.log(`SOme Error Occured! ${err}`);

    })
};

