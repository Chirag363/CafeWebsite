import ErrorHandler from "../error/error.js";
import {Reservation} from '../models/reservationSchema.js';


export const sendReservation = async (req,res,next) =>{
    const{firstName,lastName,email,phone,date,time} = req.body;
    if(!firstName||!lastName||!email||!phone||!date||!time){
        return next(new ErrorHandler("Please Fill Full reservation form!",400))
    }
    try{
       // Create a reservation object based on request body
    const newReservation = new Reservation({
        firstName,
        lastName,
        email,
        phone,
        date,
        time,
      });
  
      // Save the reservation using the model's create method
      await newReservation.save();
     res.status(200).json({
        success:true,
        message:"Reservation Sent Successfully",
     });
    }catch(error){

        if(error.name==="ValidationError"){
            const validationError = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationError.join(","),400));
        }
        return next(error);
    }
    
};