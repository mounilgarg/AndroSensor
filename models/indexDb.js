const mongoose = require('mongoose');

const csvSchema = new mongoose.Schema(
    {
        "X(m/s2)":{
            type:Number,
        },
        "Y(m/s2)":{
            type:Number,
        },
        "Z(m/s2)":{
            type:Number,
        },
        "Proximity(i)":{
            type:Number,
        },
        "Sound Level(dB)":{
            type:Number,
        },
        "Latitude":{
            type:String,
        },
        "Longitude":{
            type:String,
        },
        "Altitude(m)":{
            type:String,
        },
        "Altitude-google(m)":{
            type:String,
        },
        "Speed(Kmh)":{
            type:String,
        },
        "Accuracy(m)":{
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
        "YYYY-MO-DD HH-MI-SS_SSS":{
            type:Date,
        },

    }
);

module.exports = mongoose.model("csvDb",csvSchema);