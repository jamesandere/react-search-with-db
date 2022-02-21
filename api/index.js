const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const usersRoute = require("./routes/user.js");

dotenv.config();

mongoose.connect("mongodb://localhost:27017/react-search")
.then(() => console.log("DB connection successful."))
.catch((err) => console.log(err))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", usersRoute);

app.listen(process.env.PORT, ()=> {
    console.log(`Server started on port ${process.env.PORT}`);
})