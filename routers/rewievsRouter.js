// router setup

const express= require("express")
const reviewsRouter = (express.Router())

// import controller

const reviewsRoutercontrollers = require("../controllers/rewievsRouterControllers")

// index

reviewsRouter.get("/" , reviewsRoutercontrollers.index)

// show

reviewsRouter.get("/:id",reviewsRoutercontrollers.show)

// store

reviewsRouter.post("/" , reviewsRoutercontrollers.store)

// update

reviewsRouter.put("/:id",reviewsRoutercontrollers.update)

// modify

reviewsRouter.patch("/:id",reviewsRoutercontrollers.modify)

// destroy

reviewsRouter.delete("/:id",reviewsRoutercontrollers.destroy)

module.exports = reviewsRouter