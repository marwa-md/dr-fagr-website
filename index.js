const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use (express.urlencoded({extended : false}));

mongoose
.connect(process.env.MONGO_URI)
.catch((err)=> console.log(err));

const PORT = process.env.PORT || 5000 ;

const router = require("./routes");
app.use ("/",router);

if (process.env.NODE_ENV === 'production')
{
app.use (express.static('client/build'));
}

app.listen(PORT, function (){
    console.log("Server running on " + PORT)
})