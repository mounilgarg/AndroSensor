const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema(
    {
        X:{
            type:Number,
        },
        Y:{
            type:Number,
        },
        Z:{
            type:Number,
        },
        Proximity:{
            type:Number,
        },
        Sound_Level:{
            type:Number,
        },
        Latitude:{
            type:String,
        },
        Longitude:{
            type:String,
        },
        Altitude:{
            type:String,
        },
        Altitude_google:{
            type:String,
        },
        Speed:{
            type:String,
        },
        Accuracy:{
            type:String,
        },
        Orientation :{
            type:String,
        },
        Satellites_in_range:{
            type:String,
        },
        Time_since_start:{
            type:Number,
        },
        dateTime:{
            type:Date,
        },

    }
);

module.exports = mongoose.model("csvDb",csvSchema);