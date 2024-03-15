const express = require('express')
const app = express()
const recipes = require("./recipes.js")
console.log(recipes)

app.get('/api/recipes', (req,res) =>{
    res.json(recipes)
})


app.listen(3000, () =>{
console.log("Port is on 3000...")
})