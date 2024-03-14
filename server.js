const express = require('express')
const app = express()

app.get('/vegan', (req, res) =>{
    res.send('Vegan recepies')
})


app.listen(3000, () =>{
    console.log(`It's my express app`)
})

