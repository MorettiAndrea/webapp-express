// setup

const connection = require("../data/db")
const { response } = require("express");
const backEndport = 3000
const backEndUrl = `http://localhost:${backEndport}`

// richiesta tutti i film

const index = (req,res) => {const sqlIndex = `SELECT *
FROM imdboolean.rewievs`

connection.query(sqlIndex,(err,results) => {if(err) return res.status(500).json({error:"query request failed"})


    res.json({
  data:results ,
  status: 200,
});

})}


const show = (req,res) => {


    const rewievsId = parseInt(req.params.id)


    const sqlShow = `SELECT *
    FROM imdboolean.rewievs
    WHERE ID = ?`


connection.query(sqlShow,[rewievsId],(err,results) =>{
    if (err) return res.status(500).json({message :`query request failed`})

        if (!results.length) return  res.status(404).json({message : `cannot find a rewievs with id ${rewievsId}`})
           
  
})

const review = response[0]
res.json(review)

}


const store = (req,res) => {}


const update = (req,res) => {}


const modify = (req,res) => {}


const destroy = (req,res) => { 
    
    const rewievsId = parseInt(req.params.id)


    const sqlDestroy = `DELETE
    FROM imdboolean.rewievs
    WHERE id = ?`;  
    
    connection.query(sqlDestroy,[rewievsId],(err,results) =>{

    if (err) return res.status(500).json({message :`query request failed`})

        if (!results.length) return  res.status(404).json({message : `cannot find a rewievs with id ${rewievsId}`})
           
         
            res.status(204).json({message:`rewievs with id${rewievs} has been deleted`})
})}


module.exports = {index, show, store, update, modify, destroy}