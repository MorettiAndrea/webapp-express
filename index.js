// setup

require("dotenv").config()
const express = require("express")
const app = express()
const backEndport = 3000
const backEndUrl = `http://localhost:${backEndport}`
const cors = require("cors")
const frontEndPort = 5173
const corsConfig ={origin: `http://localhost:${frontEndPort}`}


// imports

const movieRouter = require("./routers/moviesRouter")
const {internalServerError,notFoundHandler}= require("./errorHandlers/errorHandlers")


// express middlewares
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.static("public"))
app.use("/movies", movieRouter)


// errors middlewares

app.use(internalServerError);
app.use(notFoundHandler);

// port check

backEndport
app.listen(backEndport,() =>{console.log( `il server sta ascoltando su ${backEndUrl}`);
})