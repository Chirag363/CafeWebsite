import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required:true,
    minLength:[2,"First name must contain atleast 2 character!"],
    maxLength:[30,"First name must not exceed 30 Chracters!"],
  },
  lastName: {
    type:String,
    required:true,
    minLength:[3,"Last name must contain atleast 3 character!"],
    maxLength:[30,"Last name must not exceed 30 Chracters!"],
  },
  email:{
    type:String ,
    required:true,
    validate:[validator.isEmail,"Provide a Valid Email!"]
  },
  phone:{
    type:String,
    required:true,
    minLength:[10,"Phone no must contain 10 digits"],
    maxLength:[10,"Phone no exceeded 10 digits"],
},
  time:{
    type:String,
    required:true,
  }
});

export const Reservation = mongoose.model("Reservation",reservationSchema);
