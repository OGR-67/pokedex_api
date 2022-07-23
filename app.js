const express = require("express")
const app = express()

const dex_controller = require("./controllers/pokedex_controller")


app.get("/pokedex", dex_controller.get_all_pokemons)

app.get("/pokedex/id/:id", dex_controller.get_poke_by_id)

app.get("/pokedex/filter/", dex_controller.pokedex_filter)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})