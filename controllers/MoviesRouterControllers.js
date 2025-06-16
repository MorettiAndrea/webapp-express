// setup

const connection = require("../data/db")
const { response } = require("express");

// richiesta tutti i film

const index = (req,res) => {const sql = `SELECT *
FROM imdboolean.movies`

connection.query(sql,(err,results) => {if(err) return res.status(500).json({error:"query request failed"})

    res.json({data:results,
        status: 200,
    })

})}


const show = (req,res) => {


    const movieid = parseInt(req.params.id)


    const sql = `SELECT *
    FROM imdboolean.movies
    WHERE ID = ?`


connection.query(sql,[movieid],(err,results) =>{
    if (err) return res.status(500).json({message :`query request failed`})

        if (!results.length) return  res.status(404).json({message : `cannot find a movie with id${movieid}`})
           
            const searchedMovie = results[0]
            res.json(searchedMovie)
})

}


const store = (req,res) => {}


const update = (req,res) => {}


const modify = (req,res) => {}


const destroy = (req,res) => {}


module.exports = {index, show, store, update, modify, destroy}