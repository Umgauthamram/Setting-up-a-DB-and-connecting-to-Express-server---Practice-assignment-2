require('dotenv').config()
const mongoose = require('mongoose')

const connect = () =>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to database")
    })
    .catch((err)=>{
        console.log(`Error connecting to database: ${err}`)
    })
}

module.exports = connect