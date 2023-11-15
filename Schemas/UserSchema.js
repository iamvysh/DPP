const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    movies:[
        {
            movieName:{
                type:String,
            },
            noOfDays:{
                type:Number,
            },
            rent:{
                type:Number,
            }
        }
    ]
    
})

const User=mongoose.model('User',userSchema)
module.exports=User