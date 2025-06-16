// router setup

const express= require("express")
const router = (express.Router)

// import controller

const movieRoutercontrollers = require("../controllers/MovieRouterControllers")

// index

router.get("/" , movieRoutercontrollers.index)

// show

router.get("/:id",movieRoutercontrollers.show)

// store

router.post("/" , movieRoutercontrollers.store)

// update

router.put("/:id",movieRoutercontrollers.update)

// modify

router.patch("/:id",movieRoutercontrollers.modify)

// destroy

router.delete("/:id",movieRoutercontrollers.destroy)