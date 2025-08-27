const dotenv=require('dotenv')
const express = require("express");
const cors= require("cors");
const bodyParser = require("body-parser");
const dbConnect = require('./config/db');
const adminRoutes =require('./routes/adminRoutes')
const skillRoutes=require('./routes/skillRoutes')
const certificateRoutes=require('./routes/certificatesRoutes')
const cloudinary = require("cloudinary").v2;
const app = express();

dotenv.config()
//database
dbConnect();

//Port
const PORT = process.env.PORT || 5000;
//CORS configuration
cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],

})


//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
app.use("/api/admin", adminRoutes);
app.use('/api/skills',skillRoutes);
app.use('/api/certificates',certificateRoutes);

//app listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});