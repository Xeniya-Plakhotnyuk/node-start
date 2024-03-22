const express = require('express')
const app = express()
// const items = require('./data.js')

const commentsRoute = require('./routes/Comments')
app.use('/comments', commentsRoute)


const postsRouter = require('./routes/Posts')
app.use('/posts', postsRouter)

const storiesRouter = require('./routes/Stories')
app.use('/stories', storiesRouter)

const likesRouter = require('./routes/Likes')
app.use('/likes', likesRouter)

// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// app.get('/items', (req, res) =>{
//     res.json(items)
// })

// app.post("/items", (req, res) => {
//   const newItem = {
//     name: req.body.name,
//     id: req.body.id,
//     price: req.body.price,
//   }
//   items.push(newItem)
//   res.json(items)
// })

// app.delete("/items:name", (req, res) =>{

// })


app.listen(4000, () =>{
    console.log('My port is open at 4000...')
})