// const express = require('express')
// const app = express()
// const recipes = require("./recipes.js")
// console.log(recipes)

// app.get('/api/recipes', (req,res) =>{
//     res.json(recipes)
// })


// app.listen(3000, () =>{
// console.log("Port is on 3000...")
// })





const express = require('express')
const app = express()
const items = require('./data.js')

app.get('/items', (req, res) =>{
    res.json(items)
})

app.post("/items", (req, res) => {
  const newItem = {
    name: req.body.name,
    id: req.body.id,
    price: req.body.price,
  }
  items.push()
})



app.listen(4000, () =>{
    console.log('My port is open at 4000...')
}
)