const mySql = require("sql2")



const connection = mySql.createConnection({
    host: "localhost",
    user:"root",
    password:process.env.MY_PASSWORD,
    port:3306,
})

connection.connect((err)=> {if (err) throw err})

    console.log("db at work!");
    

    module.exports = connection