const express = require("express")
const app = express()

const pokedex = require("./pokemon/pokedex.json")


app.get("/pokedex", (req,res)=>{
    const filters = req.query
    const filteredValues = pokedex.filter(pokemon => {
        let isValid = true
        for (key in filters){
            let field = pokemon[key]
            if (typeof field === String){
                isValid = isValid && field == filters[key]
            }
            // console.log(key, pokemon[key], filters[key])
        }
        return isValid
    })
    
    res.status(200).json(filteredValues)
})

app.get("/pokedex/id/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const pokemon = pokedex.find(pokemon => pokemon.id === id)
    res.status(200).json(pokemon)
})


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})