const mongoose = require ("mongoose");

const recordSchema =mongoose.Schema({
    name : String,
    phone : Number,
    email : String ,
    message : String
});

const Record = mongoose.model("Record", recordSchema);

module.exports =Record ;