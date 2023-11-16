const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
            },
    movies:[
        {
            movieName:{
                type:String,
                required:true
            },
            noOfDays:{
                type:Number,
            },
            rent:{
                type:Number,
            }
        }
    ],
    totalAmount:{
        type:Number,
        
        
    }
    
})

const User=mongoose.model('User',userSchema)
module.exports=User