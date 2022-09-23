const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 5000;

const authRoutes = require("./routes/users");

// mongoose
//   .connect(process.env.MONGO_URI, {
//     dbName: "TheNodeAuth",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connection Success.");
//   })
//   .catch((err) => {
//     console.error("Mongo Connection Error", err);
//   });

mongoose.connect("mongodb://localhost:27017/userData",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("Connected to db")
    }
    else{
        console.log("Error")
    }

})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.use("/users", authRoutes);
// app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});
