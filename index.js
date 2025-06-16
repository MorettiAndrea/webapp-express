// setup

require("dotenv").config
const express = require("express")
const app = express()
const port = 3000
const localhost = `http://localhost:${port}`


// imports
const router = require("./routers/moviesRouter")
const {internalServerError,notFoundHandler}= require("./errorHandlers/errorHandlers")


// express middlewares

app.use(express.json())
app.use(express.static("public"))
app.use("/movies", router)

// errors middlewares

app.use(internalServerError);
app.use(notFoundHandler);

// port check

app.listen(port,() =>{console.log( `il server sta ascoltando su ${localhost}`);
})