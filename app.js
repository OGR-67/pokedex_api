const express = require("express")
const app = express()

const pokedex = require("./pokemon/pokedex.json")


app.get("/pokedex", (req,res)=>{
    res.send("pokedex")
})


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})