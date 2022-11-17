const express = require("express");
const router = express.Router();

const Record = require ("./recordModel");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const newRecord = new Record ({
        name,
        email,
        phone,
        message
    });

    newRecord
    .save()
    .then((doc)=> console.log(doc))
    .catch((err)=> console.log(err));

})

module.exports =router ;