function internalServerError(err,req,res,next){res.status(500).json({message: err.message})}

module.exports = {internalServerError}

function notFoundHandler (req ,res ,next){res.status(404).json({message:"Pagina non trovata"})}



module.exports = { notFoundHandler,internalServerError };