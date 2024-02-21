const mongoose = require('mongoose');


const VehicleSchema = new mongoose.Schema({
    Name : {
        type:String,
        required:[true,"Please Enter Vehicle name"],
    },
    Veh_number:{
        type:String,
        unique: true,
        required:[true,"Please Enter Vehicle Number"],
    },
    description:{
        type:String,
    },
    Category:{
        type:String,
        required:[true,"Please Enter Vehicle category"],
    },
    Capacity:{
        type:Number,
        required:[true,"Please Enter Vehicle capacity"],
    },
    Mileage:{
        type:Number,
        required:[true,"Please Enter Vehicle Mileage"],
    },
    Brand:{
        type:String,
        required:[true,"Please Enter Vehicle Brand"],
    },
    Rating:{
        type:Number,
        default:0,
    },
    Price:{
            hour:{
                type:Number,
                required:[true,"Please Enter hour charge"],
                default:0,
            },
            day:{
                type:Number,
                required:[true,"Please Enter day charge"],
                default:0,
            }
        }
    ,
    Prevrun:{
        type:Number,
        default:0,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    reviews:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"user",
                required:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    color:{
        type:String,
    },
    Booked:{
        type:Boolean,
        default:false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        // required:true,
    }
});

module.exports = mongoose.model("Vehicle",VehicleSchema);
