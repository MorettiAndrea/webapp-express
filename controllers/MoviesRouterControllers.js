// setup

const connection = require("../data/db")
const { response } = require("express");
const backEndport = 3000
const backEndUrl = `http://localhost:${backEndport}`
// richiesta tutti i film

const index = (req,res) => {const sqlIndex = `SELECT *
FROM imdboolean.movies`

connection.query(sqlIndex,(err,results) => {if(err) return res.status(500).json({error:"query request failed"})

const movieList = results.map((movie) => {

    const hasImage = { ...movie
    };
    hasImage.image = movie.image ? `${backEndUrl}/public/imgs/${movie.image}` :"img not aviable";

    return hasImage;
  })
    res.json({
  data:movieList ,
  status: 200,
});

})}


const show = (req,res) => {


    const movieId = parseInt(req.params.id)


    const sqlShow = `SELECT *
    FROM imdboolean.movies
    WHERE ID = ?`


connection.query(sqlShow,[movieId],(err,results) =>{
    if (err) return res.status(500).json({message :`query request failed`})

        if (!results.length) return  res.status(404).json({message : `cannot find a movie with id ${movieId}`})
           

            const movieList = results.map((movie) => {

    const hasImage = { ...movie
    };
    hasImage.image = movie.image ? `http://localhost:3000/public/imgs/${movie.image}` :"img not aviable";

    return hasImage;
  })       
  
   res.json(movieList[0])
})

}


const store = (req,res) => {}


const update = (req,res) => {}


const modify = (req,res) => {}


const destroy = (req,res) => { 
    
    const movieId = parseInt(req.params.id)


    const sqlDestroy = `DELETE
    FROM imdboolean.movies
    WHERE id = ?`;  
    
    connection.query(sqlDestroy,[movieId],(err,results) =>{

    if (err) return res.status(500).json({message :`query request failed`})

        if (!results.length) return  res.status(404).json({message : `cannot find a movie with id ${movieId}`})
           
         
            res.status(204).json({message:`movie with id${movie} has been deleted`})
})}


module.exports = {index, show, store, update, modify, destroy}