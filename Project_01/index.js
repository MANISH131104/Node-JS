const express = require("express");
const {connectMongoDB} = require("./connection")

const {logReqRes} = require('./middleWares')

const userRouter = require('./routes/user')


const { type } = require("os");

const app = express();
const PORT = 8000;

// Connection
connectMongoDB('mongodb://127.0.0.1:27017/youtube-app-1').then(() => 
    console.log("MongoDB Connected")
);

// Middleware - PlugIn
app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
});
