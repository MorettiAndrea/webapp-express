// router setup

const express= require("express")
const movieRouter = (express.Router())

// import controller

const movieRoutercontrollers = require("../controllers/moviesRouterControllers")

// index

movieRouter.get("/" , movieRoutercontrollers.index)

// show

movieRouter.get("/:id",movieRoutercontrollers.show)

// store

movieRouter.post("/:id/reviews" , movieRoutercontrollers.store)

// update

movieRouter.put("/:id",movieRoutercontrollers.update)

// modify

movieRouter.patch("/:id",movieRoutercontrollers.modify)

// destroy

movieRouter.delete("/:id",movieRoutercontrollers.destroy)

module.exports = movieRouter