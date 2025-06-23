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
    hasImage.image = movie.image ? `${backEndUrl}/imgs/${movie.image}` :"image not aviable";

    return hasImage;
  })
    res.json({
  data:movieList ,
  status: 200,
});

})}


const show = (req, res) => {
    const movieId = parseInt(req.params.id);

    const sqlMovie = `SELECT *
                      FROM imdboolean.movies
                      WHERE ID = ?`;

    connection.query(sqlMovie, [movieId], (err, searchedMovie) => {
        if (err) {
            return res.status(500).json({ message: `Errore nella richiesta del film.` });
        }

        if (!searchedMovie.length) {
            return res.status(404).json({ message: `Impossibile trovare un film con ID ${movieId}.` });
        }

        let movie = searchedMovie[0];

        movie.image = movie.image ? `${backEndUrl}/imgs/${movie.image}` : "immagine non disponibile";

        const sqlReviews = `SELECT *
                            FROM imdboolean.reviews
                            WHERE movie_id = ?`;

        connection.query(sqlReviews, [movieId], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({ message: `Errore nella richiesta delle recensioni per il film ${movieId}.` });
            }

            movie.reviews = reviewResults;

            return res.json(movie);
        });
    });
};


const store = (req,res) => {
    
    const newReviewId= parseInt(req.params.id)


    const{name,vote,text} = req.body


    let errors=[]

    if(!vote ||  vote<1 ||vote>5) 
    {errors.push({message:"Vote must be a number between 1 and 5"})}

   if (!name) {
    errors.push({ message: "Please insert a name" });
  }

  if (!text || text.length < 10) {
    errors.push({
      message: "Your review is too short (at least 10 characters required)",
    });
  }

  if (errors.length > 0) {
    return res.status(402).json({ errors });

  }

   const query =
    `INSERT INTO imdboolean.reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)`;

    connection.query(query, [newReviewId ,name, vote, text], (err, results) => {
    if (err) return res.status(500).json({ message: "Query failed", err });

    res.status(201).json({ message: "review added successfully" });

    console.log(results);
  });

}


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