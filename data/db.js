const mySql = require("mysql2")



const connection = mySql.createConnection({
    host: process.env.MY_HOST,
    user:process.env.MY_USERNAME,
    password:process.env.MY_PASSWORD,
    port:process.env.MY_PORT,
})

connection.connect((err)=> {if (err) throw err})

    console.log("db at work!");
    

    module.exports = connection