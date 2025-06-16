// setup

const connection = require("../data/db")
const { response } = require("express");

const index = (req,res) => {const sql = `SELECT *
FROM imdboolean.movies`

connection.query(sql,(err,results) => {if(err) return res.status(500).json({error:"query request failed"})

    res.json({data:results,
        status: 200,
    })

})}


const show = (req,res) => {}


const store = (req,res) => {}


const update = (req,res) => {}


const modify = (req,res) => {}


const destroy = (req,res) => {}


module.exports = {index, show, store, update, modify, destroy}