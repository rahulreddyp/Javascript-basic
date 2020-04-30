require('dotenv').config()

const mongoose = require("mongoose")
const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cookieParser =require("cookie-parser")
const cors = require("cors")

// My Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

const stripeRoutes = require("./routes/stripepayment");
// BrainTree - paypal
const paypalRoutes = require("./routes/paypalpayment");


//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true, 
    useUnifiedTopology: true, 
    useCreateIndex:true 
}).then(() => {
    console.log("--DB CONNECTED--")
})

// Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)
app.use("/api", stripeRoutes)
app.use("/api", paypalRoutes)


//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is running at ${port}`);
})